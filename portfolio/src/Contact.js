import NavBar from "./Nav";

function Contact() {
    return(
        <div>
            <NavBar />
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1 id="contact-header">Contact Me</h1>
                            <p className="mb-5" id="contact_p">For any questions, job inquiries, etc., feel free to contact me!</p>
                            <ul className="list-unstyled pl-md-5 mb-5">
                                <li className="d-flex mb-2">
                                    859.519.8213
                                </li>
                                <li className="d-flex mb-2">
                                    bj.burbridge@yahoo.com
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Contact;