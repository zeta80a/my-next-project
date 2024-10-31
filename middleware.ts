// BASIC認証ページ
//import { NextRequest, NextResponse } from "next/server";
import { createNextAuthMiddleware } from "nextjs-basic-auth-middleware";

export const middleware = createNextAuthMiddleware();

// マッチャー
export const config = {
  matcher: ["/(.*)"],
};
