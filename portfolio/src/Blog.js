import Footer from "./Footer";
import NavBar from "./Nav";
import Week1 from "./blogs/Week1";
import Week2 from "./blogs/Week2";
import Week3 from "./blogs/Week3";

function Blog() {
  return (
    <div>
      <NavBar />

      <div className="container">
        <div className="row" id="blog_row">
          <div className="col-6">
            <Week1 />
          </div>
          <div className="col-6">
            <Week2 />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <Week3 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
