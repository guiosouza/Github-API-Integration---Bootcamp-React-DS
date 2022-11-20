import "./styles.css";

type Props = {
  title: string;
  description: string;
};

const ResultContentLink = ({ title, description }: Props) => {
  return (
    <div className="input-result-content">
      <p className="description">{title}: <a id="link" href={description} target="_blank" rel="página do usuário">{description}</a></p>
    </div>
  );
};

export default ResultContentLink;