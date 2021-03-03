import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Loader from "./components/loader/Loader";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Showcase from "./components/showcase/Showcase";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="App">
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
