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
          className="container-fluid g-0 overflow-hidden "
          id="about_container"
        >
          <div className="row min-vh-100 gx-5 d-flex flex-wrap justify-content-center">
            <Image />
            <div className="col-lg-8 col-md-12 d-flex flex-wrap justify-content-center">
              <div className="d-flex flex-wrap px-5">
                <div className="main-para p-2">
                  <p className="mb-0 pb-0" id="about-head">
                    A little bit about me
                  </p>
                  <br />
                  <p className="mt-0 pt-0">
                    While working in customer service and retail, I dabbled in
                    some web design and even completed some courses involving
                    code which complemented my artistic drive. From my basic
                    interest to create using code, I knew I wanted to accelerate
                    my skill.
                    <hr></hr>I joined Awesome Inc's bootcamp to further my depth
                    and breadth in code and to create things on a technical
                    level. I've used my artistic creativity and my drive to
                    understand to explore software development. When not
                    learning to code, my main hobby is producing digital art
                    where I can create characters and some small graphic novels.
                  </p>
                </div>
              </div>

              <div className="col-12 d-flex justify-content-center">
                <h2 className="pt-3" id="skill-head" data-aos="fade-left">
                  Skills
                </h2>
              </div>
              <div
                className="d-flex flex-wrap justify-content-center px-2"
                data-aos="fade-left"
              >
                <hr></hr>
                <img
                  src="./img/Web/python.png"
                  alt="Python"
                  className="skill-icon"
                />
                <img
                  src="./img/Web/django.png"
                  alt="Django"
                  className="skill-icon"
                />
                <img src="./img/Web/sql.png" alt="SQL" className="skill-icon" />
                <img
                  src="./img/Web/javascript.png"
                  alt="JavaScript"
                  className="skill-icon"
                />
                <img
                  src="./img/Web/bootstrap.png"
                  alt="Bootstrap"
                  className="skill-icon"
                />
                <img
                  src="./img/Web/css.png"
                  alt="CSS3"
                  className="skill-icon"
                />
                <img
                  src="./img/Web/html.png"
                  alt="HTML5"
                  className="skill-icon"
                />
              </div>
              <div
                className="col-12 d-flex flex-wrap justify-content-center px-2 mb-3"
                data-aos="fade-right"
              >
                <img
                  src="./img/Web/react.png"
                  alt="ReactJS"
                  className="skill-icon"
                />
                <img src="./img/Web/git.png" alt="Git" className="skill-icon" />
                <img
                  src="./img/Web/github.png"
                  alt="GitHub"
                  className="skill-icon"
                />
                <img
                  src="./img/Web/microsoftoffice.png"
                  alt="Microsoft Office Suite"
                  className="skill-icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
