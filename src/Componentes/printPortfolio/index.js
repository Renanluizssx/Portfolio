import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { FaCode } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import { FaEye } from "react-icons/fa";
import "./printPortfolio.css";
function PrintPorfolio({ nome, texto, imagem, titulo, urlBuild, urlGit }) {
  return (
    <Col xs={12} lg={6} className="d-flex justify-content-center">
      <Card className="w-100">
        <Card.Img variant="top" src={imagem} className="w-100" alt={nome} />
        <Card.Body>
          <Card.Title className="fs-6">{titulo}</Card.Title>
          <Card.Text className="fs-5">{texto}</Card.Text>
          <div className="links">
            <a href={urlGit} rel="noreferrer" target="_blank">
              <FaCode />
            </a>
            <a href={urlBuild} target="_blank" rel="noreferrer">
              <FaEye />
            </a>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}
export default PrintPorfolio;
