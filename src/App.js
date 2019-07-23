import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import PrimaryMain from "./components/MainContent/PrimaryMain";
import SecondaryMain from "./components/MainContent/SecondaryMain";
import Footer from "./components/Footer/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PrimaryMain />
        <SecondaryMain />
        <Footer />
      </div>
    );
  }
}

export default App;
