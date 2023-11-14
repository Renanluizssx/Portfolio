import Col from "react-bootstrap/esm/Col";
import { FaCode } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import { FaEye } from "react-icons/fa";
import "./printPortfolio.css";
function PrintPorfolio({ nome, texto, imagem, titulo, urlBuild, urlGit }) {
  return (
    <Col
      xs={12}
      lg={12}
      xl={12}
      xxl={6}
      className="d-flex justify-content-center"
    >
      <Card className="w-100 mt-4">
        <Card.Img variant="top" src={imagem} className="w-100" alt={nome} />
        <Card.Body>
          <Card.Title className="fs-6">{titulo}</Card.Title>
          <div className="boxe-texto d-flex justify-content-end flex-column">
            <Card.Text className="fs-5">{texto}</Card.Text>
            <div className="d-flex justify-content-center">
              <a
                href={urlGit}
                rel="noreferrer"
                target="_blank"
                className="me-1"
              >
                <FaCode />
              </a>
              <a href={urlBuild} target="_blank" rel="noreferrer">
                <FaEye />
              </a>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}
export default PrintPorfolio;
