import react from "react";
import reactDom from "react-dom";

let examples = [
  "abc|ade",
  "a*b|c+d",
  'NUM: DIGIT ("." DIGIT*)?;\nDIGIT: [0-9]; ',
];
let url = "https://parserx-rest.herokuapp.com";

async function process(e) {
  let input = document.getElementById("input").value;
  let type = document.getElementById("type-select");
  let select = document.getElementById("dfa-select");
  let i = select.selectedIndex;

  var outText = "";
  if (i === 0) {
    //NFA
    if (type.selectedIndex === 0) {
      //regex
      let res = await fetch(url + "/nfa?in=regex&out=fsm", {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: { input },
      });
      outText = await res.text();
    } else {
      //grammar
      let res = await fetch(url + "/nfa?in=grammar&out=fsm", {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: { input },
      });
      outText = await res.text();
    }
    let out = (
      <textarea
        style={{ width: "50%", height: "400px", marginTop: "20px" }}
        defaultValue={outText}
      />
    );
    reactDom.render(out, document.getElementById("right"));
  } else if (i === 1) {
    //DFA
  } else if (i === 2) {
    //dot NFA
  } else if (i === 3) {
    //dot DFA
  }
}

function onExampleChange(e) {
  let input = document.getElementById("input");
  input.value = examples[e.target.selectedIndex];

  let type = document.getElementById("type-select");
  if (e.target.selectedIndex === 0) {
    //simple regex
    type.selectedIndex = 0;
  } else if (e.target.selectedIndex === 1) {
    //complex regex
    type.selectedIndex = 0;
  } else if (e.target.selectedIndex === 2) {
    //simple grammar
    type.selectedIndex = 1;
  }
}

function DFA() {
  //draw nfa,draw dfa,nfa,dfa
  return (
    <>
      <div id="left" style={{ width: "30%", float: "left" }}>
        <div>
          <label htmlFor="type-select">Choose input type:</label>
          <select id="type-select" style={{ margin: "10px" }}>
            <option>regex</option>
            <option>grammar</option>
          </select>
        </div>
        <div>
          <label htmlFor="example-select">Examples:</label>
          <select
            id="example-select"
            onChange={onExampleChange}
            style={{ margin: "10px" }}
          >
            <option>simple regex</option>
            <option>complex regex</option>
            <option>simple grammar</option>
          </select>
        </div>
        <textarea
          id="input"
          style={{
            width: "300px",
            height: "400px",
            border: "solid 1px",
            marginTop: "10px",
          }}
          defaultValue={examples[0]}
        />

        <div>
          <select id="dfa-select">
            <option>NFA</option>
            <option>DFA</option>
            <option>draw NFA</option>
            <option>draw DFA</option>
          </select>

          <button onClick={process}>process</button>
        </div>
      </div>
      <div id="right"></div>
    </>
  );
}

export default DFA;
