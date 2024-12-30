import { createConnection } from "@/lib/db";
import { NextResponse, NextRequest } from "next/server";

export async function GET() {
  try {
    const db = await createConnection();
    const sql = "SELECT * FROM post";
    const [post] = await db.query(sql);

    return NextResponse.json({ posts: post });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message });
  }
}
