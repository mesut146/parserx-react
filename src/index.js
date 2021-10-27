import ReactDOM from "react-dom";
import { awaken } from "./api";
import App from "./App";

awaken();

//React.StrictMode
ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById("root")
);
