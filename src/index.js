import React from "react";
import ReactDOM from "react-dom";
import Radio from "./radio";

function App() {
  const [state, setState] = React.useState("");
  console.log("change on parent: ", state);
  return (
    <div>
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
