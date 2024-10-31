// newsページのレイアウトを定義
import Hero from "@/app/_components/Hero";
import Sheet from "@/app/_components/Sheet";

type Props = {
  children: React.ReactNode;
};

// SSR方式でレンダリングする設定(0でキャッシュを全く使用しない（SSR方式）。>0の整数でISR方式)
export const revalidate = 60;

// childrenにはpage.tsxのPage()の戻り値が格納される。
export default function NewsLayout({ children }: Props) {
  return (
    <>
      <Hero title="News" sub="ニュース" />
      <Sheet>{children}</Sheet>
    </>
  );
}
