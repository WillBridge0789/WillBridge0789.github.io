import NavBar from "./Nav";

function Home() {
  return (
    <div>
      <NavBar />
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <header id="main-header">
              <h1 className="head-title">William J. Burbridge</h1>
              <h3 className="sub-title">Web Developer</h3>
            </header>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;