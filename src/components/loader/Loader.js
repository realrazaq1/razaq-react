import "./Loader.css";
import { useEffect } from "react";

const Loader = () => {
  useEffect(() => {
    const loader = document.querySelector(".loader");
    window.onload = () => {
      setTimeout(() => {
        loader.style.top = "-1000px";
      }, 5000);
    };
  });

  return (
    <div className="loader">
      <div className="loader-image"></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
