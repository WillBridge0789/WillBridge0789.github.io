import NavBar from "./Nav";

function Projects() {
    return (    
        <div>
            <NavBar />
            <div className="container text-center">
                <div className="row d-flex justify-content-center">
                    <div className="col-4 d-flex justify-content-center mt-4">
                        <div className="card">
                            <img src="./img/clock.png" id="img1" class="card-img-top m-3" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Alarm Clock</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <p className="card-text"><a href="https://5500-willbridge07-alarmclock-pib9inyrhdq.ws-us93.gitpod.io/">Click Here</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 mt-4">
                        <div className="card">
                            <img src="./img/brain.png" id="img2" className="card-img-top m-3" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Mind Reader</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <p className="card-text"><a href="https://5500-willbridge0-willbridge0-adryota4hf3.ws-us93.gitpod.io/">Click Here</a></p>
                                </div>
                        </div>
                    </div>
                    <div className="col-4 mt-4">
                        <div className="card">
                            <img src="./img/weather2.png" id="img3" className="card-img-top m-3" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Weather App</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <p className="card-text"><a href="#">Click Here</a></p>
                                </div>
                        </div>
                    </div>
                </div>    
                <div className="row d-flex align-items-center">
                    <div className="col-4 mt-4">
                        <div className="card">
                            <img src="./img/tictactoe.png" id="img4" class="card-img-top m-3" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Tic-Tac-Toe</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <p className="card-text"><a href="#">Click Here</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 mt-4">
                        <div className="card">
                            <img src="./img/list2.png" id="img5" className="card-img-top m-3" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">To-Do-List</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <p className="card-text"><a href="https://3000-willbridge0789-todolist-ypu7hvsxtci.ws-us93.gitpod.io/">Click Here</a></p>
                                </div>
                        </div>
                    </div>
                    <div className="col-4 mt-4">
                        <div className="card">
                            <img src="./img/food.png" id="img6" className="card-img-top m-3" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">React Restaurant</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <p className="card-text"><a href="https://3000-willbridge0-reactrestau-94ln5we7feq.ws-us93.gitpod.io/">Click Here</a></p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects;