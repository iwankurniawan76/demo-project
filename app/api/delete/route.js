import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  try {
    const { produk } = await req.json();
    if (!produk) {
      return NextResponse.json({ error: "Produk tidak ditemukan" }, { status: 400 });
    }

    const prisma = new PrismaClient();
    await prisma.produk.delete({
      where: { produk: produk },
    });

    // Redirect dengan query string
    return NextResponse.redirect(`/delete`);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
