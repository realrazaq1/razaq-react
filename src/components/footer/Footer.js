import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top" id="contact">
        <div>
          <h1>Contact Me</h1>
          <ul className="contact-info">
            <li>
              <i class="fas fa-paper-plane"></i>{" "}
              <a href="mailto: razaqonweb@gmail.com">razaqonweb@gmail.com</a>
            </li>
            <li>
              <i class="fas fa-phone-alt"></i>{" "}
              <a href="tel: +2348130069772">+2348130069772</a>
            </li>
          </ul>
        </div>
        <div>
          <h1>Lets Connect</h1>
          <ul className="contact-info social">
            <li>
              <a
                href="https://twitter.com/realrazaq1"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/realrazaq1"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/realrazaq1"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/realrazaq1"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <ul className="job-status">
        <li>
          <i class="fas fa-briefcase"></i> Opened to freelance and Remote hire.
        </li>
      </ul>
      <ul className="footer-bottom">
        <li>&copy; 2021 - Razaq.</li>
        <li>
          <i class="fas fa-map-marker-alt"></i> Remote
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
