import React from "react";

export default function Key(props) {
  const keyPaths = {
    C:
      "M0,0 L25.9914219,0 L25.9914219,203.473828 L47.1798926,203.473828 L47.1798926,289.050633 C47.1798926,294.57348 42.7027401,299.050633 37.1798926,299.050633 L10,299.050633 C4.4771525,299.050633 2.45271059e-15,294.57348 1.77635684e-15,289.050633 L0,0 Z",
    D:
      "M60.1472584,0 L88.7472315,0 L88.7472315,203.473828 L97.5051113,203.473828 L97.5051113,289.050633 C97.5051113,294.57348 93.0279588,299.050633 87.5051113,299.050633 L60.3252187,299.050633 C54.8023712,299.050633 50.3252187,294.57348 50.3252187,289.050633 L50.3252187,203.473828 L60.1472584,203.473828 L60.1472584,0 Z",
    E:
      "M122.077914,0 L147.83033,0 L147.83033,203.473828 L147.83033,289.050633 C147.83033,294.57348 143.353178,299.050633 137.83033,299.050633 L110.650437,299.050633 C105.12759,299.050633 100.650437,294.57348 100.650437,289.050633 L100.650437,203.473828 L122.077914,203.473828 L122.077914,0 Z",
    F:
      "M175.431161,0 L150.975656,0 L150.975656,203.473828 L150.975656,289.050633 C150.975656,294.57348 155.452809,299.050633 160.975656,299.050633 L188.155549,299.050633 C193.678396,299.050633 198.155549,294.57348 198.155549,289.050633 L198.155549,203.473828 L175.431161,203.473828 L175.431161,0 Z",
    G:
      "M207.968321,0 L232.00346,0 L232.00346,203.473828 L247.851702,203.473828 L247.851702,289.050633 C247.851702,294.57348 243.37455,299.050633 237.851702,299.050633 L210.67181,299.050633 C205.148962,299.050633 200.67181,294.57348 200.67181,289.050633 L200.67181,203.473828 L207.968321,203.473828 L207.968321,0 Z",
    A:
      "M265.495305,0 L288.330151,0 L288.330151,203.473828 L298.176921,203.473828 L298.176921,289.050633 C298.176921,294.57348 293.699769,299.050633 288.176921,299.050633 L260.997028,299.050633 C255.474181,299.050633 250.997028,294.57348 250.997028,289.050633 L250.997028,203.473828 L265.495305,203.473828 L265.495305,0 Z",
    B:
      "M322.749723,0 L348.50214,0 L348.50214,203.473828 L348.50214,289.050633 C348.50214,294.57348 344.024987,299.050633 338.50214,299.050633 L311.322247,299.050633 C305.7994,299.050633 301.322247,294.57348 301.322247,289.050633 L301.322247,203.473828 L322.749723,203.473828 L322.749723,0 Z",
    "C#":
      "M28.8079355,0.5 L28.8079355,197.158228 C28.8079355,199.643509 30.8226542,201.658228 33.3079355,201.658228 L52.2449363,201.658228 C54.7302177,201.658228 56.7449363,199.643509 56.7449363,197.158228 L56.7449363,0.5 L28.8079355,0.5 Z",
    "D#":
      "M91.214459,0 L120.15146,0 L120.15146,197.158228 C120.15146,199.919652 117.912883,202.158228 115.15146,202.158228 L96.214459,202.158228 C93.4530352,202.158228 91.214459,199.919652 91.214459,197.158228 L91.214459,0 Z",
    "F#":
      "M177.396396,0 L206.333397,0 L206.333397,197.158228 C206.333397,199.919652 204.094821,202.158228 201.333397,202.158228 L182.396396,202.158228 C179.634972,202.158228 177.396396,199.919652 177.396396,197.158228 L177.396396,0 Z",
    "G#":
      "M234.012267,0 L262.949268,0 L262.949268,197.158228 C262.949268,199.919652 260.710692,202.158228 257.949268,202.158228 L239.012267,202.158228 C236.250843,202.158228 234.012267,199.919652 234.012267,197.158228 L234.012267,0 Z",
    "A#":
      "M291.257203,0 L320.194204,0 L320.194204,197.158228 C320.194204,199.919652 317.955628,202.158228 315.194204,202.158228 L296.257203,202.158228 C293.49578,202.158228 291.257203,199.919652 291.257203,197.158228 L291.257203,0 Z"
  };

  return (
    <path
      d={keyPaths[props.keypath]}
      id={props.note}
      className={`${props.classes}`}
      stroke="#000000"
      fill="#FFFFFF"
      onMouseDown={() => props.userPlayKey(props.noteName)}
    />
  );
}
