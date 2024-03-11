import styles from './page.module.css';
import { Game, fetchGames } from 'shared/features/game/data';
import Link from 'next/link';
import { Badge } from 'shared/shared/ui/Badge/Badge';

interface Props {
  games: Game[];
}

export default async function Index() {
  const games: Game[] = await fetchGames();

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Games list:</h1>
      </div>
      <div className={styles.container}>
        <ul className={styles.gameList}>
          {games.map((game) => {
            return (
              <li className={styles.gameListItem} key={game.identifier}>
                <h5 className={styles.itemTitle}>{game.title}</h5>
                <div className={styles.gameRow}>
                  {game.categories.map((category) => (
                    <Link
                      className={styles.gameLinkItem}
                      key={category}
                      href={`/games/${category}/${game.seo_title}`}
                    >
                      <Badge title={category} />
                    </Link>
                  ))}
                </div>
                <div className={styles.gameRow}>
                  {game.provider ? (
                    <>
                      Provider:{' '}
                      <Link href={`/games/${game.provider}/${game.seo_title}`}>
                        <span className={styles.provider}>{game.provider}</span>
                      </Link>
                    </>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
