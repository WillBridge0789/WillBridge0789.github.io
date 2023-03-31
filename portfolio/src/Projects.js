import NavBar from "./Nav";
import Footer from "./Footer";

function Projects() {
    return (    
        <div>
            <NavBar />
            <div className="container text-center">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-4 col-12 d-flex justify-content-center mt-4">
                        <div className="card">
                            <img src="./img/clock.png" id="img1" className="card-img-top m-5" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Alarm Clock</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12 mt-4 d-flex justify-content-center">
                        <div className="card">
                            <img src="./img/brain.png" id="img2" className="card-img-top m-5" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Mind Reader</h5>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12 mt-4 d-flex justify-content-center">
                        <div className="card">
                            <img src="./img/weather2.png" id="img3" className="card-img-top m-5" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Weather App</h5>
                                </div>
                        </div>
                    </div>
                </div>    
                <div className="row d-flex align-items-center">
                    <div className="col-lg-4 col-12 mt-4 d-flex justify-content-center">
                        <div className="card">
                            <img src="./img/tictactoe.png" id="img4" class="card-img-top m-5" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Tic-Tac-Toe</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12 mt-4 d-flex justify-content-center">
                        <div className="card">
                            <img src="./img/list2.png" id="img5" className="card-img-top m-5" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">To-Do-List</h5>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12 mt-4 d-flex justify-content-center">
                        <div className="card">
                            <img src="./img/food.png" id="img6" className="card-img-top m-5" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">React Restaurant</h5>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Projects;