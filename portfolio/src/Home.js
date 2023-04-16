import NavBar from "./Nav";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <NavBar />
      <div className="container-fluid fade-in-l">
        <div className="row d-flex justify-content-start">
          <div className="col">
            <header id="main-header">
              <h2 className="head-title">William J. Burbridge</h2>
            </header>
          </div>
        <div className="row d-flex justify-content-start">
            <div className="col">
              <header id="main-header2">
                <h2 className="head-title2">Junior Web Developer</h2>
              </header>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;