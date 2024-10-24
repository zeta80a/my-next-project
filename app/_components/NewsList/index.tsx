// ニュース表示コンポーネント
import Image from "next/image";

import styles from "./index.module.css";
import Category from "../Category";
import Date from "../Date";
import type { News } from "@/app/_libs/microcms"; // News記事データクラスを取得
import Link from "next/link";

type Props = {
  news: News[];
};

export default function NewsList({ news }: Props) {
  if (news.length == 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <ul>
      {news.map((article) => (
        <li key={article.id} className={styles.list}>
          <Link href={`/news/${article.id}`} className={styles.link}>
            {/* thumbnailは空の場合があるのでその処理 */}
            {article.thumbnail ? (
              <Image
                // 画像はmicroCMS社の独自の場所に保管される。urlはmicroCMS社独自のCDNのパス。
                src={article.thumbnail.url}
                alt=""
                className={styles.image}
                width={article.thumbnail.width}
                height={article.thumbnail.height}
              />
            ) : (
              <Image
                className={styles.image}
                src="/no-image.png"
                alt="No Image"
                width={1200}
                height={630}
              />
            )}
            <dl className={styles.content}>
              <dt className={styles.title}>{article.title}</dt>
              <dd className={styles.meta}>
                <Category category={article.category} />
                {/* ?? は左側のオペランドが null または undefined の場合に、*/}
                {/* 右側のオペランドの値を返します。それ以外の場合は*/}
                {/* 左側のオペランドの値をそのまま返します*/}
                <Date date={article.publishedAt ?? article.createdAt} />
              </dd>
            </dl>
          </Link>
        </li>
      ))}
    </ul>
  );
}
