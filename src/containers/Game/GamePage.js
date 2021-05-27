import React from "react";

import { Board, Card } from "../../components";

// const GamePage = () => (
//   <Board>
//     <Card name="Test card" isActive />
//   </Board>
// );

class GamePage extends React.Component {
  state = { isActive: false };

  handleCardClick = () => {
    this.setState((prevState) => ({
      isActive: !prevState.isActive,
    }));
  };

  render() {
    return (
      <Board>
        <Card
          name="Test card"
          isActive={this.state.isActive}
          onClick={this.handleCardClick}
        />
      </Board>
    );
  }
}

export default GamePage;
