import GitSearchCard from "components/GitSearchCard";
import Navbar from "components/Navbar";
import ResultContent from "components/ResultContent";
import './styles.css'

const ResultPage = () => {
  return (
    <>
      <Navbar />
      <div className="content-container">
        <GitSearchCard/>
      </div>
      <div className="result-container">
        <ResultContent/>
      </div>
    </>
  );
};

export default ResultPage;
