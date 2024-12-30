import { Prisma, PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const prisma = new PrismaClient();

    const produks = await prisma.produk.findMany();

    return Response.json({ produk: produks });
  } catch (error) {
    console.log(error);
    return Response.json({ error: error.message });
  }
}
