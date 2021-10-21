function handle() {
  console.log("handle");
}

function DFA() {
  return (
    <>
      <h3>input regex</h3>
      <textarea
        id="input"
        style={{
          marginTop: "50px",
          width: "auto",
          height: "200px",
          border: "solid 1px",
        }}
        defaultValue="a*b|c+d"
      />

      <select>
        <option value="minimize">minimize</option>
      </select>
      <button onclick={{ handle }}>draw</button>
    </>
  );
}

export default DFA;
