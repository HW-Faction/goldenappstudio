import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainApp from "./components/MainApp/MainApp";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Contact from "./components/MainApp/Contact/Contact";
import About from "./components/MainApp/About/About";

class App extends React.Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Header />
          <Link to="/" />

          <Link to="/goldenappstudio/contact" />

          <Link to="/goldenappstudio/about" />
          <Route exact path="/" component={MainApp} />
          <Route path="/goldenappstudio/contact" component={Contact} />
          <Route path="/goldenappstudio/about" component={About} />
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
