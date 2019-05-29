import React from "react";
import SVGRadio from "./SVGRadio";

const RadioContext = React.createContext();

function Radio({ children, onChange, defaultValue, title }) {
  const [select, setSelect] = React.useState("");

  React.useEffect(() => {
    setSelect(defaultValue);
  }, [defaultValue]);

  return (
    <RadioContext.Provider value={{ select, setSelect, onChange }}>
      <div
        role="radiogroup"
        style={{
          border: "1px solid transparent"
        }}
      >
        {title ? <h3>{title}</h3> : null}
        <div style={{ display: "flex", flexDirection: "row" }}>{children}</div>
      </div>
    </RadioContext.Provider>
  );
}

function useRadioContext() {
  const context = React.useContext(RadioContext);
  if (!context) {
    throw new Error(
      `Toggle compound components cannot be rendered outside the Toggle component`
    );
  }
  const { select, setSelect, onChange: notifyParent } = context;
  function onChange({ target }) {
    setSelect(target.value);
    notifyParent(target.value);
  }

  return {
    value: select,
    onChange,
    notifyParent
  };
}

function Button({ children, value: inputValue }) {
  const { value, onChange } = useRadioContext();
  const checked = value === inputValue;
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0.5rem"
        }}
      >
        <SVGRadio
          active={checked}
          activeColor={"red"}
          inactiveColor={"green"}
        />
        <input
          type="radio"
          value={inputValue}
          checked={checked}
          onChange={onChange}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            margin: "auto",
            opacity: "0"
          }}
        />
      </div>
      {children}
    </div>
  );
}

// for convenience, but totally not required...
Radio.Button = Button;

export default Radio;
