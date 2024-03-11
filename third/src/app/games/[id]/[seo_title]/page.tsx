import { notFound } from 'next/navigation';
import cn from 'classnames';

import styles from './page.module.css';
import { Game, fetchGames, getImgUrl } from 'shared/features/game/data';
import { Badge } from 'shared/shared/ui/Badge/Badge';
import { ResponsiveImage } from 'shared/shared/ui/ResponsiveImage/ResponsiveImage';

interface Props {
  params: { id: string; seo_title: string };
  searchParams: { [key: string]: string | string[] | undefined };
  game: Game;
}

export const getGameData = async ({
  id,
  seo_title,
}: {
  id: string;
  seo_title: string;
}) => {
  const games = await fetchGames();
  const filtred = games.filter(
    (game) => game.categories.includes(id) || game.provider === id
  );
  const game = filtred.find((item) => item.seo_title === seo_title);

  return game;
};

export default async function Page({ params: { id, seo_title } }: Props) {
  const game = await getGameData({ id, seo_title });
  const identifier = game?.identifier;
  const imgUrl = identifier ? await getImgUrl(identifier) : '';

  if (game) {
    return (
      <section className={styles.container}>
        <h5 className={styles.title}>{game.title}</h5>
        <div className={styles.imgContainer}>
          <ResponsiveImage src={imgUrl} minWidth={150} maxWidth={250} />
        </div>
        <div className={cn(styles.data)}>
          <strong className={styles.subtitle}>Categories:</strong>
          <ul className={styles.badgeList}>
            {game.categories.map((category) => (
              <li className={styles.badgeContainer} key={category}>
                <Badge title={category} />
              </li>
            ))}
          </ul>
        </div>
        <p className={styles.data}>
          <strong className={styles.subtitle}>Identifier:</strong>
          {game.identifier}
        </p>
        <p className={styles.data}>
          <strong className={styles.subtitle}>Provider:</strong>
          {game.provider}
        </p>
        <p className={styles.data}>
          <strong className={styles.subtitle}>Slug:</strong>
          {game.seo_title}
        </p>
      </section>
    );
  }

  return notFound();
}
