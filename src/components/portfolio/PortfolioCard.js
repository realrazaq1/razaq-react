import "./PortfolioCard.css";

const PortfolioCard = ({
  image,
  title,
  description,
  previewLink,
  gitHubCode,
  previewText,
  iconClass,
}) => {
  return (
    <div className="porfolio-card">
      <img src={image} alt="" />
      <h2>{title}</h2>
      <p>{description}</p>
      <a
        href={previewLink}
        class="portfolio-btn btn"
        download
        target="_blank"
        rel="noreferrer"
      >
        <i className={iconClass}></i> {previewText}
      </a>
      <a
        href={gitHubCode}
        className="portfolio-btn btn"
        download
        target="_blank"
        rel="noreferrer"
      >
        <i className="fas fa-code"></i> Code
      </a>
    </div>
  );
};

export default PortfolioCard;
