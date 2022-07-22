import Navbar from "../Navbar";
import Footer from "../Footer";
import Container from "../Container";

export default function Layout(props) {
  return (
    <>
      <Navbar />
      <Container>{props.children}</Container>
      <Footer />
    </>
  );
}
