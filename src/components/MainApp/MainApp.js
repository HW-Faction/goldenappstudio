import React, { Component } from "react";
import SecondaryMain from "../MainContent/SecondaryMain";
import PrimaryMain from "../MainContent/PrimaryMain";
import HEadFirst from "../../HEadFirst";

export default class MainApp extends Component {
  render() {
    return (
      <div>
        <SecondaryMain />
        <PrimaryMain />
      </div>
    );
  }
}
