import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-subtle" id="top-nav">
      <div className="container-fluid">
        <a className="navbar-brand" href="/home">
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
        <div
          className="collapse navbar-collapse d-flex justify-content-center"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            {/* <Link to="/home" class="nav-link nav-home">Home</Link> */}
            <Link to="/about" class="nav-link rainbow">
              About
            </Link>
            <Link to="/blog" class="nav-link rainbow">
              Blog
            </Link>
            <Link to="/projects" class="nav-link rainbow">
              Projects
            </Link>
            <Link to="/contact" class="nav-link rainbow">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
