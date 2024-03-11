const url = 'https://nextjs-test-pi-hazel-56.vercel.app/data/games.json';

export type Game = {
  identifier: string; // уникальный идентификатор игры
  seo_title: string; // уникальный SEO-ключ игры
  title: string; // Текстовое название игры
  provider: string; // ID провайдера игры
  categories: string[]; // Список ID категорий, в которые входит игра
  // ... другие, не имеющие отношения к текущей задаче, аттрибуты
};

export const fetchGames = async (): Promise<Game[]> => {
  const res = await fetch(url);
  const games = await res.json();
  return games;
};

export const getImgUrl = async (identifier: string) => {
  return `https://d2norla3tyc4cn.cloudfront.net/i/s3/${identifier}.webp`;
};
