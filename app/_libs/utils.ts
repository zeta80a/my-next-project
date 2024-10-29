// ユーティリティライブラリ

import dayjs from "dayjs"; // 日付の書式を扱うライブラリ
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

// utcを扱うためのプラグイン設定
// dayjs.locale("ja"); //曜日を日本語出力ための設定
dayjs.extend(utc);
dayjs.extend(timezone);

export const formatDate = (date: string) => {
  return dayjs.utc(date).tz("Asia/Tokyo").format("YYYY/MM/DD");
  //   return dayjs.utc(date).tz("Asia/Tokyo").format("YYYY/MM/DD/ (ddd)");
};
