import "./styles.css";

type Props = {
  title: string;
  description: string;
};

const ResultContent = ({ title, description }: Props) => {
  return (
    <div className="input-result-content">
      <p className="description">
        {title}: {description}
      </p>
    </div>
  );
};

export default ResultContent;
