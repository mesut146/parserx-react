import "./styles.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./header";
import Trans from "./trans";
import DFA from "./dfa";
import FSM2Regex from "./fsm2regex";

function Page(p) {
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
  } else if (p.id === "3") {
    return (
      <>
        <Header id="3" />
        <FSM2Regex />
      </>
    );
  }
}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dfa">
          <Page id="2" />
        </Route>
        <Route path="/regex">
          <Page id="3" />
        </Route>
        <Route path="/lr">
          <Page id="4" />
        </Route>
        <Route path="/">
          <Page id="1" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
