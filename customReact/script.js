function render(reactElement, root) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const i in reactElement.props) {
    domElement.setAttribute(i, reactElement.props[i]);
  }
  root.appendChild(domElement);
}
let reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click me to go google",
};

const root = document.querySelector("#root");
render(reactElement, root);
