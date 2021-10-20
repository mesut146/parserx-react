var url = "https://parserx-rest.herokuapp.com/";

function toBr(str) {
  return str.split("\n").map(function (line) {
    return (
      <span>
        {line}
        <br />
      </span>
    );
  });
}

function left() {
  let input = document.getElementById("input");
  let output = document.getElementById("output");
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", url);
  xmlHttp.send(null);
  let out = xmlHttp.responseText;
  console.log(out);
  //output.innerHTML = out;
}

function Trans() {
  return (
    <>
      <textarea
        id="input"
        style={{
          marginTop: "50px",
          width: "auto",
          height: "200px",
          border: "solid 1px",
          whiteSpace: "pre-line",
        }}
        defaultValue={['%start: E;\nE: E "+" E | NUM;']}
      />

      <div className="buttons">
        <button onClick={left}>Left Recursion</button>
        <button>Left Factoring</button>
        <button>Precedence</button>
        <button>Epsilon Removal</button>
      </div>

      <textarea
        id="output"
        style={{
          marginTop: "50px",
          width: "fit-content",
          height: "200px",
          border: "solid 1px",
        }}
        defaultValue={'%start: E;\nE: NUM ("+" E)*;'}
      />
    </>
  );
}

export default Trans;
