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
import node from "../../Assets/node.png";
import api from "../../Assets/api.png";
import "./sobre.css";
function Sobre() {
  return (
    <Container fluid>
      <nav>
        <Navegacao />
      </nav>
      <Row className="row-descricao align-items-center justify-content-center">
        <Col xs={11} lg={11}>
          <Row>
            <Col className="text-center">
              <h1 className="font-weight-bold">Sobre</h1>
              <p>
                Olá, meu nome é Renan, estou estudando programação desde 2021,
                sempre querendo evoluir e me aprimorar em programação. Possuo
                foco no Desenvolvimento Web.
              </p>
            </Col>
          </Row>
          <Row>
            <Col
              xs={12}
              lg={12}
              className="d-flex justify-content-center flex-column align-items-center"
            >
              <h2>Tecnologias</h2>
              <div className="d-flex container-imagens-hard-skills d-flex flex-wrap justify-content-center flex-lg-nowrap">
                <img src={html} alt="html" className="imagem-hard-skills" />
                <img src={css} alt="css" className="imagem-hard-skills" />
                <img src={js} alt="javascript" className="imagem-hard-skills" />
                <img
                  src={bootstrap}
                  alt="bootstrap"
                  className="imagem-hard-skills"
                />
                <img src={react} alt="react" className="imagem-hard-skills" />
                <img src={node} alt="node" className="imagem-hard-skills" />
                <img src={api} alt="api" className="imagem-hard-skills" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center flex-column align-items-center">
              <h2>Programas de Design</h2>
              <div className="d-flex">
                <img
                  src={photoshop}
                  alt="photoshop"
                  className="imagem-hard-skills"
                />
                <img
                  src={corel}
                  alt="corel draw"
                  className="imagem-hard-skills"
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default Sobre;
