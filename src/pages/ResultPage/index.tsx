import GitSearchCard from "components/GitSearchCard";
import Navbar from "components/Navbar";
import './styles.css'

const ResultPage = () => {
  return (
    <>
      <Navbar />
      <div className="content-container">
        <GitSearchCard/>
      </div>
      <div className="result-container">
        <h1>Resultado</h1>
      </div>
    </>
  );
};

export default ResultPage;
