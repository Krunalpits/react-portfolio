// import logo from "../assets/KevinRushLogo.png";
import { FaLinkedin} from "react-icons/fa";
import kp from  "../assets/kp.png"
const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                
                <img src={kp} alt="kp" className="my-2 mx-10 w-14"  />
            </div>
            <div className="flex items-center gap-4 text-2xl ml-auto mr-6">
                <a href="https://www.linkedin.com/in/krunal-pithadia-284926250/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
