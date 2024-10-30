import styles from "./page.module.css";
import Image from "next/image"; // Imageタグ用
import { getNewsList } from "@/app/_libs/microcms";
import { TOP_NEWS_LIMIT } from "@/app/_constants";
import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";
import { NEWS_LIST_LIMIT } from "@/app/_constants";

export default async function Home() {
  //  トップページのnewsの表示件数の上限を設定
  const data = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    //    limit: 20,
  });
  // Imageタグは画像サイズを指定したサイズに自動的最適化して配信する機能
  // 配信するサイズはwidth,heightでこの比率を維持する。
  // liタグにkeyにキー値を指定する。
  return (
    <>
      {/* ←　これはフラグメントタグの形略形。Reactではreturnは親要素を一つだけ返す必要があため。*/}
      {/* ヘッダー */}
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
          <p className={styles.description}>
            私たちは市場をリードするグローバルカンパニーです。
          </p>
        </div>
        {/* これはタイトルの背景の画像 */}
        <Image
          className={styles.bgimg}
          src="/img-mv.jpg"
          alt=""
          width={4000}
          height={1200}
        />
      </section>
      {/* 本文 */}
      <section className={styles.news}>
        <h2 className={styles.newsItemTitle}>News</h2>
        <NewsList news={data.contents} />
        {/* <div>{JSON.stringify(data.contents)}</div> */}
        {/*これはもっとみるボタン */}
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
