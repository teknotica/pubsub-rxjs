import React, { Component } from "react";
import { Subscriber } from "./components/PubSub";

import { CONSENT_SUBMITTED } from "./constants";

import Form from "./components/Form";

import "./helper.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        <Subscriber topic={CONSENT_SUBMITTED}>
          {data => {
            const submitted = data && data.submitted;
            return (
              <div>
                <button disabled={!submitted}>Continue</button>
              </div>
            );
          }}
        </Subscriber>
      </div>
    );
  }
}

export default App;
