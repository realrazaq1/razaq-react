import PortfolioCard from "./PortfolioCard";
import "./Portfolio.css";

const Portfolio = () => {
  const porfolios = [
    {
      id: "36264727-8268-11eb-a4d8-a90aff5c32df",
      image: "https://ik.imagekit.io/razaq/mysite/realnaps_IKiVanYe7Gwv.JPG",
      title: "Realnaps",
      description:
        "I re-created realnaps.com website from scratch with a better look and feel. The website is beautiful and responsive on all devices",
      previewLink: "https://realrazaq1.github.io/realnaps/",
      gitHubCode: "https://github.com/realrazaq1/realnaps",
      previewText: "Preview",
      iconClass: "fas fa-eye",
    },
    {
      id: "36264721-8268-11eb-a4d8-a90aff5c32df",
      image: "https://ik.imagekit.io/razaq/mysite/msoft_wF-vdYdqVvO5.JPG",
      title: "Microsoft Homepage",
      description:
        "I re-created Microsoft website homepage from scratch. The website is nice and responsive on all devices",
      previewLink: "https://realrazaq1.github.io/microsoft/",
      gitHubCode: "https://github.com/realrazaq1/microsoft",
      previewText: "Preview",
      iconClass: "fas fa-eye",
    },
    {
      id: "36264720-8268-11eb-a4d8-a90aff5c32df",
      image: "https://ik.imagekit.io/razaq/mysite/netflix_-z9owczehW.JPG",
      title: "Netflix Landing Page",
      description:
        "I re-created Netflix landing page from scratch. The website is nice and responsive on all devices",
      previewLink: "https://realrazaq1.github.io/netflix/",
      gitHubCode: "https://github.com/realrazaq1/netflix",
      previewText: "Preview",
      iconClass: "fas fa-eye",
    },
    {
      id: "36264722-8268-11eb-a4d8-a90aff5c32df",
      image: "https://ik.imagekit.io/razaq/mysite/mclub_8tlRPS3t01.JPG",
      title: "MarioClub",
      description:
        "I created a website for a fictional club called MarioClub. The website is beautiful and responsive on mobile devices",
      previewLink: "https://realrazaq1.github.io/marioclub/",
      gitHubCode: "https://github.com/realrazaq1/marioclub",
      previewText: "Preview",
      iconClass: "fas fa-eye",
    },
    {
      id: "36264723-8268-11eb-a4d8-a90aff5c32df",
      image: "https://ik.imagekit.io/razaq/mysite/chekkify_uM6Rz1ZulbNg.JPG",
      title: "Chekkify",
      description:
        "Chekkify is a mobile application that you can use to check the network that a Nigerian phone number belongs to. The app is built with Flutter",
      previewLink: "/apk/chekkifyapp.apk",
      gitHubCode: "https://github.com/realrazaq1/chekkifymobile",
      previewText: "Download App",
      iconClass: "fas fa-download",
    },
    {
      id: "36264724-8268-11eb-a4d8-a90aff5c32df",
      image: "https://ik.imagekit.io/razaq/mysite/gap-calc_kQQVu6c-YH.JPG",
      title: "GPA Calculator",
      description:
        "A web application that allow students of Federal University Lokoja to easily calculate their GPA (grade point average) for a particular semeter",
      previewLink: "https://gpa.razaq.xyz/",
      gitHubCode: "https://github.com/realrazaq1/gpa-calculator-v1",
      previewText: "Preview",
      iconClass: "fas fa-eye",
    },
    {
      id: "36264725-8268-11eb-a4d8-a90aff5c32df",
      image: "https://ik.imagekit.io/razaq/mysite/todoapp_uqoaJ84Bu.JPG",
      title: "Todo App",
      description:
        "Keep track of your daily activities with this easy to use todo web application.",
      previewLink: "https://realrazaq1.github.io/todoapp/",
      gitHubCode: "https://github.com/realrazaq1/todoapp",
      previewText: "Preview",
      iconClass: "fas fa-eye",
    },
    {
      id: "36264726-8268-11eb-a4d8-a90aff5c32df",
      image: "https://ik.imagekit.io/razaq/mysite/wtapp_MzuF3IdQxt2K.JPG",
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
      <h1>Portfolio</h1>
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
