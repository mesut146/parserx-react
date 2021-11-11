import { post } from "./api";

const example = "start = 0\nfinal = 1\n0 -> 1 , a\n1 -> 1 , b";
const exampleOut = '"a" "b"*';

async function handle() {
  let input = document.getElementById("input").value;
  let output = document.getElementById("output");
  post("regex", input, (res) => {
    output.value = res;
    //resizeOut();
  });
}

export default function FSM2Regex() {
  return (
    <>
      <div style={{ width: "30%", float: "left" }}>
        <div>
          <textarea
            id="input"
            style={{
              width: "300px",
              height: "400px",
              border: "solid 1px",
              marginTop: "10px",
              marginBottom: "10px",
              display: "block",
            }}
            defaultValue={example}
          />
          <button onClick={handle}>Build regex</button>
        </div>
      </div>
      <div>
        <textarea
          id="output"
          style={{
            marginTop: "50px",
            width: "fit-content",
            height: "200px",
            border: "solid 1px",
          }}
          defaultValue={exampleOut}
        />
      </div>
    </>
  );
}
