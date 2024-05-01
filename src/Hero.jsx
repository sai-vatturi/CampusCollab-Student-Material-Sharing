import React from "react";
import Navbar from "./components/Navbar";
import Group from "./assets/bg-graphics/Group.svg";
import Group1 from "./assets/bg-graphics/Group-1.svg";
import Group2 from "./assets/bg-graphics/Group-2.svg";
import Group3 from "./assets/bg-graphics/Group-3.svg";
import CustomSelect from "./components/CustomSelect";
import { Link } from "react-router-dom";

const Hero = () => {
    const selectOptions = [
        [
            { value: "1", label: "Andhra University" },
            { value: "2", label: "Adikavi Nannayya University" },
            { value: "3", label: "Acharya Nagarjuna University" },
        ],
        [
            { value: "4", label: "Semester 1" },
            { value: "5", label: "Semester 2" },
            { value: "6", label: "Semester 3" },
            { value: "7", label: "Semester 4" },
            { value: "7", label: "Semester 5" },
            { value: "9", label: "Semester 6" },
        ],
        [
            { value: "10", label: "Database Management Systems" },
            { value: "11", label: "Applied Statistics" },
            { value: "12", label: "Operating Systems" },
            { value: "13", label: "Data Structures and Algorithms" },
            { value: "14", label: "Modern Physics" },
            { value: "15", label: "Computer Organization and Architecture" },
            { value: "15", label: "Object Oriented Programming" },
        ],
    ];

    const placeholders = [
        "Select your University",
        "Select Semester",
        "Select Course",
    ];

    return (
        <div className="fixed h-screen w-full">
            <Navbar />
            <div className="w-[500px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center flex flex-col">
                <div className="text-2xl font-bold">Get Started with</div>
                <div className="text-6xl font-bold">Campus Collab</div>
                <div className="py-4 font-normal">
                    Download latest materials & handwritten notes uploaded by
                    students & faculty from various universities{" "}
                </div>
                <div className="mx-14">
                    {selectOptions.map((options, index) => (
                        <CustomSelect
                            key={index}
                            options={options}
                            placeholder={placeholders[index]}
                        />
                    ))}
                </div>
                <Link to="/materials">
                    <div className="flex justify-center my-5 font-bold">
                        <button className="text-white bg-customPurple px-4 py-1.5 rounded-md mx-2  hover:bg-[#8640ff]">
                            Search Materials
                        </button>
                        <button className="px-4 py-1 border bg-white text-customPurple rounded-md mx-4 hover:bg-gray-200">
                            Upload Materials
                        </button>
                    </div>
                </Link>
            </div>
            <div className="bg-[#1A284E] h-screen">
                <img
                    src={Group1}
                    className="fixed object-cover object-top w-full pointer-events-none"
                />
                <img
                    src={Group}
                    className="fixed bottom-0 max-h-96 w-full object-cover object-bottom pointer-events-none"
                />
            </div>
        </div>
    );
};

export default Hero;
