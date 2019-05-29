import React from "react";
import ReactDOM from "react-dom";
import Radio from "./radio";

function App() {
  const [state, setState] = React.useState("option-2");
  return (
    <div>
      <h1>You have select {state}</h1>
      <Radio
        title="Choose one"
        defaultValue="option-2"
        onChange={value => setState(value)}
      >
        <Radio.Button value="option-1">Option 1</Radio.Button>
        <Radio.Button value="option-2" activeColor={"yellow"}>
          Option 2
        </Radio.Button>
      </Radio>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
