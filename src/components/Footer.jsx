import React from "react";
import { RiFacebookCircleFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer bg-[#1A284E] text-[#E2E4E9] py-8">
            <div className="container mx-auto flex flex-wrap justify-between">
                <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
                    <h4 className="text-md font-semibold mb-4">
                        What is CampusCollab?
                    </h4>
                    <p className="text-sm">
                        CampusCollab is a web-based platform that allows
                        university students to effortlessly search, download,
                        and upload academic materials corresponding to their
                        specific course requirements. The website will feature a
                        comprehensive database of educational resources
                        categorized by university, semester, course, and type of
                        material.
                    </p>
                </div>

                <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
                    <h4 className="font-semibold mb-4 text-md">Quick Links</h4>
                    <ul className="text-sm">
                        <li>
                            <a
                                href="/"
                                className="text-gray-400 hover:text-white"
                            >
                                Homepage
                            </a>
                        </li>
                        <li>
                            <a
                                href="/userguide"
                                className="text-gray-400 hover:text-white"
                            >
                                User Guide
                            </a>
                        </li>
                        <li>
                            <a
                                href="/login"
                                className="text-gray-400 hover:text-white"
                            >
                                Login
                            </a>
                        </li>
                        <li>
                            <a
                                href="/signup"
                                className="text-gray-400 hover:text-white"
                            >
                                Signup
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://campus-collab-beta.vercel.app/contact.html"
                                className="text-gray-400 hover:text-white"
                            >
                                Contact us
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Social Media Icons */}
                {/* You can replace '#' with the actual links to your social media pages */}
                <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
                    <h4 className="text-md font-semibold mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                        {/* Facebook Icon */}
                        <a href="#" className="text-gray-400 hover:text-white">
                            <RiFacebookCircleFill size={28} />
                        </a>
                        {/* Twitter Icon */}
                        <a href="#" className="text-gray-400 hover:text-white">
                            <AiFillTwitterCircle size={29} />
                        </a>
                        {/* LinkedIn Icon */}
                        <a href="#" className="text-gray-400 hover:text-white">
                            <FaLinkedin size={28} />
                        </a>
                        {/* Add your icons here */}
                    </div>
                </div>

                {/* Copyright Information */}
                <div className="w-full text-center lg:text-right">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} CampusCollab. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
