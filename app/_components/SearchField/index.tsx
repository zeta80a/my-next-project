"use client";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./index.module.css";
import { Suspense } from "react"; // use clientによる検索を最低限に絞るための設定

//export default function SearchField() {
function SearchFieldComponent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //サーバへフォームデータを送らない。デフォルトはサーバへ送る動作のため、それをキャンセル。

    // formのinputにname属性でqが指定されている。
    // currentTargetは、この場合formを指している。
    // elementsプロパティはこのformの全ての要素を保持。
    // namedItemはname属性をリストアップする。もし複数あった場合、配列に格納する。
    const q = e.currentTarget.elements.namedItem("q");
    if (q instanceof HTMLInputElement) {
      // console.log(`**** q instanceof => q.value=>${q.value}*****`); //debug

      // URLSearchParamsはWebAPIの一つ。URLクエリパラメータの解析に使用。
      const params = new URLSearchParams();
      // console.log(`****before: params =>${params.toString()}*****`); //debug
      // paramsを設定してそれをURLに埋め込んでそのURLにページ遷移
      params.set("q", q.value.trim());
      // console.log(`****after: params =>${params.toString()}*****`); //debug
      router.push(`/news/search?${params.toString()}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.search}>
        <Image
          src="/search.svg"
          alt="検索"
          width={16}
          height={16}
          loading="eager" //この画像を即座に読み込む
        />
        <input
          type="text"
          name="q"
          defaultValue={searchParams.get("q") ?? undefined}
          // defaultValue={undefined}
          placeholder="キーワードを入力"
          className={styles.searchInput}
        />
      </label>
    </form>
  );
}

// 最低限のuse clientにするためにラッピング
export default function SearchField() {
  //debug
  // console.log("In -> SearchField ");

  return (
    <Suspense>
      {/* useSearchParamsを使うとそのコンポーネントは自動的にuser clientになる。それを避けるためにSuspenseを使って分離することによりその影響が他のコンポーネントに及ばないようにする */}
      <SearchFieldComponent />
    </Suspense>
  );
}
