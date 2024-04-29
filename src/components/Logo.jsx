import React from "react";
import { FaUserFriends } from "react-icons/fa";

const Logo = () => {
    return (
        <div className="font-serif flex align-middle font-gilory">
            <div>
                <FaUserFriends size={38} />
            </div>
            <div className="text-3xl ml-3 mt-0.5">Campus Collab</div>
        </div>
    );
};

export default Logo;
