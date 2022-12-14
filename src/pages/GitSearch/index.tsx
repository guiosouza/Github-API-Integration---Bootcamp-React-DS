import axios from "axios";
import Navbar from "components/Navbar";
import ResultContentLink from "components/ResultContenLink";
import ResultContent from "components/ResultContent";
import { useState } from "react";
import "./styles.css";

// Objeto que representa os dados do formulário
type FormData = {
  login: string;
};

type GitHub = {
  login: string,
  avatar_url: string,
  html_url: string,
  followers: number,
  location: string,
  name: string,
}

const GitSearch = () => {
  /*
    1 - formData: variável que ponta para o estado dos dados que está armazenando
    2 - setFormData: função que altera o estado do "formData"
    3 - useState<FormData>: fala que estamos usando o tipo de obj FormData
    4 - FormData.login = inicia string vazia
  */

  const [gitHub, setGitHub] = useState<GitHub>();

  const [formData, setFormData] = useState<FormData>({
    login: "",
  });

  // Sempre que mudar o conteúdo do input dispara a função
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name; // Pegou o nome do input que no caso é login
    const value = event.target.value; // Pegou o value do event que que no caso é o que foi digitado

    /* 
      1- Cria um objeto pegando tudo que já tinha no formData
      2 - acessa o "name" desse objeto que vai corresponder ao atributo "login"
      3 - coloca dentro desse atributo o "value" 
    */
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios.get(`https://api.github.com/users/${formData.login}`)
    .then((response) => {
      setGitHub(response.data)
    })
    .catch((error) => {
      setGitHub(undefined)
    })
  };

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
              name="login"
              value={formData.login}
              placeholder="Usuário GitHub"
              onChange={handleChange}
            />
            <button className="btn btn-primary">Encontrar</button>
          </div>
        </form>
        
        { gitHub &&
          <div className="result-content-card">
            <div className="image-container">
              <img src={gitHub.avatar_url} alt="Imagem do perfil" />
            </div>
            <div className="result-info-container">
              <p id="info">Informações</p>
                <ResultContentLink title="Perfil" description={gitHub?.html_url} />
                <ResultContent title="Seguidores" description={String(gitHub?.followers)} />
                <ResultContent title="Localidade" description={gitHub?.location} />
                <ResultContent title="Nome" description={gitHub?.name} />
            </div>
          </div>
        } 
      </div>
    </>
  );
};

export default GitSearch;
