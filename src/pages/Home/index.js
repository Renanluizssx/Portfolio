import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Navegacao from "../../Componentes/Navegacao";
import logoGit from "../../Assets/github.png";
import logoLinkedIn from "../../Assets/linkedin.jpg";
import logoWpp from "../../Assets/wpp.png";
import minhaFoto from "../../Assets/minhafoto.jpg";
import "./home.css";
function Home() {
  return (
    <Container fluid>
      <header>
        <Navegacao />
      </header>
      <main>
        <Row className="align-items-center main justify-content-center">
          <Col xs={6}>
            <Row className="align-items-center">
              <Col>
                <p>
                  Bem vindo ao meu Portfólio,
                  <h1>Eu sou um desenvolvedor Front-end</h1>
                  <a>Mais sobre mim</a>
                </p>
                <img src={logoGit} className="logo" alt="logo github" />
                <img src={logoLinkedIn} className="logo" alt="logo linkedin" />
                <img src={logoWpp} className="logo" alt="logo Whatsapp" />
              </Col>
              <Col>
                <img
                  src={minhaFoto}
                  alt="Minha foto"
                  className="rounded-circle"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </main>
    </Container>
  );
}
export default Home;
