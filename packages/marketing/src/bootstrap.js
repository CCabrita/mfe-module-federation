import React from "react";
import ReactDOM from "react-dom";
import App from './App';

//Mount
const mount = (el) => {
  ReactDOM.render(<App/>, el);
};

//If dev call mount
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing_dev_root");
  if (devRoot) {
    mount(devRoot);
  }
}

//if we not dev, we export
export { mount };
