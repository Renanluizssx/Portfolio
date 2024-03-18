import Col from "react-bootstrap/esm/Col";
import { FaCode } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import { FaEye } from "react-icons/fa";
import "./printPortfolio.css";

function PrintPortfolio({ name, text, image, title, buildUrl, gitUrl, show }) {
  return (
    <Col
      xs={12}
      sm={12}
      md={6}
      lg={6}
      xl={6}
      xxl={6}
      className={`d-flex justify-content-center ${show}`}
    >
      <Card className="w-75 mt-4 d-flex">
        <Card.Img variant="top" src={image} alt={name} />
        <Card.Body>
          <Card.Title className="fs-6">{title}</Card.Title>
          <div className="d-flex justify-content-end flex-column">
            <Card.Text className="fs-5">{text}</Card.Text>
            <div className="links d-flex justify-content-center align-items-end">
              <a
                href={gitUrl}
                rel="noreferrer"
                target="_blank"
                className="me-1"
              >
                <FaCode />
              </a>
              <a href={buildUrl} target="_blank" rel="noreferrer">
                <FaEye />
              </a>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default PrintPortfolio;
