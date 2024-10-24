// layout.tsx:全てのページに適用されるレイアウトを規定する。
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

// export defaultで定義された関数がシステムから自動的に最初に呼び出される。
// こののち、他ファイルで定義されたdefault functionが呼び出され
// その出力結果がchilrenに出力される。
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
