import React, {Component} from 'react';
import SnakeDot from './components/SnakeDot';


class App extends Component {
  state = {
    snakeDots: [
      [0, 0],
      [2, 0],
    ]
  }

  render() {
    return (
      <div className="game-area">
       <SnakeDot snakeDots={this.state.snakeDots}/> 
      </div>
    );
  }
  
}

export default App;
