import { Prisma, PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const prisma = new PrismaClient();

    const formData = await request.formData();
    const file = formData.get("photo");
    const prd = formData.get("produk");
    const harga = formData.get("harga");
    const hargaFnl = parseInt(harga, 10);

    const produks = await prisma.produk.create({
      data: {
        produk: prd,
        harga: hargaFnl,
      },
    });

    return Response.json({ produk: prd, harga: hargaFnl });
  } catch (error) {
    console.log(error);
    return Response.json({ error: error.message });
  }
}
