import "./Loader.css";
import Bounce1 from "../spinners/Bounce1";

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader-image"></div>
      <h2>Razaq</h2>
      <Bounce1 />
    </div>
  );
};

export default Loader;
