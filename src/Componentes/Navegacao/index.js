import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";
function Navegacao() {
  return (
    <Row className="align-items-center justify-content-center">
      <Col xs={6} className="d-flex justify-content-center">
        <h1>Renan Luiz</h1>
      </Col>
      <Col xs={6} className="d-flex justify-content-center">
        <Link to="/">Home</Link>
        <Link to="/Sobre">Sobre</Link>
        <Link to="/Portfolio">Portfólio</Link>
      </Col>
    </Row>
  );
}
export default Navegacao;
