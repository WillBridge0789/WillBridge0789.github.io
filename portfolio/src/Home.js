import NavBar from "./Nav";
import Footer from "./Footer";
import SelfImg from "./SelfImg";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  return (
    <div>
      <NavBar />
      <div className="container fade-in-l">
        <div className="row">
          <div className="col-6">
            <header id="main-header">
              <h2 className="head-title">William J. Burbridge</h2>
              <h2 className="head-title2">Junior Web Developer</h2>
            </header>
          </div>
          <SelfImg />
        </div>
      </div>
    </div>
  );
}

export default Home;
