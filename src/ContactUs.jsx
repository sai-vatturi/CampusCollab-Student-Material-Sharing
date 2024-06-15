import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import MailIcon from "./assets/stock/mail_icon.png";

const ContactUs = () => {
    return (
        <>
            <Navbar />
            <div className="bg-[#651FFF] w-full h-[600px] lg:h-[400px] relative ">
                <div className="">
                    <div className="pl-5">
                        <h1 className="text-4xl lg:text-5xl font-bold text-white pt-10">
                            Get in touch.
                        </h1>

                        <p className="text-white">
                            Our team would love to hear from you!
                        </p>
                    </div>
                </div>

                {/* Flexbox parent div */}
                <div className="flex justify-center items-center">
                    <div className="px-10 py-10 mt-10 rounded-3xl bg-white w-[90%]">
                        <p className="font-bold text-[#5C5F6E] text-[14px]">
                            YOUR NAME
                        </p>
                        <input
                            type="text"
                            className="my-2 pl-4 py-2 w-full bg-[#F4F5F6] rounded-lg"
                            placeholder="Enter your name"
                        />
                        <p className="font-bold text-[#5C5F6E] text-[14px] ">
                            EMAIL ADDRESS
                        </p>
                        <input
                            type="text"
                            className="my-2 pl-4 py-2 w-full bg-[#F4F5F6] rounded-lg"
                            placeholder="Enter your mail id"
                        />
                        <p className="font-bold text-[#5C5F6E] text-[14px]">
                            COMPANY (OPTIONAL)
                        </p>
                        <input
                            type="text"
                            name=""
                            id=""
                            className="my-2 pl-4 py-2 w-full bg-[#F4F5F6] rounded-lg"
                            placeholder="TCM Solutions LTD"
                        />
                        <p className="font-bold text-[#5C5F6E] text-[14px]">
                            PHONE NUMBER (OPTIONAL)
                        </p>
                        <input
                            type="number"
                            className="my-2 pl-4 py-2 w-full bg-[#F4F5F6] rounded-lg"
                            placeholder="+91 91919 19191"
                        />
                        <p className="font-bold text-[#5C5F6E] text-[14px]">
                            SUBJECT
                        </p>
                        <input
                            type="text"
                            className="my-2 pl-4 py-2 w-full bg-[#F4F5F6] rounded-lg"
                            placeholder="I want to ask something"
                        />
                        <p className="font-bold text-[#5C5F6E] text-[14px]">
                            MESSAGE
                        </p>
                        <textarea
                            name=""
                            id=""
                            className="my-2 pl-4 py-2 w-full bg-[#F4F5F6] rounded-lg"
                            placeholder="Hi there, I would like to..."
                        ></textarea>
                        <button className="text-white bg-customPurple hover:bg-[#9c40ff] px-4 py-1.5 rounded-md mx-2">
                            Send
                        </button>
                    </div>
                </div>
                <div className="bg-[#fbfbfb]">
                    <p className="pl-6 text-lg">
                        Fill the right side form or drop a mail to us!
                    </p>
                    <div className="email flex p-4">
                        <img src={MailIcon} alt="" className="w-14" />
                        <div className="ml-4">
                            <h2 className="font-bold text-[#0B0D0E] ">Email</h2>
                            <p className="text-[#5C5F6E]">
                                campuscollab@gmail.com
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#F4F5F6] m-6 rounded-3xl p-6">
                        <div>
                            <h2 className="text-2xl font-bold py-2">
                                Any Interesting Ideas to improve the platform?
                            </h2>
                            <p className="text-[#838696] py-2">
                                If you have any idea that can genuinely improve
                                this platform for the greater good of every
                                user, drop your mail here so that we can discuss
                                more.
                            </p>
                            <div className="flex bg-white justify-between rounded-lg border my-4">
                                <input
                                    type="text"
                                    placeholder="Enter your email"
                                    className="pl-4 w-full outline-none"
                                />
                                <button className="text-white bg-customPurple hover:bg-[#9c40ff] px-4 py-1.5 rounded-xl ml-2">
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
