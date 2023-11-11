import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Navegacao from "../../Componentes/Navegacao";
function Portfolio() {
  return (
    <Container fluid>
      <Navegacao />
      <Row>
        <Col>
          <h1>Projetos</h1>
        </Col>
      </Row>
    </Container>
  );
}
export default Portfolio;
