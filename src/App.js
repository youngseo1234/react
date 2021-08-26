import React from "react";
import { Container } from "react-bootstrap";
import { Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InContent from "./pages/InContent";
import ListContent from "./pages/ListContent";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Route path="/" exact={true} component={ListContent} />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
