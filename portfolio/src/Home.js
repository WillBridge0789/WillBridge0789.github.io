import NavBar from "./Nav";
import Footer from "./Footer";
import SelfImg from "./SelfImg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="container" data-aos="fade-right">
        <div className="row">
          <div className="col-md-12 col-lg-6">
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
