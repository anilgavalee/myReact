import React from "react";
import ReactDOM from "react-dom/client";

const title = () => (<h3>this is the title h3</h3>);
const jsxHeading = (<div><h1 id="headline">hello jsx react</h1>{title()} <Subtitle></Subtitle></div>);
function Subtitle() {
  return (
    <h4>this is a h4 subtitle</h4>
  )
}
console.log(jsxHeading);
const root = ReactDOM.createRoot(document.querySelector("#root")).render(
  jsxHeading
);
