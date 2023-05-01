import { useEffect } from "react";
import NavBar from "./Nav";
import Image from "./Image1";
import Footer from "./Footer";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <NavBar />
      <div
        data-aos="fade-left" //Here you can use any of the AOS animations
      >
        <div
          className="container-fluid g-0 overflow-hidden"
          id="about_container"
        >
          <div className="row min-vh-100 gx-5 d-flex justify-content-center">
            <Image />
            <div className="col-md-8 col-sm-12 d-flex justify-content-center">
              <p className="main-para p-2">
                <h2>Hi, my name is Will Burbridge!</h2>
                <br />
                While working in customer service and retail, I dabbled in some
                web design and even completed some courses involving code which
                complemented my artistic drive. From my basic interest to create
                using code, I knew I wanted to accelerate my skill.<hr></hr>I
                joined Awesome Inc’s bootcamp to further my depth and breadth in
                code and to create things on a technical level. I’ve used my
                artistic creativity and my drive to understand to explore full
                stack programming. When not learning to code, my main hobby is
                producing digital art where I can create characters and some
                small graphic novels.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
