import NavBar from "./Nav";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <NavBar />
      <div className="container text-center">
        <div className="row mt-3 d-flex justify-content-center">
          <h1>
            <strong>Projects</strong>
          </h1>
        </div>
        <div className="row d-flex justify-content-center" data-aos="fade-up">
          <div className="col-md-6 d-flex justify-content-center mt-4">
            <a href="https://ainc-comic-craze.web.app/">
              <figure>
                <img src="./img/marvel_display_img4.jpg" id="img7" />
                <figcaption>Capstone: Comic Craze</figcaption>
              </figure>
            </a>
          </div>
        </div>
        <div className="row d-flex justify-content-center" data-aos="fade-up">
          <div className="col-md-4 d-flex justify-content-center mt-4">
            <a href="http://willbridge0789.github.io/alarm_clock/">
              <figure>
                <img
                  src="./img/Alarm_clock.png"
                  className="overlay"
                  id="img1"
                />
                <figcaption>Alarm Clock</figcaption>
              </figure>
            </a>
          </div>
          <div className="col-md-4 d-flex justify-content-center mt-4">
            <a href="#">
              <figure>
                <img src="./img/mind-reader.png" id="img2" />
                <figcaption>Mind Reader</figcaption>
              </figure>
            </a>
          </div>
          <div className="col-md-4 d-flex justify-content-center mt-4">
            <a href="#">
              <figure>
                <img src="./img/tictactoe.png" id="img3" />
                <figcaption>Tic-Tac-Toe</figcaption>
              </figure>
            </a>
          </div>
        </div>
        <div className="row d-flex justify-content-center" data-aos="fade-up">
          <div className="col-md-4 d-flex justify-content-center mt-4">
            <a href="#">
              <figure>
                <img src="./img/weather.png" id="img4" />
                <figcaption>Weather App</figcaption>
              </figure>
            </a>
          </div>
          <div className="col-md-4 d-flex justify-content-center mt-4">
            <a href="https://willbridge0789.github.io/to-do-list/">
              <figure>
                <img src="./img/ToDo-List.png" id="img5" />
                <figcaption>To-Do List</figcaption>
              </figure>
            </a>
          </div>
          <div className="col-md-4 d-flex justify-content-center mt-4">
            <a href="https://willbridge0789.github.io/react-restaurant/">
              <figure>
                <img src="./img/ReactRestaurant.png" id="img6" />
                <figcaption>React Restaurant</figcaption>
              </figure>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Projects;
