import React from "react";
import Navbar from "./components/Navbar";
import UserGuideImage from "./assets/bg-graphics/UserGuideImage.svg";

const UserGuide = () => {
    return (
        <div>
            <Navbar />
            <div className="bg-[#FAFAFA] w-full h-screen">
                <br />
                <br />
                <div className="w-[85%] bg-[#ECECFE] h-[450px] rounded-3xl mx-auto mt-5 flex">
                    <div className="my-auto ml-20">
                        <h2 className="text-5xl font-bold text-[#0B0D0E]">
                            Learn how to use
                        </h2>
                        <h1 className="text-5xl font-bold text-[#0B0D0E] py-3">
                            Campus Collab
                        </h1>
                        <h2 className="text-5xl font-bold text-[#0B0D0E]">
                            Step by Step
                        </h2>
                        <p className="text-[#5C5F6E] font-sofia-pro mt-8 w-[80%]">
                            Learn how to create, store, and share files on
                            decentralized storage technologies with the
                            frictionless experience you expect in a modern
                            workflow.
                        </p>
                    </div>
                    <br />
                    <br />
                    <img
                        src={UserGuideImage}
                        alt=""
                        className="my-auto max-h-64"
                    />
                </div>
            </div>
        </div>
    );
};

export default UserGuide;
