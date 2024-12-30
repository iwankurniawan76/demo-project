"use client";
import { useState } from "react";
import { z } from "zod";

export default function EditForm() {
  // Data awal yang akan diedit
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  // State untuk error
  const [errors, setErrors] = useState({});
  // Skema validasi menggunakan Zod
  const schema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
  });
  // Fungsi untuk menangani perubahan input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // Fungsi untuk menangani submit form
  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah reload halaman
    // Validasi data dengan Zod
    const result = schema.safeParse(formData);

    if (!result.success) {
      // Jika validasi gagal, simpan error
      const validationErrors = result.error.errors.reduce((acc, curr) => {
        acc[curr.path[0]] = curr.message;
        return acc;
      }, {});
      setErrors(validationErrors);
      console.log("data elol");
    } else {
      // Jika validasi berhasil, reset error dan tampilkan data
      setErrors({});
      console.log("Valid data submitted:", formData);
      alert("Form submitted successfully!");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h2>Edit Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} style={{ width: "100%", padding: "8px", marginTop: "5px" }} />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} style={{ width: "100%", padding: "8px", marginTop: "5px" }} />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="email">Password:</label>
          <input type="text" id="email" name="password" value={formData.password} onChange={handleInputChange} style={{ width: "100%", padding: "8px", marginTop: "5px" }} />
        </div>
        <button
          type="submit"
          style={{
            padding: "10px 15px",
            backgroundColor: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Save
        </button>
      </form>
    </div>
  );
}
