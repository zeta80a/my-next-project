//// 共通ライブラリ
// microCMSと通信するために必要なライブラリ
import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListContent,
} from "microcms-js-sdk";

export type Member = {
  name: string;
  position: string;
  profile: string;
  image: MicroCMSImage;
} & MicroCMSListContent;

// exportしておく。
// 呼出し時は
//  import {[クラス名]}で呼び出せる。
// もしdefaultで定義されていれば
//  import [クラス名]　で呼び出せる。
export type Category = {
  name: string;
} & MicroCMSListContent;

// News記事データクラス
export type News = {
  title: string;
  description: string;
  content: string;
  thumbnail?: MicroCMSImage;
  category: Category;
} & MicroCMSListContent;

// 参照エラーが出ていなかチェック
if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_kEY is required");
}

// sdkで定義されている関数。クライアント作成する。
const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

//　メンバー一覧を表示する関数
// MicroCMSQueries: microCMSのAPIに渡す型情報。sdkで定義されている。
export const getMembersList = async (queries?: MicroCMSQueries) => {
  // getList<[取得するデータの型]>
  // await:処理が終わるまで待つ。ayncはawaitを使うときは必ず記述
  const listData = await client.getList<Member>({
    endpoint: "members",
    queries,
  });
  return listData;
};

export const getNewsList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<News>({
    endpoint: "news",
    queries,
  });
  return listData;
};

//ニュースの詳細情報を取得
// contendIdをキーにニュース記事を取得する。queriesは任意。
export const getNewsDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<News>({
    endpoint: "news",
    contentId,
    queries,
    customRequestInit: {
      next: {
        revalidate: queries?.draftKey === undefined ? 60 : 0,
      },
    },
  });
  return detailData;
};

// getCategoryDetail
//category.idの存在をチェックする関数
// 引数はcontentId,queries?
export const getCategoryDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<Category>({
    endpoint: "categories",
    contentId,
    queries,
  });
  return detailData;
};

//newsを全件取得する。
// getAllContentsはmicrocms-js-sdkのメソッド
export const getAllNewsList = async () => {
  const listData = await client.getAllContents<News>({
    endpoint: "news",
  });
  return listData;
};

// categoryを全件取得する。
// getAllContentsはmicrocms-js-sdkのメソッド
export const getAllCategoryList = async () => {
  const listData = await client.getAllContents<Category>({
    endpoint: "categories",
  });
  return listData;
};
