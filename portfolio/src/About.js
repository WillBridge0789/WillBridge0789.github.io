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
        <div className="container overflow-hidden" id="about_container">
          <div className="row min-vh-100 gx-5 d-flex align-items-center">
            <Image className="fade-in-l" />
            <div className="col-6">
              <p className="main-para p-3 fade-in-r">
                Hi, my name is Will Burbridge!
                <br />I used to work in the customer service/retail field for
                several years. While working in customer service and retail, I
                dabbled in some web design and even had some courses involving
                code which has been a constant interest to me. I joined Awesome
                Inc's bootcamp to further my interest in code and to create
                things on a technical level. My main hobby is digital art with
                creating characters, even some small graphic novels
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default About;
