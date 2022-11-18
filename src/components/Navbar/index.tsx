import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/">
        <p>GitHub API</p>
      </Link>
    </div>
  );
};

export default Navbar;
