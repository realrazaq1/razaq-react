import "./Navbar.css";

const Navbar = () => {
  const handleMenu = () => {
    const mainNav = document.querySelector(".main-nav");
    const menuBtn = document.querySelector(".menu-btn");
    mainNav.classList.toggle("show");
    menuBtn.classList.toggle("fa-times");

    document.body.addEventListener("click", (e) => {
      if (e.target !== menuBtn) {
        if (mainNav.classList.contains("show")) {
          mainNav.classList.remove("show");
          menuBtn.classList.remove("fa-times");
        }
      }
    });
  };

  return (
    <nav>
      <a href="">
        <div className="logo-wrapper">
          <div className="logo"></div>
          <h1>Razaq</h1>
        </div>
      </a>
      <ul className="main-nav">
        <a href="" className="mobile-logo">
          <div className="logo-wrapper">
            <div className="logo"></div>
            <h1>Razaq</h1>
          </div>
        </a>

        <li>
          <a href="">
            <i class="fas fa-home"></i> Home
          </a>
        </li>
        <li>
          <a href="#about">
            <i class="fas fa-user"></i> <span> About</span>
          </a>
        </li>
        <li>
          <a href="#skills">
            <i class="fas fa-code"></i>Skills
          </a>
        </li>
        <li>
          <a href="#portfolio">
            <i class="fas fa-toolbox"></i> Portfolio
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fas fa-pen"></i> Blog
          </a>
        </li>
        <li>
          <a href="#contact">
            <i class="fas fa-envelope-open-text"></i> Contact
          </a>
        </li>
      </ul>
      <i className="fas fa-bars menu-btn" onClick={handleMenu}></i>
    </nav>
  );
};

export default Navbar;
