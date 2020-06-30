import React, { Component } from "react";
import axios from "axios";

class Post extends Component {
  state = {
    post: null,
    errorMessage: "",
  };
  componentDidMount() {
    let id = this.props.match.params.post_id;
    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + id)
      .then((result) => {
        this.setState({
          post: result.data,
        });
      })
      .catch((error) => {
        this.setState({
          errorMessage: "error retreiving data",
        });
      });
  }
  componentDidUpdate() {
    console.log(this.state);
  }
  render() {
    const post = this.state.post ? (
      <div className="post">
        <h5 className="center">{this.state.post.name}</h5>
        <div className="center">
          <img
            className="post card"
            src={this.state.post.sprites.front_default}
            alt=""
          />
        </div>
      </div>
    ) : (
      <div className="center">Loading post</div>
    );
    return (
      <div className="container">
        {post}
        {this.state.errorMessage}
      </div>
    );
  }
}

export default Post;
