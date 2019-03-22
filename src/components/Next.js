import React from "react";
import "../App.css";

class NextPage extends React.Component {
  state = { page: "" };

  render() {
    return <button className="next">Next page</button>;
  }
}

export default NextPage;
