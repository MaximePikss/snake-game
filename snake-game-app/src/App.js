import React, { Component } from "react";
import SnakeDot from "./components/SnakeDot";
import Food from "./components/Food";

const getRandomCoordinates = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  return [x, y];
};

class App extends Component {
  state = {
    food: getRandomCoordinates(),
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
