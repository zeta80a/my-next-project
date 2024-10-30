// ページリンクコンポーネント
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import Link from "next/link";
import styles from "./index.module.css";

// currentで現在のページを受け取る
type Props = {
  totalCount: number;
  current?: number;
  basePath?: string;
};

// currentのデフォルトは1と設定。
export default function Pagination({
  totalCount,
  current = 1,
  basePath = "/news",
}: Props) {
  // Array.fromメソッドはlengthプロパティで指定される長さの配列を生成
  // 次に匿名関数の使ってその戻り値で配列の中身を初期化。iは配列のidが自動的に渡される。
  // "_" は配列の名前が無名であることを示す。
  const pages = Array.from(
    { length: Math.ceil(totalCount / NEWS_LIST_LIMIT) },
    (_, i) => i + 1
  );
  // ページリンクボックス出力
  // currentページとそうではないページでボックス表示を変える。
  // 生成した配列の中身は[1,2,...]。この配列から値を順に取り出して、カレントでなければLinkを生成。カレントであればスタイルにカレントボックスを適用。
  return (
    <nav>
      {/* InPagination: pages:[{pages}] pages.length:{pages.length}
      totalCount{totalCount},current {current} */}
      <ul className={styles.container}>
        {pages.map((p) => (
          <li key={p} className={styles.list}>
            {current !== p ? (
              <Link href={`${basePath}/p/${p}`} className={styles.item}>
                {p}
              </Link>
            ) : (
              <span className={`${styles.item} ${styles.current}`}>{p}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
