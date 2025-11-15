import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "h1",
  { id: "heading", className: "headline" },
  "trial using react"
);
console.log(heading);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "headline", key:123 }, "i am heading h1 tag new way parcel"),
    React.createElement("h2", { id: "headline", key:234 }, "i am heading h2 tag"),
  ])
);
console.log(parent);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(parent);
