import React from "react";
import HomeChild from "./HomeChild";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      childName: "start",
      childName2: "",
      childName3: ""
    };
    this.buttonGotClicked = this.buttonGotClicked.bind(this);
  }

  buttonGotClicked(childInput) {
    this.setState(
      {
        childName: childInput,
        childName2: childInput
      },
      () => {
        alert(this.state.childName);
      }
    );
  }

  render() {
    return (
      <HomeChild
        callback={this.buttonGotClicked}
        name={this.props.name}
      ></HomeChild>
    );
  }
}

export default Home;
