// ニュースの一覧ページ。ページネーションも併せてニュース一覧の最下部に表示
import { notFound } from "next/navigation";
import NewsList from "@/app/_components/NewsList";
import { getNewsList } from "@/app/_libs/microcms";
import Pagination from "@/app/_components/Pagination";
import { NEWS_LIST_LIMIT } from "@/app/_constants";

// 現在のレコードの行番号
type Props = {
  params: {
    current: string;
  };
};

export default async function Page({ params }: Props) {
  const current = parseInt(params.current, 10); //current文字列を10進数に変換。

  // currentが非数もしくは負の場合、エラー
  if (Number.isNaN(current) || current < 1) {
    notFound();
  }
  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    offset: NEWS_LIST_LIMIT * (current - 1),
  });
  // currentのコンテンツ件数が０件の場合、エラー
  if (news.length == 0) {
    notFound();
  }
  return (
    <>
      <NewsList news={news} />
      <Pagination totalCount={totalCount} current={current} />
    </>
  );
}
