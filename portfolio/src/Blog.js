import Footer from "./Footer";
import NavBar from "./Nav";
import Week1 from "./blogs/Week1";
import Week2 from "./blogs/Week2";
import Week3 from "./blogs/Week3";

function Blog() {
    return (
        <div>
            <NavBar />
            <div class="rolodex-container">
                <div class="rolodex">
                    <div class="rolodex-card">
                        <div class="rolodex-card-front">
                            <Week1 />
                        </div>
                    </div>
                    <div class="rolodex-card">
                        <div class="rolodex-card-front">
                            <Week2 />
                        </div>
                    </div>
                    <div class="rolodex-card">
                        <div class="rolodex-card-front">
                            <Week3 />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Blog;