
import React, { Component} from "react";
import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        <div style={{display: "flex", alignItems: "center", flexDirection: "column" }}>
          <h1>🎉 Hello, world!</h1>
          <p>This is Remix, an alternative toolchain for <a href="https://reactjs.org/">React!</a></p>
        </div>
      </div>
    );
  }
}

export default App;