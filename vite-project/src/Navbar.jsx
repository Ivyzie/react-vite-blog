import "bootstrap/dist/css/bootstrap.css";
import "./navbar.css";

function Navbar() {
  return (
    <header>
      <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand me-30 mb-2 mb-lg-0" tabIndex="-1" href="#">
            <img
              src="./penguin_color.png"
              className="d-inline-block align-text-center"
            />
            <span className="penguin-brand">NOOT NOOT</span>
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#gallery-div">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#pros-div">
                  What I Can Do
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#randomdiv">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact-section">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
