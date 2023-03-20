import NavBar from "./Nav";

function Home() {
  return (
    <div>
      <NavBar />
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <header id="main-header">
              <h1 className="head-title">Welcome to Will's Portfolio Landing Page</h1>
            </header>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;