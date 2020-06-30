import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Pokemons extends Component {
  state = {
    posts: [],
    errorMessage: " ",
  };
  componentDidMount() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((result) => {
        console.log(result);
        this.setState({
          posts: result.data.results,
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

              <p>{post.body}</p>
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
        {postList}
        {errorMessage}
      </div>
    );
  }
}
export default Pokemons;
