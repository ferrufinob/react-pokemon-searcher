import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  state = {
    flipped: false,
  };

  toggle = () => {
    this.setState({ flipped: !this.state.flipped });
  };

  render() {
    const { name, hp, sprites } = this.props;
    return (
      <Card onClick={this.toggle}>
        <div>
          <div className="image">
            <img
              src={this.state.flipped ? sprites.back : sprites.front}
              alt="oh no!"
            />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
