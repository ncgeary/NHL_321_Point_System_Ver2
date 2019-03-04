import React, { Component } from 'react';
import {Container} from 'reactstrap';


class Maininfo extends Component {
  render() {
    return (

      <div className="">
        <Container>
          <h3>The Proposal</h3>
          <p>The purpose of the 3-2-1 point system is reward teams that can win a game in regulation. The idea behind the new system is to incentivise teams to not play shut down defense near the end of the game, but to intensify the game by rewarding the team with an extra point.</p>
          <p>Brief overview of what the 3-2-1 point system is:</p>
          <p>&emsp;3 points -> Regulation win</p>
          <p>&emsp;2 points -> Overtime/Shootout win</p>
          <p>&emsp;1 point -> Overtime/Shootout loss</p>

          <p>You can read more about the NHL 3-2-1 Point System from <a rel="noopener noreferrer" href="https://puckprose.com/2018/03/14/nhl-change-3-2-1-point-system/" target="_blank">PuckProse</a> and <a href="http://www.espn.com/blog/nhl/post/_/id/15321/three-point-debate-change-the-standings" rel="noopener noreferrer" target="_blank">ESPN</a></p>

        </Container>
        
      </div>

    )
  }
}

export default Maininfo;