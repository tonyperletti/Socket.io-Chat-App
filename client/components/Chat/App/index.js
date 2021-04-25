import React from "react";
import Chat from "../Chat";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <p>Here</p>
        <Chat />
      </div>
    );
  }
}

export default App;
