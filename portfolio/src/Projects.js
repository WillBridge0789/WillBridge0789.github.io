import NavBar from "./Nav";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import GlobeIcon from "./img/Web/globe.png";

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
          <h1 id="project-head">Projects</h1>
        </div>

        <div className="row d-flex justify-content-center" data-aos="fade-up">
          <div className="col-md-6 d-flex justify-content-center mt-4 m-3 card-port">
            <div
              className="position-relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src="./img/marvel_display_img4.jpg"
                alt="Comic Craze Cover"
                className="proj-img"
              />
              {hovered && (
                <div className="overlay d-flex flex-column justify-content-center align-items-center">
                  <h4 className="overlay-header pb-1">Comic Craze Capstone</h4>
                  <ul className="overlay-icons list-unstyled d-flex flex-row">
                    <li className="web-links">
                      <a
                        href="https://ainc-comic-craze.web.app/"
                        target="_blank"
                        rel="noreferrer"
                        title="Comic Craze"
                      >
                        <img
                          src="./img/Web/globe.png"
                          alt="Web Application"
                          className="web-icons"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="col-md-6 d-flex justify-content-center mt-4 m-3 card-port">
            <div
              className="position-relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src="./img/Fireball_app.png"
                alt="Fireball Home page"
                className="proj-img"
              />
              {hovered && (
                <div className="overlay d-flex flex-column justify-content-center align-items-center">
                  <h4 className="overlay-header pb-1">Fireball App</h4>
                  <ul className="overlay-icons list-unstyled d-flex flex-row">
                    <li className="web-links">
                      <a
                        href="https://meteorstrikes.surge.sh/"
                        target="_blank"
                        rel="noreferrer"
                        title="Fireball App"
                      >
                        <img
                          src="./img/Web/globe.png"
                          alt="Web Application"
                          className="web-icons"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-center" data-aos="fade-up">
          <div className="col-md-6 d-flex justify-content-center mt-4 m-3 card-port">
            <div
              className="position-relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src="./img/Alarm_clock.png"
                alt="Alarm Clock"
                className="proj-img"
              />
              {hovered && (
                <div className="overlay d-flex flex-column justify-content-center align-items-center">
                  <h4 className="overlay-header pb-1">Alarm Clock</h4>
                  <ul className="overlay-icons list-unstyled d-flex flex-row">
                    <li className="web-links">
                      <a
                        href="https://willbridge0789.github.io/alarm_clock/"
                        target="_blank"
                        rel="noreferrer"
                        title="Alarm Clock"
                      >
                        <img
                          src="./img/Web/globe.png"
                          alt="Web Application"
                          className="web-icons"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="col-md-6 d-flex justify-content-center mt-4 m-3 card-port">
            <div
              className="position-relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src="./img/mind-reader.png"
                alt="Mind Reader"
                className="proj-img"
              />
              {hovered && (
                <div className="overlay d-flex flex-column justify-content-center align-items-center">
                  <h4 className="overlay-header pb-1">Mind Reader</h4>
                  <ul className="overlay-icons list-unstyled d-flex flex-row">
                    <li className="web-links">
                      <a
                        href="https://github.com/WillBridge0789/WillBridge0789.github.io-mind-reader/blob/main/js/main.js"
                        target="_blank"
                        rel="noreferrer"
                        title="Mind Reader"
                      >
                        <img
                          src="./img/Web/globe.png"
                          alt="Web Application"
                          className="web-icons"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-center" data-aos="fade-up">
          <div className="col-md-6 d-flex justify-content-center mt-4 m-3 card-port">
            <div
              className="position-relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src="./img/tictactoe.png"
                alt="Tic Tac Toe"
                className="proj-img"
              />
              {hovered && (
                <div className="overlay d-flex flex-column justify-content-center align-items-center">
                  <h4 className="overlay-header pb-1">Tic Tac Toe</h4>
                  <ul className="overlay-icons list-unstyled d-flex flex-row">
                    <li className="web-links">
                      <a
                        href="https://github.com/WillBridge0789/tic-tac-toe"
                        target="_blank"
                        rel="noreferrer"
                        title="Tic Tac Toe"
                      >
                        <img
                          src="./img/Web/globe.png"
                          alt="Web Application"
                          className="web-icons"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center mt-4 m-3 card-port">
            <div
              className="position-relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src="./img/weather.png"
                alt="Weather App"
                className="proj-img"
              />
              {hovered && (
                <div className="overlay d-flex flex-column justify-content-center align-items-center">
                  <h4 className="overlay-header pb-1">Weather App</h4>
                  <ul className="overlay-icons list-unstyled d-flex flex-row">
                    <li className="web-links">
                      <a
                        href="https://github.com/WillBridge0789/weather-app"
                        target="_blank"
                        rel="noreferrer"
                        title="Weather App"
                      >
                        <img
                          src="./img/Web/globe.png"
                          alt="Web Application"
                          className="web-icons"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-center" data-aos="fade-up">
          <div className="col-md-6 d-flex justify-content-center mt-4 m-3 card-port">
            <div
              className="position-relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src="./img/ToDo-List.png" alt="To-Do" className="proj-img" />
              {hovered && (
                <div className="overlay d-flex flex-column justify-content-center align-items-center">
                  <h4 className="overlay-header pb-1">To-Do List</h4>
                  <ul className="overlay-icons list-unstyled d-flex flex-row">
                    <li className="web-links">
                      <a
                        href="https://willbridge0789.github.io/to-do-list/"
                        target="_blank"
                        rel="noreferrer"
                        title="To Do List"
                      >
                        <img
                          src="./img/Web/globe.png"
                          alt="Web Application"
                          className="web-icons"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center mt-4 m-3 card-port">
            <div
              className="position-relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src="./img/ReactRestaurant.png"
                alt="React Restaurant"
                className="proj-img"
              />
              {hovered && (
                <div className="overlay d-flex flex-column justify-content-center align-items-center">
                  <h4 className="overlay-header pb-1">React Restaurant</h4>
                  <ul className="overlay-icons list-unstyled d-flex flex-row">
                    <li className="web-links">
                      <a
                        href="https://willbridge0789.github.io/react-restaurant/"
                        target="_blank"
                        rel="noreferrer"
                        title="React Restaurant"
                      >
                        <img
                          src="./img/Web/globe.png"
                          alt="Web Application"
                          className="web-icons"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default Projects;
