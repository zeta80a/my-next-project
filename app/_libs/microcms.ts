// カテゴリクラス
// exportしておく。
// 呼出し時は
//  import {[クラス名]}で呼び出せる。
// もしdefaultで定義されていれば
//  import [クラス名]　で呼び出せる。
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
