import { Link } from "react-router-dom";
import './styles.css'

const GitSearchCard = () => {
  return (
    <div className="search-container">
      <h2>Encontre um perfil Github</h2>
      <input
        id="search-text"
        type="text"
        placeholder="Usuário GitHub"
        required
      />
      <Link to="/gitresult">
        <button className="btn btn-primary">Encontrar</button>
      </Link>
    </div>
  );
};

export default GitSearchCard;
