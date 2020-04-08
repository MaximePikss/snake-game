import React, { Component } from "react";
import SnakeDot from "./components/SnakeDot";
import Food from "./components/Food";

class App extends Component {
  state = {
    food: [6, 8],
    snakeDots: [
      [0, 0],
      [2, 0],
    ],
  };

  render() {
    return (
      <div className="game-area">
        <SnakeDot snakeDot={this.state.snakeDots} />
        <Food foodDot={this.state.food} />
      </div>
    );
  }
}

export default App;
