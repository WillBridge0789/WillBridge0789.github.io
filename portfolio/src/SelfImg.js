import { useEffect } from "react";
import AOS from "aos";

function SelfImg() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="col-md-12 col-lg-6"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
      data-aos-offset="0"
    >
      <img src="./img/SelfSketch.PNG" alt="digital_art1" />
    </div>
  );
}

export default SelfImg;
