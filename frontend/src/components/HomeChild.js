import React from 'react';

class HomeChild extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}
      <button onClick={() => {this.props.callback("HomeChild")}}>click me</button>
    </h1>;
  }
}

export default HomeChild;