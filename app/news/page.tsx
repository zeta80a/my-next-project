import { getNewsList } from "@/app/_libs/microcms";
import NewsList from "../_components/NewsList";
import Pagination from "@/app/_components/Pagination"; //ページリンクボックス
import SearchField from "../_components/SearchField";
import { NEWS_LIST_LIMIT } from "../_constants";
// SSR方式でレンダリングする設定
export const revalidate = 0;

export default async function Page() {
  //debug
  // console.log("In app/news/page.tsx ");

  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
  });
  return (
    <>
      <SearchField />
      <NewsList news={news} />
      <Pagination totalCount={totalCount} />
    </>
  );
}
