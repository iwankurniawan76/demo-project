import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import { promises as fs } from "fs";

export const config = {
  api: {
    bodyParser: false, // Disable default body parser
  },
};

export const POST = async (req, res) => {
  const formData = await req.formData();
  const file = formData.get("foto");
  if (!file) {
    return NextResponse.json({ error: "Tidak ada file yang diterima." }, { status: 400 });
  }
  // Tentukan lokasi penyimpanan
  const uploadDir = path.join(process.cwd(), "public/images");

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = file.name.replaceAll(" ", " _");
  const filePath = path.join(uploadDir, filename);

  // Pastikan folder ada
  await fs.mkdir(uploadDir, { recursive: true });

  try {
    await writeFile(filePath, buffer);
    return NextResponse.json({ Message: "Success", status: 201, fileName: filename });
  } catch (error) {
    console.log(" Terjadi kesalahan ", error);
    return NextResponse.json({ Pesan: " Gagal", status: 500 });
  }
};
