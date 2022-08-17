import Navbar from "../Navbar";
import Footer from "../Footer";
import Container from "../Container/index.jsx";

export default function Layout(props) {
  return (
    <>
      <Navbar />
      <Container>{props.children}</Container>
      <Footer />
    </>
  );
}
