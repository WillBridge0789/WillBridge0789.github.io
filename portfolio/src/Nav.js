import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-subtle" id="top-nav">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          WB
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {/* <Link to="/home" class="nav-link nav-home">Home</Link> */}
            <Link to="/about" className="nav-link rainbow">
              About
            </Link>
            {/* <Link to="/blog" class="nav-link rainbow">
              Blog
            </Link> */}
            <Link to="/projects" className="nav-link rainbow">
              Projects
            </Link>
            <Link to="/contact" className="nav-link rainbow">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
