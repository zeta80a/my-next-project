import { MEMBERS_LIST_LIMIT } from "../_constants"; // 例外的な措置のため
import NewsList from "../_components/NewsList";
import { getNewsList } from "../_libs/microcms";

export default async function Page() {
  // キャッシュが登録されてしまったため、例外的な措置
  const { contents: news } = await getNewsList({
    limit: MEMBERS_LIST_LIMIT,
  });
  // const { contents: news } = await getNewsList({});
  // 本来ならこちら;
  // const { contents: news } = await getNewsList();

  //   return <div>{JSON.stringify(news)}</div>;
  // 　キャッシュ経由のアクセスか否か確認する方法
  //   以下のコマンド実行し
  //   値が「Hit from cloudfront」となっている
  // 　　→ キャッシュを利用したレスポンス
  //　　値が「Miss from cloudfront」となっている
  // 　　→ オリジンからのレスポンス
  // curl -I "https://jh8ia037xo.microcms.io/api/v1/[Endpoint]" -H "X-MICROCMS-API-KEY: xxx"
  //
  return <NewsList news={news} />;
}
