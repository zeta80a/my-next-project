import React from "react";
import styles from "./index.module.css";

type Props = {
  href: string;
  children: React.ReactNode;
};

// 他のファイルで使用できるようにexport
// 複数exportする場合はnamed exportを使う(p.60)
// pages.tsxから呼び出されて、最終的には/newsが遷移先のaタグを生成する。
export default function ButtonLink({ href, children }: Props) {
  return (
    <a href={href} className={styles.button}>
      {children}
    </a>
  );
}
