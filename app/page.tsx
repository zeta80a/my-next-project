import styles from "./page.module.css";
import Image from "next/image"; // Imageタグ用
import { getNewsList } from "@/app/_libs/microcms";
import { TOP_NEWS_LIMIT } from "@/app/_constants";
import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";

export default async function Home() {
  //  const sliceData = data.contents.slice(0, 2);
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });
  //  const sliceData: News = [];

  // jsのスクリプトを書ける
  //const name = "真の世界";

  // HTMLのようなマークアップをかける
  // jsを書いたり、参照する際は{}で囲む
  /*
  return (
    <div>
      <h1>テクノロジーの力で{name}を変える</h1>
      <p>私たちはグローバルカンパニーです。</p>
    </div>
  );
  */

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
        {/*これはもっとみるボタン */}
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
