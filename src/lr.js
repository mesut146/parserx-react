import { post } from "./api";

const examples = {
  first: "",
};

export default function LR() {
  return (
    <div>
      <textarea
        id="input"
        style={{
          marginTop: "50px",
          width: "auto",
          height: "200px",
          border: "solid 1px",
          whiteSpace: "pre-line",
        }}
        defaultValue={examples.first}
      ></textarea>
    </div>
  );
}
