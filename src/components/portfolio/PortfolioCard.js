import "./PortfolioCard.css";

const PortfolioCard = ({
  image,
  title,
  description,
  previewLink,
  gitHubCode,
}) => {
  return (
    <div className="porfolio-card">
      <img src={image} alt="" />
      <h2>{title}</h2>
      <p>{description}</p>
      <a
        href={previewLink}
        className="portfolio-btn btn"
        download
        target="_blank"
      >
        <i class="fas fa-eye"></i>
      </a>
      <a
        href={gitHubCode}
        className="portfolio-btn btn"
        download
        target="_blank"
      >
        <i class="fas fa-code"></i>
      </a>
    </div>
  );
};

export default PortfolioCard;
