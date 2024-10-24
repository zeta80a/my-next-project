// メニュー
"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import cx from "classnames";
import styles from "./index.module.css";

export default function Menu() {
  // nav要素をｊｓで直接操作する例
  //   const open = () => {
  //     document.querySelector("nav")?.classList.add(styles.open);
  //   };
  // isOpen:true→　ハンバーガメニューが開かれている
  // isOpen:false→　ハンバーガメニューが閉じている
  const [isOpen, setOpen] = useState<boolean>(false);
  const open = () => setOpen(true);
  const close = () => setOpen(false);
  return (
    <div>
      {/* navスタイルはスマホ版ではnone,pc版では未定義  */}
      {/* buttonスタイルはスマホ版ではflex,pc版ではnone  */}
      {/* 従って */}
      {/* スマホ版ではハンバーガボタンのみ表示される  */}
      {/* ｐｃ版では通常のメニューのみが表示され、ハンバーガボタンは非表示  */}
      {/* ハンバーガボタンクリックでisOpenをtrueに設定すると */}
      {/* navタグのclassNameが "styles.nav styles.open"となる。　*/}
      {/* よって、.nav.openスタイルが適用されてスマホ用itemsスタイルが適用されたスマホ用メニューが表示される。*/}
      {/* 閉じるボタンを押すとisOpenがfalseになり、navスタイルのみが適用されたnavタグが表示される。*/}
      {/* つまりハンバーガボタンはスマホ版では常に表示されているが、*/}
      {/* スマホ用メニューが開いているときは閉じるボタンの方が前面にあるため影響なし。 */}
      <nav className={cx(styles.nav, isOpen && styles.open)}>
        <ul className={styles.items}>
          <li>
            {/* isOpenは{isOpen}としてWEBページには出力されない。Reactが論理値を自動的に出力からスキップするため。*/}
            {/* {isOpen.toString()}と関数を挟めば出力できる。*/}
            <Link href="/news">ニュース</Link>
          </li>
          <li>
            <Link href="/members">メンバー</Link>
          </li>
          <li>
            <Link href="/contact">お問い合わせ</Link>
          </li>
        </ul>
        <button className={cx(styles.button, styles.close)} onClick={close}>
          <Image
            src="/close.svg"
            alt="閉じる"
            width={24}
            height={24}
            priority
          />
        </button>
      </nav>
      <button className={styles.button} onClick={open}>
        <Image src="/menu.svg" alt="メニュー" width={24} height={24} />
      </button>
    </div>
  );
}
