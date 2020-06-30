import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Pokemons from "./components/Pokemons";
import Post from "./components/Post";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/pokemons" component={Pokemons}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/:post_id" component={Post}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
