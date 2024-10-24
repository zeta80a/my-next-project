import Image from "next/image";
import styles from "./page.module.css";

const data = {
  contents: [
    {
      id: "1",
      image: {
        url: "/img-member1.jpg",
        width: 240,
        height: 240,
      },
      name: "デビット・デビット",
      position: "CEO",
      profile:
        "profile1profile1profile1profile1profile1profile1profile1profile1profile1profile1profile1profile1profile1profile1profile1profile1profile1profile1profile1profile1profile1profile1profile1profile1profile1profile1profile1profile1profile1profile1profile1profile1profile1profile1profile1profile1profile1profile1profile1profile1profile1profile1",
    },
    {
      id: "2",
      image: {
        url: "/img-member2.jpg",
        width: 240,
        height: 240,
      },
      name: "エミリー・エミリー",
      position: "COO",
      profile:
        "エグゼクティブエグゼクティブエグゼクティブエグゼクティブエグゼクティブエグゼクティブエグゼクティブエグゼクティブエグゼクティブエグゼクティブエグゼクティブエグゼクティブエグゼクティブエグゼクティブエグゼクティブエグゼクティブエグゼクティブエグゼクティブエグゼクティブエグゼクティブエグゼクティブエグゼクティブエグゼクティブ",
    },
    {
      id: "3",
      image: {
        url: "/img-member3.jpg",
        width: 240,
        height: 240,
      },
      name: "ジョン・ジョン",
      position: "CTO",
      profile:
        "先進技術者先進技術者先進技術者先進技術者先進技術者先進技術者先進技術者先進技術者先進技術者先進技術者先進技術者先進技術者先進技術者先進技術者先進技術者先進技術者先進技術者先進技術者先進技術者先進技術者先進技術者先進技術者先進技術者先進技術者先進技術者先進技術者先進技術者先進技術者先進技術者先進技術者先進技術者先進技術者先進技術者先進技術者先進技術者",
    },
  ],
};

// ルーティング時はdefault exportする
export default function Page() {
  return (
    <div className={styles.container}>
      {data.contents.length === 0 ? (
        <p className={styles.empty}>メンバーが登録されていません。</p>
      ) : (
        <ul>
          {/* map関数は配列を返す関数 */}
          {/* .map((member)=>(...))の=>(...)は(...)の中を戻り値をとして返す。*/}
          {/* つまり(member)=>{return ... ;} を省略した記述。*/}
          {data.contents.map((member) => (
            <li key={member.id} className={styles.list}>
              <Image
                src={member.image.url}
                alt=""
                width={member.image.width}
                height={member.image.height}
                className={styles.image}
              />
              <dl>
                <dt className={styles.name}>{member.name}</dt>
                <dd className={styles.position}>{member.position} </dd>
                <dd className={styles.profile}>{member.profile}</dd>
              </dl>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
