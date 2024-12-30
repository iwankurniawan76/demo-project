"use client";
import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      return setMessage("Please select a file");
    }

    const formData = new FormData();
    formData.append("foto", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        setMessage(`File uploaded successfully: ${result.fileName}`);
      } else {
        setMessage(`Upload failed: ${result.error}`);
      }
    } catch (error) {
      setMessage(error);
    }
  };

  return (
    <div>
      <h1>Upload File</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" name="foto" onChange={handleFileChange} multiple />
        <button type="submit">Upload</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
