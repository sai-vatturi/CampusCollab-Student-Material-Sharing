import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Navbar = ({ bgcolor }) => {
    return (
        <div
            className={`w-full h-16 flex items-center px-5 justify-between ${bgcolor}`}
        >
            <Logo />
            <div className="font-bold hidden md:block">
                <Link to="/login">
                    <button className="px-4 py-1 border-2 border-black rounded-md mx-4 hover:bg-gray-100">
                        Sign In
                    </button>
                </Link>
                <Link to="/signup">
                    <button className="text-white bg-customPurple hover:bg-[#9c40ff] px-4 py-1.5 rounded-md mx-2">
                        Create an Account
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
