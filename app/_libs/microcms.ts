// カテゴリクラス
export type Category = {
  name: string;
};

// News記事データクラス
export type News = {
  id: string;
  title: string;
  category: {
    name: string;
  };
  publishedAt: string;
  createdAt: string;
};
