"use client";
import { useState } from "react";

export default function Home() {
  const [files, setFiles] = useState([]); // Ubah menjadi array untuk menangani banyak file
  const [message, setMessage] = useState("");

  const handleFileChange = (event) => {
    // Ambil semua file yang dipilih dan set ke state
    setFiles(Array.from(event.target.files));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (files.length === 0) {
      return setMessage("Please select one or more files.");
    }

    const formData = new FormData();

    // Tambahkan semua file ke FormData
    files.forEach((file) => {
      formData.append("foto", file); // Gunakan nama field 'files' untuk multiple file
    });

    try {
      const response = await fetch("/api/upload_multi", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        setMessage(`Files uploaded successfully: ${result.fileNames.join(", ")}`);
      } else {
        setMessage(`Upload failed: ${result.error}`);
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h1>Upload Multiple Files</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          name="foto"
          onChange={handleFileChange}
          multiple // Menambahkan multiple untuk memungkinkan pemilihan banyak file
        />
        <button type="submit">Upload</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
