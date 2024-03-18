import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Navigation from "../../Components/Navigation";
import { portfolioData, mainPortfolioData } from "../../DataCollection";
import { useState } from "react";
import PrintPortfolio from "../../Components/printPortfolio";

function Portfolio() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <Container fluid>
      <Navigation />
      <h1 className="text-center mb-5 mt-5">Projects</h1>
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
            {mainPortfolioData?.map((data, id) => (
              <PrintPortfolio
                key={id}
                name={data.name}
                text={data.text}
                image={data.image}
                title={data.title}
                buildUrl={data.buildUrl}
                gitUrl={data.gitUrl}
              />
            ))}
          </Row>
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <Row>
            {portfolioData?.map((data, id) => (
              <PrintPortfolio
                key={id}
                name={data.name}
                text={data.text}
                image={data.image}
                title={data.title}
                buildUrl={data.buildUrl}
                gitUrl={data.gitUrl}
                show={showMore ? "d-block" : "d-none"}
              />
            ))}
          </Row>
        </Col>
        <button className="w-25 rounded mt-5" onClick={toggleShowMore}>
          {showMore ? "Show less" : "Show more"}
        </button>
      </Row>
    </Container>
  );
}

export default Portfolio;
