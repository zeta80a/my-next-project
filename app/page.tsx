import styles from "./page.module.css";
import Image from "next/image"; // Imageタグ用

import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";
import { News } from "@/app/_libs/microcms"; // News記事データクラスを取得
// id,title,category{name},publishedAt,createdAt,
const data: { contents: News[] } = {
  contents: [
    {
      id: "1",
      title: "渋谷にオフィスを移転",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/05/19",
      createdAt: "2023/05/19",
    },
    {
      id: "2",
      title: "当社CEOが業界リーダTop30に選出",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/05/19",
      createdAt: "2023/05/19",
    },
    {
      id: "3",
      title: "テスト記事",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/04/19",
      createdAt: "2023/04/19",
    },
  ],
};

export default function Home() {
  const sliceData = data.contents.slice(0, 2);
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
        <NewsList news={sliceData} />
        {/*これはもっとみるボタン */}
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
