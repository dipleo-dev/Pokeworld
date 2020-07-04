import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

class Pokemons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMessage: " ",
      currentPage: "https://pokeapi.co/api/v2/pokemon",
      nextPage: "",
      prevPage: "",
    };
  }

  componentDidMount(prevState) {
    axios
      .get(this.state.currentPage)
      .then((result) => {
        console.log(result);
        this.setState({
          posts: result.data.results,

          nextPage: result.data.next,
          prevPage: result.data.previous,
        });
      })
      .catch((error) => {
        this.setState({
          errorMessage: " data error",
        });
      });
  }
  componentDidUpdate() {
    console.log(this.state);
  }
  goToNextPage = () => {
    axios.get(this.state.nextPage).then((result) => {
      console.log(result);
      this.setState({
        posts: result.data.results,

        nextPage: result.data.next,
        prevPage: result.data.previous,
      });
    });
  };
  goToPrevPage = () => {
    axios.get(this.state.prevPage).then((result) => {
      console.log(result);
      this.setState({
        posts: result.data.results,

        nextPage: result.data.next,
        prevPage: result.data.previous,
      });
    });
  };
  render() {
    const { posts, errorMessage } = this.state;

    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <div className="post card" key={post.name}>
            <div className="card-content">
              <Link to={"/" + post.name}>
                <h5>{post.name}</h5>
              </Link>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No Posts Yet</div>
    );
    return (
      <div className="center">
        <h1>List of Pokémons</h1>
        <Pagination
          goToNextPage={this.goToNextPage}
          goToPrevPage={this.goToPrevPage}
        />
        {postList}
        {errorMessage}
      </div>
    );
  }
}
export default Pokemons;
