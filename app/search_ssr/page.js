export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/search_ssr`);
  const produk = await res.json();

  return { props: { produk } };
}

export default function Dashboard({ produk }) {
  return (
    <ul>
      {produk.map((produk) => (
        <li key={produk.id}>{produk.produk}</li>
      ))}
    </ul>
  );
}
