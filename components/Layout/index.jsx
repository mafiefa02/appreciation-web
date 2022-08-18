import Navbar from "../Navbar";
import Footer from "../Footer";
import Container from "../Container/index.jsx";

export default function Layout({ loggedIn, children }) {
  return (
    <>
      <Navbar loggedIn={loggedIn} />
      <Container>{children}</Container>
      <Footer />
    </>
  );
}
