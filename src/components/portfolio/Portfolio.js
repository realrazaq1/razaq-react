import PortfolioCard from "./PortfolioCard";
import "./Portfolio.css";

const Portfolio = () => {
  const porfolios = [
    {
      image: "/img/msoft.PNG",
      title: "Microsoft Homepage",
      description:
        "I re-created Microsoft website homepage from scratch using HTML and CSS and a little bit of JavaScript",
      previewLink: "https://realrazaq1.github.io/microsoft/",
      gitHubCode: "https://github.com/realrazaq1/microsoft",
    },
    {
      image: "/img/mclub1.PNG",
      title: "MarioClub",
      description:
        "I created a website for a fictional club called MarioClub. The website is beautiful and responsive on mobile devices",
      previewLink: "https://realrazaq1.github.io/marioclub/",
      gitHubCode: "https://github.com/realrazaq1/marioclub",
    },
    {
      image: "/img/chekkify1.PNG",
      title: "Chekkify",
      description:
        "Chekkify is a mobile application that you can use to check the network that a Nigerian phone number belongs to",
      previewLink: "/apk/chekkifyapp.apk",
      gitHubCode: "https://github.com/realrazaq1/chekkifymobile",
    },
    {
      image: "/img/gpa-calc.png",
      title: "GPA Calculator",
      description:
        "A web application that allow students of Federal University Lokoja to easily calculate their GPA (grade point average) for a particular semeter",
      previewLink: "https://gpa.razaq.xyz/",
      gitHubCode: "https://github.com/realrazaq1/gpa-calculator-v1",
    },
    {
      image: "/img/todoapp.png",
      title: "Todo App",
      description:
        "Keep track of your daily activities with this easy to use todo web application.",
      previewLink: "https://realrazaq1.github.io/todoapp/",
      gitHubCode: "https://github.com/realrazaq1/todoapp",
    },
    {
      image: "/img/wtapp.png",
      title: "WorldTime App",
      description:
        "This web app allow you know the current time and date in different parts of the world",
      previewLink: "http://wtapp.razaq.xyz/",
      gitHubCode: "https://github.com/realrazaq1/wtapp",
    },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <h1>My Portfolio</h1>
      <div className="portfolio-content">
        {porfolios.map((portfolio) => (
          <PortfolioCard
            image={portfolio.image}
            title={portfolio.title}
            description={portfolio.description}
            previewLink={portfolio.previewLink}
            gitHubCode={portfolio.gitHubCode}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
