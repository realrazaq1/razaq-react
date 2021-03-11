import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <div className="about-image">
          <img
            src="https://ik.imagekit.io/razaq/mysite/raz-500px_AsNdFpdkbENf.JPG"
            alt=""
          />
        </div>
        <div className="about-text">
          <h1>About</h1>

          {/* <h2>I'm Razaq - Front-end Engineer</h2> */}
          <p>
            A technically savvy web developer, who has website development
            expertise behind him. Razaq can be a strong driving force for
            improving the performance, scalability and reliability of
            development projects. He has a long track record of creating
            dynamic, rich, user-friendly and responsive websites and providing
            long term solutions to front-end problems
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
