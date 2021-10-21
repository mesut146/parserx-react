//import "./styles.css";
import { Link } from "react-router-dom";

function Header(p) {
  console.log("header=" + p.id);
  return (
    <>
      <nav className="navbar navbar-default " role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <div className="horizontal-menu">
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
                  <Link to="/lr" className={p.id === "3" ? "active" : "null"}>
                    LR
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dfa2regex"
                    className={p.id === "4" ? "active" : "null"}
                  >
                    DFA to Regex
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
