import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Navegacao from "../../Componentes/Navegacao";
import html from "../../Assets/html.png";
import css from "../../Assets/css.png";
import js from "../../Assets/javascript.png";
import react from "../../Assets/react.png";
import bootstrap from "../../Assets/bootstrap.png";
import photoshop from "../../Assets/photoshop.png";
import corel from "../../Assets/corel.png";
import "./sobre.css";
function Sobre() {
  return (
    <Container fluid>
      <nav>
        <Navegacao />
      </nav>
      <Row>
        <Col>
          <h1 className="font-weight-bold">Renan Luiz</h1>
          <p>
            Olá, meu nome é Renan, estou estudando programação desde 2021,
            sempre querendo evoluir e me aprimorar em programação. Possuo foco
            no Desenvolvimento Web.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Hard Skills</h2>
          <img src={html} alt="html" className="imagem-hard-skills" />
          <img src={css} alt="css" className="imagem-hard-skills" />
          <img src={js} alt="javascript" className="imagem-hard-skills" />
          <img
            src={bootstrap}
            alt="javascript"
            className="imagem-hard-skills"
          />
          <img src={react} alt="javascript" className="imagem-hard-skills" />
          <img
            src={photoshop}
            alt="javascript"
            className="imagem-hard-skills"
          />
          <img src={corel} alt="javascript" className="imagem-hard-skills" />
        </Col>
      </Row>
    </Container>
  );
}
export default Sobre;
