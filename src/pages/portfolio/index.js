import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Navegacao from "../../Componentes/Navegacao";
import { dadosPortfolio, principaisDadosPortfolio } from "../../ColeçaodeDados";
import { useState } from "react";
import PrintPorfolio from "../../Componentes/printPortfolio";
function Portfolio() {
  const [mostrar, setMostrar] = useState("d-none");
  const verificaMostrar = () => {
    mostrar === "d-block" ? setMostrar("d-none") : setMostrar("d-block");
  };
  return (
    <Container fluid>
      <Navegacao />
      <h1 className="text-center mb-5 mt-5">Projetos</h1>
      <Row className="align-items-center justify-content-center">
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          xxl={12}
          className="d-flex flex-row"
        >
          <Row className="justify-content-center">
            {principaisDadosPortfolio?.map((dado, id) => (
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
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <Row>
            {dadosPortfolio?.map((dado, id) => (
              <PrintPorfolio
                key={id}
                nome={dado.nome}
                texto={dado.texto}
                imagem={dado.imagem}
                titulo={dado.titulo}
                urlBuild={dado.urlBuild}
                urlGit={dado.urlGit}
                mostrar={mostrar}
              />
            ))}
          </Row>
        </Col>
        <button className="w-25 rounded mt-5" onClick={verificaMostrar}>
          {mostrar === "d-block" ? "mostrar menos" : "mostrar mais"}
        </button>
      </Row>
    </Container>
  );
}
export default Portfolio;
