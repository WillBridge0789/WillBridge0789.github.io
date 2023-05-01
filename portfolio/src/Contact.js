import Footer from "./Footer";
import NavBar from "./Nav";

function Contact() {
  return (
    <div>
      <NavBar />
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 id="contact-header">Contact Me</h1>
              <p className="mb-5" id="contact_p">
                For any questions, job inquiries, etc., feel free to contact me!
              </p>
            </div>
          </div>
          <div className="row">
            <h4 id="email">bj.burbridge@yahoo.com</h4>
          </div>
          <div className="row">
            <div className="col">
              <a href="https://www.linkedin.com/in/willjburbridge/">
                <img src="./img/linkedin.png" alt="LinkedIn" id="linked-in" />
              </a>
              <a href="https://github.com/WillBridge0789">
                <img src="./img/github-mark.png" alt="Github" id="GitHub" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
