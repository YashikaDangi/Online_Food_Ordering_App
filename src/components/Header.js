import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login");

    return (
        <div className="flex justify-between bg-gray-300 shadow-lg">
            <div className="logo-conatiner">
            <img className="w-22" 
            src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                    <Link to="/">Home</Link></li>
                    <li className="px-4">
                    <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                    <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                    <Link to="/cart">Cart</Link>
                    </li>
                    <button 
                    className="login"
                    onClick={() =>{
                        btnNameReact === "Login"
                        ? setBtnNameReact("Logout")
                        : setBtnNameReact("Login");
                    }}>
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;