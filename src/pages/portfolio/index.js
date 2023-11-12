import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Navegacao from "../../Componentes/Navegacao";
import { dadosPortfolio } from "../../ColeçaodeDados";
import PrintPorfolio from "../../Componentes/printPortfolio";
function Portfolio() {
  return (
    <Container fluid>
      <Navegacao />
      <Row>
        <Col>
          <h1>Projetos</h1>
          {dadosPortfolio.map((dado, id) => (
            <PrintPorfolio
              key={id}
              nome={dado.nome}
              imagem={dado.imagem}
              titulo={dado.titulo}
              urlBuild={dado.urlBuild}
            />
          ))}
        </Col>
      </Row>
    </Container>
  );
}
export default Portfolio;
