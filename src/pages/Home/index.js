import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Navegacao from "../../Componentes/Navegacao";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import minhaFoto from "../../Assets/minhafoto.jpg";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import "./home.css";
function Home() {
  return (
    <Container fluid>
      <nav>
        <Navegacao />
      </nav>
      <main>
        <Row className="align-items-center main justify-content-center">
          <Col xs={6}>
            <Row className="align-items-center">
              <Col>
                <p>
                  <span className="fs-4">Bem vindo ao meu Portfólio,</span>
                  <h2 className="fs-1 font-weight-bold text-dark">
                    Eu sou um desenvolvedor Front-end
                  </h2>
                  <LinkContainer to="/Sobre">
                    <Nav.Link className="fs-4">Mais sobre mim</Nav.Link>
                  </LinkContainer>
                </p>
                <a href="https://github.com/Renanluizssx" target="_blank">
                  <AiFillGithub
                    size="1.3rem"
                    className="m-1"
                    rel="noreferrer"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/renan-l-2a26661ba/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillLinkedin size="1.3rem" className="m-1" />
                </a>
                <a href="https://wa.me/5513991097587">
                  <AiOutlineWhatsApp
                    size="1.3rem"
                    className="m-1"
                    target="_blank"
                    rel="noreferrer"
                  />
                </a>
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
