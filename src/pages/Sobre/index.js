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
import ux from "../../Assets/ux.png";
import ai900 from "../../Assets/ai-900.png";
import dp900 from "../../Assets/dp-900.png";
import cloud from "../../Assets/cloud.png";
import sass from "../../Assets/sass.png";
import "./sobre.css";
function Sobre() {
  return (
    <Container fluid>
      <nav>
        <Navegacao />
      </nav>
      <Row className="row-descricao align-items-center justify-content-center">
        <Col xs={11} sm={11} md={11} lg={11} xl={11} xxl={11}>
          <Row>
            <Col className="text-center">
              <h1 className="font-weight-bold text-center">Sobre</h1>
              <p>
                Hi, my name's Renan, i am studying programming since 2021, i have always been wanting to envolve and improve in programming.
              </p>
            </Col>
          </Row>
          <Row>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              xxl={12}
              className="d-flex justify-content-center flex-column align-items-center"
            >
              <h2 className="text-center">Tecnologies</h2>
              <div className=" w-25 container-imagens-hard-skills d-flex flex-wrap flex-lg-nowrap justify-content-center">
                <img src={html} alt="html" className="imagem-hard-skills" />
                <img src={css} alt="css" className="imagem-hard-skills" />
                <img src={js} alt="javascript" className="imagem-hard-skills" />
                <img src={ux} alt="ux" className="imagem-hard-skills" />
                <img src={sass} alt="sass" className="imagem-hard-skills" />
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
              <h2 className="text-center">Program Design</h2>
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
          <Row>
            <Col>
              <h2 className="text-center">Certifications</h2>
              <div className="d-flex flex-wrap align-items-center justify-content-center">
                <a
                  href="https://www.credly.com/badges/2a384699-4b56-45d5-b167-f0fe2b0a0891/public_url"
                  target="_blank"
                  without
                  rel="noreferrer"
                >
                  <img
                    src={ai900}
                    alt="ai-900"
                    className="imagem-hard-skills"
                  />
                </a>
                <a
                  href="https://www.credly.com/badges/f5af1b30-6ac8-4e59-9205-1d232e516efd/public_url"
                  target="_blank"
                  without
                  rel="noreferrer"
                >
                  <img
                    src={dp900}
                    alt="dp-900"
                    className="imagem-hard-skills"
                  />
                </a>
                <a
                  href="https://www.cloudskillsboost.google/public_profiles/67b9e94e-1cb5-4c73-926e-119e976fa137"
                  target="_blank"
                  without
                  rel="noreferrer"
                >
                  <img src={cloud} alt="cloud" className="imagem-hard-skills" />
                </a>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default Sobre;
