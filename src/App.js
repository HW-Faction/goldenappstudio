import React from "react";
import "./App.css";
import { HashRouter, Route, Link } from "react-router-dom";
import MainApp from "./components/MainApp/MainApp";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Contact from "./components/MainApp/Contact/Contact";
import About from "./components/MainApp/About/About";

class App extends React.Component {
  render() {
    return (
      <HashRouter basename="/">
        <div>
          <Header />
          <Link to="/" />

          <Link to="/contact" />

          <Link to="/about" />
          <Route exact path="/" component={MainApp} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </div>
        <Footer />
      </HashRouter>
    );
  }
}

export default App;
