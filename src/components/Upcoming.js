import React from "react";
import axios from "axios"; // const axios = require('axios');
import "../App.css";
import NextPage from "./Next";
import PreviousPage from "./previous";

class Upcoming extends React.Component {
  state = {
    movies: [],
    page: 1
  };

  change = async word => {
    let newPage = "";
    if (word === "next") {
      newPage = this.state.page + 1;
    } else if (word === "previous") {
      newPage = this.state.page - 1;
    }
    this.setState({ page: newPage }, async () => {
      console.log(this.state.page);
      // On charge les données ici
      const response = await axios.get(
        "https://api-allocine.herokuapp.com/api/movies/upcoming?p=" +
          this.state.page
      );

      // Un nouveau render sera déclenché
      this.setState({
        movies: response.data.results
      });
    });
  };
  renderRooms = () => {
    if (this.state.movies.length > 0) {
      return (
        <div className="row">
          {this.state.movies.map((film, index) => {
            return (
              <div className="colone col-lg-5 col-md-6 col-xs-12" key={index}>
                <img
                  classeName="image"
                  src={
                    "https://image.tmdb.org/t/p/w370_and_h556_bestv2/" +
                    film.poster_path
                  }
                />
                <div>
                  <li className="titre">{film.title}</li>
                  <li className="date">{film.release_date}</li>
                  <li className="text">
                    {film.overview.length > 400
                      ? film.overview.slice(0, 400) + "..."
                      : film.overview}
                  </li>
                </div>
              </div>
            );
          })}
        </div>
      );
    } else {
      return <span>page en cours de chargement ...</span>;
    }
  };
  render() {
    return (
      <>
        {this.renderRooms()}
        <div className="container">
          <div class="row toto">
            <div className="col-4" onClick={() => this.change("previous")}>
              <PreviousPage />
            </div>
            <div className="col-4 pages"> Page {this.state.page}</div>
            <div className="col-4" onClick={() => this.change("next")}>
              <NextPage />
            </div>
          </div>
        </div>
      </>
    );
  }
  componentDidMount = async () => {
    // On charge les données ici
    const response = await axios.get(
      "https://api-allocine.herokuapp.com/api/movies/upcoming"
    );

    // Un nouveau render sera déclenché
    this.setState({
      movies: response.data.results
    });
  };
}

export default Upcoming;
