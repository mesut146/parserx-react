//import "./styles.css";
import { Link } from "react-router-dom";

function Header(p) {
  return (
    <nav className="navbar navbar-default " role="navigation">
      <div className="container-fluid">
        <div className="navbar-header">
          <div className="horizontal-menu" style={{ display: "flex" }}>
            <span
              id="status"
              alt="server is not running"
              width="20px"
              height="20px"
              style={{
                marginTop: "auto",
                marginBottom: "auto",
                marginLeft: "10px",
              }}
            >
              &#128308;
            </span>
            <ul>
              <li>
                <Link to="/" className={p.id === "1" ? "active" : "null"}>
                  TRANSFORMATIONS
                </Link>
              </li>
              <li>
                <Link to="/dfa" className={p.id === "2" ? "active" : "null"}>
                  DFA/NFA Builder
                </Link>
              </li>
              <li>
                <Link to="/lr" className={p.id === "4" ? "active" : "null"}>
                  LR/LALR
                </Link>
              </li>
              <li>
                <Link to="/regex" className={p.id === "3" ? "active" : "null"}>
                  FSM to Regex
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
