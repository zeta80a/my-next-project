// 動的に生成されるニュース記事のページ
// 、およびニュース編集画面
import { notFound } from "next/navigation";
import { getNewsDetail } from "@/app/_libs/microcms";
import Article from "@/app/_components/Article";
import ButtonLink from "@/app/_components/ButtonLink";
import styles from "./page.module.css";

// searchParamsにdraftkeyプロパティが格納される。
type Props = {
  params: {
    slug: string;
  };
  searchParams: {
    dk?: string;
  };
};

// レンダリングにSSR方式を指定
export const revalidate = 0;

// スラッグページを生成
// paramas.slugには Linkタグのhref="/news/[slug]"が格納されている。
export default async function Page({ params, searchParams }: Props) {
  //  return <div>{JSON.stringify(props)}</div>;
  // params.slugに記事のIdが格納されている。
  //　URLで指定されるページが存在しない場合、404ページへ遷移
  // debugコード
  // const tempSP = {
  //   draftKey: searchParams.dk,
  // };
  // const data = await getNewsDetail(params.slug, tempSP).catch(notFound);
  // {}の箇所はMicroCMSQueries型のオブジェクトを指す。
  // このオブジェクトはdraftKeyプロパティを持ち、draftKey: searchParams.dkで値を渡している。
  const data = await getNewsDetail(params.slug, {
    draftKey: searchParams.dk,
  }).catch(notFound);
  //   return <div>{data.title}</div>;
  //   return <div>{JSON.stringify(data)}</div>;
  return (
    <>
      {/* JSON(data):{JSON.stringify(data)} */}
      <Article data={data} />
      <div className={styles.footer}>
        <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
      </div>
    </>
  );
}
