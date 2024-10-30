// ニュースの検索結果の画面
import { getNewsList } from "@/app/_libs/microcms";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import NewsList from "@/app/_components/NewsList";
import SearchField from "@/app/_components/SearchField";

// 検索文字列
type Props = {
  searchParams: {
    q?: string;
  };
};

export default async function Page({ searchParams }: Props) {
  //debug
  // console.log("In app/news/search/page.tsx ");

  const { contents: news } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    q: searchParams.q, // searchParams.qを使ってCMSにリクエスト
  });
  return (
    <>
      <SearchField />
      <NewsList news={news} />
    </>
  );
}
