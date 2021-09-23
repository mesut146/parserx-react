var url = "https://parserx-rest.herokuapp.com/";

function prepare(input) {
  var out = "";
  var cur = "";
  for (let ch in input) {
    if (ch == " ") {
      if (cur.length > 0) {
        out += ' "' + cur + '"';
        cur = "";
      }
    } else {
      cur += ch;
    }
  }
  if (cur.length > 0) {
    out += ' "' + cur + '"';
  }
  return out;
}

function left() {
  let input = window.document.getElementById("input");
  let output = window.document.getElementById("output");
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", url);
  xmlHttp.send(null);
  let out = xmlHttp.responseText;
  output.innerHTML = out;
}
