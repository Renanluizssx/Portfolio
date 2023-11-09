import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
function Navegacao() {
  return (
    <Row className="align-items-center justify-content-center">
      <Navbar data-bs-theme="dark">
        <Col xs={6} className="d-flex justify-content-center">
          <h3>Renan Luiz</h3>
        </Col>
        <Col xs={6}>
          <Container>
            <Nav className="me-auto d-flex justify-content-center align-items-center">
              <LinkContainer to="/">
                <Nav.Link className="text-dark">Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Sobre">
                <Nav.Link className="text-dark">Sobre</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Portfolio">
                <Nav.Link className="text-dark">Portfolio</Nav.Link>
              </LinkContainer>
            </Nav>
          </Container>
        </Col>
      </Navbar>
    </Row>
  );
}
export default Navegacao;
