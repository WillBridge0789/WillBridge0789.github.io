import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Image() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="col-md-6 col-sm-12 vh-100 d-flex justify-content-center">
      <img src="./img/Profile_pic2.JPEG" id="mypic" alt="Will_pic" />
    </div>
  );
}

export default Image;
