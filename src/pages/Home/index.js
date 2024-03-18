import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Navigation from "../../Components/Navigation";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import myPhoto from "../../Assets/myphoto.jpg";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import "./home.css";

function Home() {
  return (
    <Container fluid>
      <nav>
        <Navigation />
      </nav>
      <main>
        <Row className="align-items-center main justify-content-center flex-lg-row">
          <Col xs={12} lg={12} className="flex-row">
            <Row className="justify-content-center align-items-center flex-row">
              <Col xs={12} lg={6} className="text-center">
                <p>
                  <span className="fs-4">Welcome to my Portfolio,</span>
                  <h2 className="fs-1 font-weight-bold text-dark">
                    I am a Full-Stack Developer
                  </h2>
                  <LinkContainer to="/About">
                    <Nav.Link className="fs-4">More About Me</Nav.Link>
                  </LinkContainer>
                </p>
                <a
                  href="https://github.com/Renanluizssx"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub size="1.3rem" className="m-1" />
                </a>
                <a
                  href="https://www.linkedin.com/in/renan-l-2a26661ba/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillLinkedin size="1.3rem" className="m-1" />
                </a>
                <a
                  href="https://wa.me/5513991097587"
                  without
                  rel="noreferrer"
                  target="_blank"
                >
                  <AiOutlineWhatsApp
                    size="1.3rem"
                    className="m-1"
                    target="_blank"
                    rel="noreferrer"
                  />
                </a>
              </Col>
              <Col xs={6} lg={3}>
                <div>
                  <img
                    src={myPhoto}
                    alt="Profile"
                    className="rounded-circle w-100"
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </main>
    </Container>
  );
}

export default Home;
