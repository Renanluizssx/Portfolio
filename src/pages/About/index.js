import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Navigation from "../../Components/Navigation";
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
import "./about.css";

function About() {
  return (
    <Container fluid>
      <nav>
        <Navigation />
      </nav>
      <Row className="row-description align-items-center justify-content-center">
        <Col xs={11} sm={11} md={11} lg={11} xl={11} xxl={11}>
          <Row>
            <Col className="text-center">
              <h1 className="font-weight-bold text-center">About</h1>
              <p>
                Hi, my name is Renan. I have been studying programming since
                2021, and I have always wanted to evolve and improve in
                programming.
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
              <h2 className="text-center">Technologies</h2>
              <div className=" w-25 container-images-hard-skills d-flex flex-wrap flex-lg-nowrap justify-content-center">
                <img src={html} alt="html" className="image-hard-skill" />
                <img src={css} alt="css" className="image-hard-skill" />
                <img src={js} alt="javascript" className="image-hard-skill" />
                <img src={ux} alt="ux" className="image-hard-skill" />
                <img src={sass} alt="sass" className="image-hard-skill" />
                <img
                  src={bootstrap}
                  alt="bootstrap"
                  className="image-hard-skill"
                />

                <img src={react} alt="react" className="image-hard-skill" />
                <img src={node} alt="node" className="image-hard-skill" />
                <img src={api} alt="api" className="image-hard-skill" />
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
                  className="image-hard-skill"
                />
                <img
                  src={corel}
                  alt="corel draw"
                  className="image-hard-skill"
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
                  <img src={ai900} alt="ai-900" className="image-hard-skill" />
                </a>
                <a
                  href="https://www.credly.com/badges/f5af1b30-6ac8-4e59-9205-1d232e516efd/public_url"
                  target="_blank"
                  without
                  rel="noreferrer"
                >
                  <img src={dp900} alt="dp-900" className="image-hard-skill" />
                </a>
                <a
                  href="https://www.cloudskillsboost.google/public_profiles/67b9e94e-1cb5-4c73-926e-119e976fa137"
                  target="_blank"
                  without
                  rel="noreferrer"
                >
                  <img src={cloud} alt="cloud" className="image-hard-skill" />
                </a>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
