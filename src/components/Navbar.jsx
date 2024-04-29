import React from "react";
import Logo from "./Logo";

const Navbar = () => {
    return (
        <div className="w-full h-16 flex items-center px-5 justify-between">
            <Logo />
            <div className="font-bold">
                <button className="px-4 py-1 border border-black rounded-md mx-4">
                    Sign In
                </button>
                <button className="text-white bg-customPurple px-4 py-1.5 rounded-md mx-2">
                    Create an Account
                </button>
            </div>
        </div>
    );
};

export default Navbar;
