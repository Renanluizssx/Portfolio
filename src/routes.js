import { BrowserRouter, Routes as allRoutes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/portfolio";

function Routes() {
  return (
    <>
      <BrowserRouter>
        <allRoutes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </allRoutes>
      </BrowserRouter>
    </>
  );
}

export default Routes;
