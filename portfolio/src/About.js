import NavBar from "./Nav";
import Image from "./Image1";

function About() {
    return(
        <div>
            <NavBar />
            <div className="container">
                <div className="row min-vh-100 d-flex align-items-center">
                    <Image />
                    <div className="col-6">
                        <p className="main-para p-3">Hello! My name Will! During my free time I enjoy 75 degree weather (whenever we get it), creating digital art pieces, and coding. I have been coding for several months now. This has been and still is an amazing journey to continue to learn and build new things.
                        I have worked with Front-End(HTML5, CSS3, JavaScript, React) and Back-End(Python, SQL) languages and have found fun in problem solving.</p>
                    </div>
                </div>
            </div>
        </div>        
    )
}


export default About;