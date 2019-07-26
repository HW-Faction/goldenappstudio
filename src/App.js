import React from "react";
import "./App.css";
import MainApp from "./components/MainApp/MainApp";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <MainApp />
        <Footer />
      </div>
    );
  }
}

export default App;
