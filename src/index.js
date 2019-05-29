import React from "react";
import ReactDOM from "react-dom";
import Radio from "./radio";
import "./styles.css";

function App() {
  const [state, setState] = React.useState("");
  return (
    <div>
      <h1>You have select {state}</h1>
      <Radio
        title="Choose one"
        defaultValue="option-2"
        onChange={value => setState(value)}
      >
        <Radio.Button value="option-1">Option 1</Radio.Button>
        <Radio.Button value="option-2">Option 2</Radio.Button>
      </Radio>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
