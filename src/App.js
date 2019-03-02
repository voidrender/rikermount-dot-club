import React, { Component } from "react";
import StarfieldAnimation from "react-starfield-animation";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <StarfieldAnimation
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%"
                    }}
                    numParticles={1000}
                    lineWidth={4}
                    alphaFactor={1.0}
                    depth={300}
                />
                <header className="App-header">
                    <img
                        src={require("./assets/mount-1.gif")}
                        className="App-logo"
                        alt="logo"
                    />
                </header>
            </div>
        );
    }
}

export default App;
