import React from "react";
import ReactDOM from "react-dom/client";

//  <div id="parent">
//      <div id="child">
//          <h1></h1>
// </div>
// </div>

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    {
      id: "child",
    },
    [
      React.createElement("h1", { key: "h1" }, "This is h1 tag!"),
      React.createElement("h2", { key: "h2" }, "This is h2 tag!"),
    ]
  )
);

// react is creating core h1 tag
// react element(object) => HTMl(browser understands)
const heading = React.createElement(
  "h1",
  { id: "heading", className: "heading" },
  "Hello World from react!"
);
// created a root for react application
const root = ReactDOM.createRoot(document.getElementById("root"));
// this will replace the code in the root
// library - it can make small portion of the app
root.render(parent);
