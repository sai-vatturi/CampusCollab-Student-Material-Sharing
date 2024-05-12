import React from "react";
import Navbar from "./components/Navbar";
import ErrorImage from "./assets/bg-graphics/ErrorImage.svg";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";

const NotFoundPage = () => {
    return (
        <>
            <div className="h-screen">
                <Navbar bgcolor="bg-[#F8F8F8]" />

                <div className="mx-auto">
                    <div className="mt-8 w-[80%] mx-auto flex flex-col items-center ">
                        <img className="w-[600px]" src={ErrorImage} alt="" />
                        <h1 className="font-bold text-3xl mt-12">
                            Oops! Page not found.
                        </h1>
                        <p className="text-[#838696] mt-2">
                            We are sorry! The page you request can not be found.
                        </p>
                        <p className="text-[#838696]">
                            Please go back to the homepage.
                        </p>
                        <Link to="/">
                            <button className="text-white font-bold bg-[#651FFF] hover:bg-[#9c40ff] px-4 py-1.5 rounded-md mx-2 mt-4">
                                Go home
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default NotFoundPage;
