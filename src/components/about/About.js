import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <div className="about-image">
          <img src="/img/raz1.jpg" alt="" />
        </div>
        <div className="about-text">
          <h1>About me</h1>

          <h2>My name is RAZAQ. I'm a Web Developer && Instructor.</h2>
          <p>
            I build beautiful, interactive, user-friendly and responsive
            websites. I also teach people how to code. I've taught over 30
            people both young and old how to build amazing websites.
          </p>
          <ul>
            <li>
              <i class="fas fa-briefcase"></i> Open to freelance and Remote
              hire.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
