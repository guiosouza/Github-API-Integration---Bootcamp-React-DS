import Navbar from "components/Navbar";
import ResultContent from "components/ResultContent";
import "./styles.css";

const GitSearch = () => {
  // Sempre que mudar o conteúdo do input dispara a função
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Conteúdo do input mudou para " + event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Clicou no botão');
  }

  return (
    <>
      <Navbar />
      <div className="content-container">
        <form onSubmit={handleSubmit}>
          <div className="search-container">
            <h2>Encontre um perfil Github</h2>
            <input
              id="search-text"
              type="text"
              placeholder="Usuário GitHub"
              onChange={handleChange}
            />
              <button className="btn btn-primary">Encontrar</button>
          </div>
        </form>
        <ResultContent/>
      </div>
    </>
  );
};

export default GitSearch;
