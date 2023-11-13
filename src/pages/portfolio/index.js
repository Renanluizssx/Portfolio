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
      <Row className="justify-content-center">
        <Col xs={6}>
          <h1>Projetos</h1>
          <Row>
            {dadosPortfolio.map((dado, id) => (
              <PrintPorfolio
                key={id}
                nome={dado.nome}
                texto={dado.texto}
                imagem={dado.imagem}
                titulo={dado.titulo}
                urlBuild={dado.urlBuild}
                urlGit={dado.urlGit}
              />
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default Portfolio;
