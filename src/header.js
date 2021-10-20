import "./styles.css";
import All from "./App";

function Header(p) {
  return (
    <nav className="navbar navbar-default " role="navigation">
      <div className="container-fluid">
        <div className="navbar-header">
          <div className="horizontal-menu">
            <ul>
              <li>
                <a
                  onClick={() => {
                    document.getElementsByClassName("App").innerHTML = All("1");
                  }}
                  className={p.id === "1" ? "active" : null}
                >
                  TRANSFORMATIONS
                </a>
              </li>
              <li>
                <a href=""
                  onClick={() => {
                    document.getElementsByClassName("App").innerHTML = All("1");
                  }}
                  className={p.id === "2" ? "active" : null}
                >
                  DFA/NFA Builder
                </a>
              </li>
              <li>
                <a href="">LR</a>
              </li>
              <li>
                <a href="">DFA to Regex</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
