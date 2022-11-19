import './styles.css';

const ResultContent = () => {
    return (
        <div className="result-content-card">
            <div className="image-container">
                <img src="https://avatars.githubusercontent.com/u/13897257?v=4" alt="" />
            </div>
            <div className="result-info-container">
                <p id="info">Informações</p>
                <div className="input-result-content">
                    <p>Perfil: </p>
                </div>
                <div className="input-result-content">
                    <p>Seguidores: </p>
                </div>
                <div className="input-result-content">
                    <p>Localidade: </p>
                </div>
                <div className="input-result-content">
                    <p>Nome: </p> 
                </div>
            </div>
        </div>
    );
};

export default ResultContent;