// import logo from "../assets/KevinRushLogo.png";
import { FaLinkedin} from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                
                
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
