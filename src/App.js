import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Loader from "./components/loader/Loader";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Showcase from "./components/showcase/Showcase";
import Skills from "./components/skills/Skills";

function App() {
  // const loader = document.querySelector(".loader");
  // window.onload = () => {
  //   setTimeout(() => {
  //     loader.style.left = "-2000px";
  //   }, 5000);
  // };
  const handleHideLoader = () => {
    const loader = document.querySelector(".loader");

    setTimeout(() => {
      loader.style.left = "-2000px";
    }, 3000);
  };

  return (
    <div className="App" onLoad={handleHideLoader}>
      <Loader />
      <Navbar />
      <Showcase />
      <About />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
