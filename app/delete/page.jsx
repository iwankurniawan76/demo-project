"use client";
import { useEffect, useState } from "react";
import hapusData from "./deletefile";

export default function deleteData(req) {
  const [produk, setProduk] = useState("");

  const handleChange = (event) => {
    setProduk(event.target.value);
  };

  const hpsData = (e) => {
    e.preventDefault();
    hapusData(produk);
  };

  // useEffect(() => {
  //   hapusData(produk);
  // }, [produk]);

  return (
    <div>
      My Post:
      <form style={{ width: 400, height: 300 }} onSubmit={hpsData} method="post" encType="multipart/form-data" className="mx-auto xl:bg-neutral-400 pt-4 rounded-lg p-1" action="/api/delete">
        <h3 className="text-rose-700 text-center mt-4 mb-4">EDIT PEGAWAI</h3>
        <div className="grid grid-cols-2">
          <label className="label w-20 bg-red-600">Produk</label>
          <div className="w-28">
            <input type="text" name="produk" onChange={handleChange} className="produk" required />
          </div>
        </div>
        <div className="grid grid-cols-2">
          <label className="label w-20 bg-red-600">Harga</label>
          <div className="w-28">
            <input type="text" name="harga" className="harga" required />
          </div>
        </div>

        <footer className="grid grid-cols-2 mt-4">
          <button type="submit" className="bg-blue-500 hover:bg-green-500">
            Simpan
          </button>
          <button className="bg-rose-600"> Batal </button>
        </footer>
      </form>
    </div>
  );
}
