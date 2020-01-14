//imports
import React from "react";
// react-dom only needs to be imported once
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";
// Today's objectives:
// - use JavaScript modules to export and import components
// - describe props and how data flows in a React application
// - demonstrate the ability to compose React components to build out a UI
// - pass props as dynamic data to a React component
// React component

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
