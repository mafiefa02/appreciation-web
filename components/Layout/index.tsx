import Navbar from "../Navbar";
import Footer from "../Footer";
import Container from "../Container";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      <Navbar />
      <Container>{props.children}</Container>
      <Footer />
    </>
  );
}
