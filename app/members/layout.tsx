// メンバーページとトップページのデザインの差異を補完するファイル
import Sheet from "@/app/_components/Sheet";
import Hero from "@/app/_components/Hero";

type Props = {
  children: React.ReactNode;
};

//export defaultで定義されている関数がシステムから自動的に呼び出される。
// {childern}にはページの内容が出力される。
export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="Members" sub="メンバー" />
      <Sheet>{children}</Sheet>
    </>
  );
}
