import React, { Component } from 'react';

export default class User extends Component {
  render() {
    const { name } = this.props;
    return (
      <div className="ib user">
        <p>Hello, {name}!</p>
      </div>
    );
  }
}
