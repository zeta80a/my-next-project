import Image from "next/image";
import { getMembersList } from "@/app/_libs/microcms";
import { MEMBERS_LIST_LIMIT } from "@/app/_constants";
import styles from "./page.module.css";

// ルーティング時はdefault exportする
export default async function Page() {
  //microCMSのサーバにAPI経由でアクセス。引数は最大の受け取り件数。
  const data = await getMembersList({ limit: MEMBERS_LIST_LIMIT });
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
