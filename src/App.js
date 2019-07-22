import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import PrimaryMain from "./components/MainContent/PrimaryMain";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PrimaryMain />
      </div>
    );
  }
}

export default App;
