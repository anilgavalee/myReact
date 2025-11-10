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
    React.createElement("h1", { id: "headline" }, "i am heading h1 tag"),
    React.createElement("h2", { id: "headline" }, "i am heading h2 tag"),
  ])
);
console.log(parent);

const root = ReactDOM.createRoot(document.querySelector("#root"));
setTimeout(() => {
  root.render(parent);
}, 10000);
