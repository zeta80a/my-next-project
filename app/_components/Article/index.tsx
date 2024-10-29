// 記事表示コンポーネント
import Image from "next/image";
import { News } from "@/app/_libs/microcms";
import Date from "../Date";
import Category from "../Category";
import styles from "./index.module.css";

type Props = {
  data: News;
};

export default function Article({ data }: Props) {
  return (
    <main>
      <h1 className={styles.title}>{data.title}</h1>
      <p className={styles.description}>{data.description}</p>
      <div className={styles.meta}>
        <Category category={data.category} />
        {/* ??はNullish Coalescing Operator（ヌリッシュ合体演算子）で、JavaScript の機能の一部です。 */}
        {/* この演算子は、左側の値が null または undefined の場合にのみ、右側の値を返します。 */}
        <Date date={data.publishedAt ?? data.createdAt} />
      </div>
      <div>
        null以外だったらURLを表示「{data.thumbnail && data.thumbnail.url}」
      </div>
      {data.thumbnail && (
        <Image
          src={data.thumbnail.url}
          alt=""
          className={styles.thumbnail}
          width={data.thumbnail.width}
          height={data.thumbnail.height}
        />
      )}
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: data.content,
        }}
      />
    </main>
  );
}
