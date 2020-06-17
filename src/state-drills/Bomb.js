import React, { Component } from 'react';

export default class Bomb extends Component {
  state = {
    count: 0,
  };
    render() {
      return (
        <div class="bomb">
          <p>Tick, {this.state.count}!</p>
        </div>
        <div class="bomb">
          <p>Tock, {this.state.count}!</p>
        </div> 
        <div class="bomb">
          <p>Boom, {this.state.count}!</p>
        </div>
      )
    }
}