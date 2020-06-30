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
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((result) => {
        console.log(result);
        this.setState({
          posts: result.data.slice(0, 10),
        });
      })
      .catch((error) => {
        this.setState({
          errorMessage: " data error",
        });
      });
  }
  render() {
    const { posts, errorMessage } = this.state;
    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <Link to={"/" + post.id}>
                <h5>{post.title}</h5>
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
