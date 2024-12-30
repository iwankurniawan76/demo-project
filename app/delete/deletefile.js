export default async function hapusData(produk) {
  try {
    const response = await fetch("/api/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ produk: produk }), // Kirim ID produk yang ingin dihapus
    });

    if (response.ok) {
      const result = await response.json();
      console.log("Data deleted successfully:", result);
    } else {
      console.log({ msg: err });
    }
  } catch (err) {
    console.log({ msg: err });
  }
}
