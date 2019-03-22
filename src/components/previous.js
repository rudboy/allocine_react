import React from "react";
import "../App.css";

class PreviousPage extends React.Component {
  state = { page: "" };

  render() {
    return <button className="previous">Prev page</button>;
  }
}

export default PreviousPage;
