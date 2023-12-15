import Col from "react-bootstrap/esm/Col";
import { FaCode } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import { FaEye } from "react-icons/fa";
import "./printPortfolio.css";
function PrintPorfolio({
  nome,
  texto,
  imagem,
  titulo,
  urlBuild,
  urlGit,
  mostrar,
}) {
  return (
    <Col
      xs={12}
      sm={12}
      md={6}
      lg={6}
      xl={6}
      xxl={6}
      className={`d-flex justify-content-center ${mostrar}`}
    >
      <Card className="w-75 mt-4 d-flex">
        <Card.Img variant="top" src={imagem} alt={nome} />
        <Card.Body>
          <Card.Title className="fs-6">{titulo}</Card.Title>
          <div className=" d-flex justify-content-end flex-column">
            <Card.Text className="fs-5">{texto}</Card.Text>
            <div className=" links d-flex justify-content-center align-items-end">
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
