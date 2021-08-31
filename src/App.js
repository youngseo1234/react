import React from "react";
import { Container } from "react-bootstrap";
import { Route } from "react-router-dom";
import Chat from "./components/Chat/Chat";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Left from "./components/Left";

import Login from "./components/Login/Login";
import Right from "./components/Right";
import Home from "./pages/Home";
import InContent from "./pages/InContent";
import ListContent from "./pages/ListContent";

function App() {
  return (
    <div>
      <Header />
      <div className="d-flex">
        <Left />
        <Route path="/home" exact={true} component={Home} />

        <Route path="/inContent" exact={true} component={InContent} />
        <Route path="/listContent" exact={true} component={ListContent} />
        <Route path="/login" exact={true} component={Login} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
