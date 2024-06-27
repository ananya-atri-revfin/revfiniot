import Navbar from "../Navbar/Navbar.js";
import home from './Assets/image.svg'
import * as homestyle from './home-style.js'

const Home = () => {
    return (
        <div>
            <Navbar />
            <div>
            <homestyle.Image src= {home} alt = "nothing to show"/>
            </div>
        </div>
    );
}

export default Home;