import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Navegacao from "../../Componentes/Navegacao";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import minhaFoto from "../../Assets/minhafoto.jpg";
import { Link } from "react-router-dom";
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
                  <Link to="/Sobre" className="">
                    Mais sobre mim
                  </Link>
                </p>
                <AiFillGithub size="3rem" />
                <AiFillLinkedin size="3rem" />
                <AiOutlineWhatsApp size="3rem" />
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
