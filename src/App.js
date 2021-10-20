import "./App.css";
import "./styles.css";
import Header from "./header";
import Trans from "./trans";
import DFA from "./dfa";

function Page(p) {
  if (p.id === "1") {
    return <Trans />;
  }
  if (p.id === "2") {
    return <DFA />;
  }
  return <h1>No page selected</h1>;
}

function All(p) {
  return (
    <>
      <Header id={p.id} />
      <div className="container">
        <Page id={p.id} />
      </div>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <All id="1" />
    </div>
  );
}

export default App;
