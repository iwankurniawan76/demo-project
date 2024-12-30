import Navbar from "../component/navbar";

export default function layoutdashbord({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <h3>LAYOUT DASHBORD</h3>
      <Navbar />
      {children}
    </section>
  );
}
