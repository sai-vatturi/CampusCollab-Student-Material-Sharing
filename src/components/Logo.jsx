import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/">
            <div className="font-serif flex align-middle font-gilory">
                <div>
                    <FaUserFriends size={38} />
                </div>
                <div className="text-3xl ml-3 mt-0.5">Campus Collab</div>
            </div>
        </Link>
    );
};

export default Logo;
