import NavBar from "./Nav";
import Footer from "./Footer";

function Projects() {
  return (
    <div>
      <NavBar />
      <div className="container text-center">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 d-flex justify-content-center mt-4">
            <div class="card" style={{ width: "18rem" }}>
              <a href="https://willbridge0789.github.io/alarm-clock">
                <img
                  src="./img/Alarm_clock.png"
                  id="img1"
                  className="card-img"
                  alt="..."
                />
                <div class="card-body">
                  <h5 className="card-title">Alarm Clock</h5>
                </div>
              </a>
            </div>
          </div>
          <div className="col-6 mt-4 d-flex justify-content-center">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="./img/brain.png"
                id="img2"
                className="card-img"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Mind Reader</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex align-items-center">
          <div className="col-6 mt-4 d-flex justify-content-center">
            <div className="card fade-in-b">
              <img
                src="./img/weather2.png"
                id="img3"
                className="card-img-top m-5"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Weather App</h5>
              </div>
            </div>
          </div>
          <div className="col-6 mt-4 d-flex justify-content-center">
            <div className="card fade-in-b">
              <img
                src="./img/tictactoe.png"
                id="img4"
                class="card-img-top m-5"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Tic-Tac-Toe</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex align-items-center">
          <div className="col-6 mt-4 d-flex justify-content-center">
            <div className="card fade-in-b">
              <a href="https://willbridge0789.github.io/to-do-list/">
                <img
                  src="./img/list2.png"
                  id="img5"
                  className="card-img-top m-5"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">To-Do-List</h5>
                </div>
              </a>
            </div>
          </div>
          <div className="col-6 mt-4 d-flex justify-content-center">
            <div className="card fade-in-b">
              <a href="https://willbridge0789.github.io/react-restaurant/">
                <img
                  src="./img/food.png"
                  id="img6"
                  className="card-img-top m-5"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">React Restaurant</h5>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
