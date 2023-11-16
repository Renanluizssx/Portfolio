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
      <h1 className="text-center mb-5 mt-5">Projetos</h1>
      <Row className="justify-content-center">
        <Col xs={12} lg={6}>
          <Row className="flex-column flex-lg-row">
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
