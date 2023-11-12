import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/Button";
import { FaCode } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import "./printPortfolio.css";
function PrintPorfolio({ nome, imagem, titulo, urlBuild }) {
  return (
    <Row>
      <Col>
        <Card>
          <Card.Img variant="top" src={imagem} className="w-25" alt={nome} />
          <Card.Body>
            <Card.Title>{titulo}</Card.Title>
            <a href={urlBuild} target="_blank">
              <FaCode />
            </a>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
export default PrintPorfolio;
