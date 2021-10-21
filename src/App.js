import "./styles.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./header";
import Trans from "./trans";
import DFA from "./dfa";

function Page(p) {
  console.log("page id=" + p.id);
  if (p.id === "1") {
    return (
      <>
        <Header id="1" />
        <Trans />
      </>
    );
  } else if (p.id === "2") {
    return (
      <>
        <Header id="2" />
        <DFA />
      </>
    );
  }
  return <h1>No page selected</h1>;
}

function App() {
  return (
    <>
      <Switch>
        <Route path="/dfa">
          <Page id="2" />
        </Route>
        <Route path="/">
          <Page id="1" />
        </Route>
      </Switch>
    </>
  );
}

export default App;
