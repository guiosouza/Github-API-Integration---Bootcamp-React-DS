import Navbar from "components/Navbar";
import "./styles.css";
import { Link } from "react-router-dom";

const GitSearch = () => {
  return (
    <>
      <Navbar />
      <div className="content-contaier">
        <div className="search-container">
          <h2>Encontre um perfil Github</h2>
          <input id="search-text" type="text" placeholder="Usuário GitHub"/>
          <Link to="/gitresult">
            <button className="btn btn-primary">Encontrar</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default GitSearch;
