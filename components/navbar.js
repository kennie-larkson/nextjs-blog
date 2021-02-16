import styles from "./layout.module.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" >
      <div className="container-fluid" >
        <a className="navbar-brand" href="/" style={{ textDecoration: "none" }}>
          <strong>KCC</strong>
        </a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/projects">
              Portfolio
            </a>
          </li>
          <button className={styles.btnJoin}>
            <li className="nav-item" >
              <a className="nav-link"  href="/signupform">
                Become a member
              </a>
            </li>
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
