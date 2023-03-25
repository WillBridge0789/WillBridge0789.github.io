import NavBar from "./Nav";

function Projects() {
    return (    
        <div>
            <NavBar />
            <div className="container text-center">
                <div className="row d-flex justify-content-center">
                    <div className="col-6 d-flex justify-content-center mt-4">
                        <div className="card">
                            <img src="..." class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Alarm Clock</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 mt-4">
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Mind Reader</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="row d-flex align-items-center">
                    <div className="col-6 mt-4">
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Weather App</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                        </div>
                    </div>
                    <div className="col-6 mt-4">
                        <div className="card">
                            <img src="..." class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Tic-Tac-Toe</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row d-flex align-items-center">
                    <div className="col-6 mt-4">
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">To-Do-List</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                        </div>
                    </div>
                    <div className="col-6 mt-4">
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">React Restaurant</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects;