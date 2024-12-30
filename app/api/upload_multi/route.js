import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";
import { writeFile } from "fs/promises";

export const POST = async (req) => {
  const formData = await req.formData();
  const files = formData.getAll("foto"); // Mengambil semua file dengan nama field 'foto'

  if (files.length === 0) {
    return NextResponse.json({ error: "Tidak ada file yang diterima." }, { status: 400 });
  }
  // Tentukan lokasi penyimpanan
  const uploadDir = path.join(process.cwd(), "public/images");

  // Pastikan folder ada
  await fs.mkdir(uploadDir, { recursive: true });

  // Menyimpan semua file
  const savedFileNames = [];

  for (let file of files) {
    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = file.name.replaceAll(" ", "_"); // Mengganti spasi dengan underscore
    const filePath = path.join(uploadDir, filename); // Tentukan path file yang akan disimpan

    try {
      // Menyimpan file
      await writeFile(filePath, buffer);
      savedFileNames.push(filename); // Menyimpan nama file yang berhasil di-upload
    } catch (error) {
      console.log("Terjadi kesalahan saat menyimpan file:", error);
      return NextResponse.json({ error: `Gagal meng-upload file ${filename}`, status: 500 });
    }
  }

  // Mengembalikan respons sukses dengan nama file yang berhasil di-upload
  return NextResponse.json({ message: "File berhasil di-upload", fileNames: savedFileNames, status: 201 });
};
