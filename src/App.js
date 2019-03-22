import React, { Component } from "react";
import "./App.css";
import Popular from "./components/Popular";
import TopRated from "./components/TopRated";
import Upcoming from "./components/Upcoming";

class App extends Component {
  state = { resulta: <Popular />, hover: "Popular" };

  choose = name => {
    if (name === "Popular") {
      this.setState({ hover: name });
      this.renderTabPopular();
    }
    if (name === "Upcoming") {
      this.setState({ hover: name });
      this.renderTabUpcoming();
    }
    if (name === "Top") {
      this.setState({ hover: name });
      this.renderTabTop();
    }
  };

  renderTabPopular = () => {
    this.state.resulta = <Popular />;
    this.setState({ resulta: this.state.resulta });
  };
  renderTabUpcoming = () => {
    this.state.resulta = <Upcoming />;
    this.setState({ resulta: this.state.resulta });
  };
  renderTabTop = () => {
    this.state.resulta = <TopRated />;
    this.setState({ resulta: this.state.resulta });
  };

  render() {
    return (
      <>
        <div className="App" />
        <header>
          <img
            style={{ height: 100, marginLeft: 50 }}
            classeName="image"
            src={
              "https://upload.wikimedia.org/wikipedia/fr/thumb/3/35/Allocin%C3%A9_Logo.svg/800px-Allocin%C3%A9_Logo.svg.png"
            }
          />
        </header>
        <ul>
          <li
            name="Popular"
            onClick={this.choose.bind(this, "Popular")}
            className={this.state.hover === "Popular" ? "active" : ""}
          >
            Popular Movies
          </li>
          <li
            name="Upcoming"
            onClick={this.choose.bind(this, "Upcoming")}
            className={this.state.hover === "Upcoming" ? "active" : ""}
          >
            Upcoming Movies
          </li>
          <li
            name="Top"
            onClick={this.choose.bind(this, "Top")}
            className={this.state.hover === "Top" ? "active" : ""}
          >
            Top Rates Movies
          </li>
        </ul>
        {this.state.resulta}
      </>
    );
  }
}

export default App;
