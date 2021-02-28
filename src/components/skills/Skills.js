import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills-content">
        <div className="skills-text">
          <h1>My Skills</h1>
          <p>
            Below are the set of technologies i use in building websites and
            applications. I'm very good and proficient at using them.
          </p>
          <ul className="tools">
            <li>
              <i class="fas fa-chevron-right"></i>HTML
            </li>
            <li>
              <i class="fas fa-chevron-right"></i>CSS
            </li>
            <li>
              <i class="fas fa-chevron-right"></i>JavaScript
            </li>
            <li>
              <i class="fas fa-chevron-right"></i>React
            </li>
            <li>
              <i class="fas fa-chevron-right"></i>NodeJS
            </li>
            <li>
              <i class="fas fa-chevron-right"></i>Flutter
            </li>
          </ul>
        </div>
        <div className="skills-image">
          <img
            src="https://res.cloudinary.com/razaq/image/upload/v1614539027/mysite/razsvg1_tqumla.svg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
