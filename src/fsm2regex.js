const example = "start = 0\nfinal = 1\n0 -> 1 , a\n1 -> 1 , b";

export default function FSM2Regex() {
  return (
    <>
      <div style={{ width: "30%", float: "left" }}>
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
        <button>Build regex</button>
      </div>
    </>
  );
}
