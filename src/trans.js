import { post } from "./api";

let examples = [
  { left: 'E: E "+" E | NUM;' },
  { factor: "A: a b c | a b d;" },
  { epsilon: "A: a? b | a* c;" },
];

async function handle(path) {
  let input = document.getElementById("input").value;
  let output = document.getElementById("output");
  post(path, input, (res) => {
    output.value = res;
    resizeOut();
  });
}

function onExampleChange(e) {
  let input = document.getElementById("input");
  let output = document.getElementById("output");
  input.value = Object.values(examples[e.target.selectedIndex]);
  output.value = "";
}

function resizeOut() {
  let out = document.getElementById("output");
  out.style.height = "";
  out.style.height = out.scrollHeight + "px";
}

function Trans() {
  return (
    <div className="container">
      <div>
        <div>
          <label htmlFor="example-select">Examples:</label>
          <select
            id="example-select"
            style={{ margin: "10px" }}
            onChange={onExampleChange}
          >
            {examples.map((obj) => {
              return (
                <option key={Object.keys(obj)[0]}>{Object.keys(obj)[0]}</option>
              );
            })}
          </select>
        </div>
        <textarea
          id="input"
          style={{
            marginTop: "50px",
            width: "auto",
            height: "200px",
            border: "solid 1px",
            whiteSpace: "pre-line",
          }}
          defaultValue={Object.values(examples[0])[0]}
        ></textarea>
      </div>
      <div className="buttons">
        <button onClick={() => handle("left")}>Left Recursion</button>
        <button onClick={() => handle("factor")}>Left Factoring</button>
        <button onClick={() => handle("epsilon")}>Epsilon Removal</button>
        <button onClick={() => handle("ebnf")}>EBNF to BNF</button>
      </div>

      <textarea
        id="output"
        style={{
          marginTop: "50px",
          width: "fit-content",
          height: "200px",
          border: "solid 1px",
        }}
        onChange={resizeOut}
        defaultValue={'%start: E;\nE: NUM ("+" E)*;'}
      />
    </div>
  );
}

export default Trans;
