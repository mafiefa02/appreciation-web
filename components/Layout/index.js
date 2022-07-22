import Background from "../Background";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Container from "../Container";

export default function Layout(props) {
  return (
    <Background>
      <Navbar />
      <Container>{props.children}</Container>
      <Footer />
    </Background>
  );
}
