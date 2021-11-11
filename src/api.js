const url = "https://parserx-rest.herokuapp.com";

function awaken() {
  fetch(url).then((res) => {
    if (res.status === 200) {
      let img = document.getElementById("status");
      img.innerHTML = "&#128994;";
      img.alt = "server is running";
    }
  });
}

async function post(path, input, callback) {
  if (!path.startsWith("/")) {
    path = "/" + path;
  }
  let r = fetch(url + path, {
    method: "POST",
    headers: { "Content-Type": "text/plain" },
    body: input,
  });
  r.then(async (res) => {
    let out = await res.text();
    if (res.status !== 200) {
      return Promise.reject("err=" + out);
    }
    callback(out);
  }).catch((err) => {
    window.alert(err);
  });
}

export { url, post, awaken };
