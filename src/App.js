import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainApp from "./components/MainApp/MainApp";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Contact from "./components/MainApp/Contact";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <div>
          <Link to="/" />

          <Link to="/contact" />

          <Link to="/topics" />
          <Route exact path="/" component={MainApp} />
          <Route path="/contact" component={Contact} />
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
