import React from "react";
import axios from "axios";
import CardList from "./components/CardList.js";
import Navbar from "./components/Navbar.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        this.setState({ data: res.data });
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  }

  render() {
    return (
      <section className="container">
        <Navbar />
        <header>
          <h1>Women's World Cup</h1>
          <h2>
            Ranked by search interest from{" "}
            <a href="https://trends.google.com/trends/" target="blank">
              Google Trends
            </a>
          </h2>
        </header>
        <CardList data={this.state.data} />
      </section>
    );
  }
}

export default App;
