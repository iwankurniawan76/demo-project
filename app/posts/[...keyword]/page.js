import Form from "next/form";
import React from "react";

export default async function Page({ params }) {
  const { keyword } = await params;

  return (
    <div>
      My Post:{keyword[0]}
      <Form style={{ width: 400, height: 300 }} className="mx-auto xl:bg-neutral-400 pt-4 rounded-lg p-1" action="">
        <h3 className="text-rose-700 text-center mt-4 mb-4">INPUT PEGAWAI</h3>
        <div className="grid grid-cols-2">
          <label className="label w-20 bg-red-600">Nama</label>
          <div className="w-28">
            <input type="text" className="input" required />
          </div>
        </div>
        <footer className="grid grid-cols-2 mt-4">
          <button type="submit" className="bg-blue-500 hover:bg-green-500">
            Simpan
          </button>
          <button className="bg-rose-600"> Batal </button>
        </footer>
      </Form>
    </div>
  );
}
