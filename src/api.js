const url = "https://parserx-rest.herokuapp.com";

function awaken() {
  fetch(url);
}

async function post(path, input, callback) {
  if (!path.startsWith("/")) {
    path = "/" + path;
  }
  fetch(url + path, {
    method: "POST",
    headers: { "Content-Type": "text/plain" },
    body: input,
  })
    .then(async (res) => {
      let out = await res.text();
      if (res.status !== 200) {
        return Promise.reject(out);
      }
      callback(out);
    })
    .catch((err) => {
      window.alert(err);
    });
}

export { url, post, awaken };
