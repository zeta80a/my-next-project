// 動的に生成されるニュース記事のページ
import { notFound } from "next/navigation";
import { getNewsDetail } from "@/app/_libs/microcms";
import Article from "@/app/_components/Article";
import ButtonLink from "@/app/_components/ButtonLink";
import styles from "./page.module.css";

type Props = {
  params: {
    slug: string;
  };
};

// スラッグページを生成
// paramas.slugには Linkタグのhref="/news/[slug]"が格納されている。
export default async function Page({ params }: Props) {
  //  return <div>{JSON.stringify(props)}</div>;
  // params.slugに記事のIdが格納されている。
  //　URLで指定されるページが存在しない場合、404ページへ遷移
  const data = await getNewsDetail(params.slug).catch(notFound);
  //   return <div>{data.title}</div>;
  //   return <div>{JSON.stringify(data)}</div>;
  return (
    <>
      {/* <div>slug={params.slug} </div> */}
      <Article data={data} />
      <div className={styles.footer}>
        <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
      </div>
    </>
  );
}
