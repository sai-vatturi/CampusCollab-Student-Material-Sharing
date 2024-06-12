import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";

const ContactUs = () => {
    return (
        <>
            <Navbar />
            <div className="bg-[#651FFF] w-full h-[400px] relative ">
                <div className="">
                    <div className="absolute mt-[5%] lg:bottom-0 lg:left-0 ml-[10%] lg:mb-[5%]">
                        <h1 className="text-4xl lg:text-5xl font-bold text-white ">
                            Get in touch.
                        </h1>

                        <p className="text-white">
                            Our team would be love to hear from you!
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-[#F4F5F6]">
                <p>Fill the right side form or drop a mail to us!</p>
                <div className="email">
                    <h2>Email</h2>
                    <p>campuscollab@gmail.com</p>
                </div>
                <div className="cardx">
                    <h2>Any Interesting Ideas to improve the platform?</h2>
                    <p>
                        If you have any idea that can genuin ely improve this
                        platform for the greater good of every user, drop your
                        mail here so that we can discuss more.
                    </p>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
