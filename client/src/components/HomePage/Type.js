import React, { useState } from "react";
import Typist from "react-typist";
import "../styles/type.css";

function Type() {
  const [cursor, setCursor] = useState({
    show: false,
    blink: true,
    element: "|",
    hideWhenDone: false,
    hideWhenDoneDelay: 1000
  });

  return (
    <div style={{ marginTop: "3%", marginBottom: "3%" }}>
      <Typist cursor={cursor}>
        <span style={{ marginLeft: "39%" }} className="nun">
          {" "}
          We <span style={{ color: "teal" }}>Educate.</span>
        </span>
        <Typist.Backspace count={8} delay={500} />
        <span className="typer"> Emphasise.</span>
        <Typist.Backspace count={11} delay={500} />
        <span className="typer"> Excel.</span>
      </Typist>
    </div>
  );
}

export default Type;
