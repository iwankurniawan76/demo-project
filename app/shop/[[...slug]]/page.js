export default async function Page({ params }) {
  const slug = await params.slug;
  return (
    <div>
      My Produk:
      {slug ? (
        <ul>
          {slug.map((p, i) => (
            <li>
              {i + 1} = {p}{" "}
            </li>
          ))}
        </ul>
      ) : (
        "tidak ada"
      )}
      <button style={{ color: "red" }}>Tambah</button>
    </div>
  );
}
