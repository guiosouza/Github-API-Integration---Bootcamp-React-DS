import Navbar from "components/Navbar";
import { Link } from "react-router-dom";
import "./styles.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <h1>Desafio GitHub API</h1>
        <p>DevSuperior - Escola de programação</p>
        <Link to="/gitsearch">
          <button className="btn btn-primary">Começar</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
