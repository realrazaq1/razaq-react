import PortfolioCard from "./PortfolioCard";
import "./Portfolio.css";

const Portfolio = () => {
  const porfolios = [
    {
      id: 1,
      image: "https://ik.imagekit.io/razaq/mysite/msoft__muN-hTyT.PNG",
      title: "Microsoft Homepage",
      description:
        "I re-created Microsoft website homepage from scratch using HTML and CSS and a little bit of JavaScript",
      previewLink: "https://realrazaq1.github.io/microsoft/",
      gitHubCode: "https://github.com/realrazaq1/microsoft",
      previewText: "Preview",
      iconClass: "fas fa-eye",
    },
    {
      id: 2,
      image: "https://ik.imagekit.io/razaq/mysite/mclub1_cXGjBtplLKKV.PNG",
      title: "MarioClub",
      description:
        "I created a website for a fictional club called MarioClub. The website is beautiful and responsive on mobile devices",
      previewLink: "https://realrazaq1.github.io/marioclub/",
      gitHubCode: "https://github.com/realrazaq1/marioclub",
      previewText: "Preview",
      iconClass: "fas fa-eye",
    },
    {
      id: 3,
      image: "https://ik.imagekit.io/razaq/mysite/chekkify1_90262SyBM.PNG",
      title: "Chekkify",
      description:
        "Chekkify is a mobile application that you can use to check the network that a Nigerian phone number belongs to",
      previewLink: "/apk/chekkifyapp.apk",
      gitHubCode: "https://github.com/realrazaq1/chekkifymobile",
      previewText: "Download App",
      iconClass: "fas fa-download",
    },
    {
      id: 4,
      image: "https://ik.imagekit.io/razaq/mysite/gpa-calc_QZwqaAZvz.png",
      title: "GPA Calculator",
      description:
        "A web application that allow students of Federal University Lokoja to easily calculate their GPA (grade point average) for a particular semeter",
      previewLink: "https://gpa.razaq.xyz/",
      gitHubCode: "https://github.com/realrazaq1/gpa-calculator-v1",
      previewText: "Preview",
      iconClass: "fas fa-eye",
    },
    {
      id: 5,
      image: "https://ik.imagekit.io/razaq/mysite/todoapp_LKM2Y546S.png",
      title: "Todo App",
      description:
        "Keep track of your daily activities with this easy to use todo web application.",
      previewLink: "https://realrazaq1.github.io/todoapp/",
      gitHubCode: "https://github.com/realrazaq1/todoapp",
      previewText: "Preview",
      iconClass: "fas fa-eye",
    },
    {
      id: 6,
      image: "https://ik.imagekit.io/razaq/mysite/wtapp_rIMX5W6Ab7lR.png",
      title: "WorldTime App",
      description:
        "This web app allow you know the current time and date in different parts of the world",
      previewLink: "http://wtapp.razaq.xyz/",
      gitHubCode: "https://github.com/realrazaq1/wtapp",
      previewText: "Preview",
      iconClass: "fas fa-eye",
    },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <h1>My Portfolio</h1>
      <div className="portfolio-content">
        {porfolios.map((portfolio) => (
          <PortfolioCard
            key={portfolio.id}
            image={portfolio.image}
            title={portfolio.title}
            description={portfolio.description}
            previewLink={portfolio.previewLink}
            gitHubCode={portfolio.gitHubCode}
            previewText={portfolio.previewText}
            iconClass={portfolio.iconClass}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
