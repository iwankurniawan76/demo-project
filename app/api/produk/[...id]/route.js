import { createConnection } from "@/lib/db";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request, { params }) {
  try {
    const db = await createConnection();
    const sql = "SELECT * FROM post";
    const [post] = await db.query(sql);

    const query = (await params).id;

    return NextResponse.json({ posts: post, jenis: query[0] });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message });
  }
}
