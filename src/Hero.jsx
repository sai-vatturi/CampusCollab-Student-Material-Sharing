import React from "react";
import Navbar from "./components/Navbar";
import Group from "./assets/bg-graphics/Group.svg";
import Group1 from "./assets/bg-graphics/Group-1.svg";
import Group2 from "./assets/bg-graphics/Group-2.svg";
import Group3 from "./assets/bg-graphics/Group-3.svg";

const Hero = () => {
    return (
        <div className="fixed h-screen w-full">
            <Navbar />
            <div className="w-[500px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center flex flex-col">
                <div className="text-2xl font-bold">Get Started with</div>
                <div className="text-6xl font-bold">Campus Collab</div>
                <div className="pt-4 font-normal">
                    Download latest materials & handwritten notes uploaded by
                    students & faculty from various universities{" "}
                </div>
            </div>
            <div className="bg-[#1A284E] h-screen">
                <img
                    src={Group1}
                    className="fixed object-cover object-top w-full"
                />
                <img
                    src={Group}
                    className="fixed bottom-0 max-h-96 w-full object-cover object-bottom"
                />
            </div>
        </div>
    );
};

export default Hero;
