import React from "react";
import Navbar from "./components/Navbar";
import UserGuideImage from "./assets/bg-graphics/UserGuideImage.svg";
import Guide1 from "./assets/stock/Guide1.png";

const UserGuide = () => {
    return (
        <div className="font-sofia-pro">
            <Navbar />
            {/* Hero */}
            <div className="bg-[#FAFAFA] w-full">
                <br />
                <br />
                <div className="w-[85%] bg-[#ECECFE] py-10 rounded-3xl mx-auto mt-5 flex flex-col md:flex-row">
                    <div className="my-auto ml-20 w-[50%]">
                        <h2 className="text-5xl font-bold text-[#0B0D0E]">
                            Learn how to use Campus Collab Step by Step
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
                    <div className="w-[50%] mx-auto my-auto">
                        <img
                            src={UserGuideImage}
                            alt=""
                            className="my-auto max-h-64"
                        />
                    </div>
                </div>
            </div>
            <div className="w-[80%] mx-auto mt-24">
                {/* Guide 1 */}
                <div className="flex">
                    <div>
                        <div className="w-[70px] h-[70px] bg-[#651FFF] rounded-[50%] flex items-center justify-center text-4xl font-black text-white mr-4">
                            1.
                        </div>
                    </div>

                    <div className="flex flex-col pt-3 mr-8">
                        <h2 className="text-4xl font-bold mb-4">
                            Create an account
                        </h2>
                        <p className="text-[#5C5F6E] mb-4">
                            When you create a CampusCollab Account, we ask for
                            some personal info. By providing accurate info, you
                            can help keep your account secure and make our
                            services more useful.
                        </p>
                        <ol className="list-decimal list-inside space-y-2 text-[#5C5F6E]">
                            <li>Click Create Account button on header.</li>
                            <li>Enter your email address.</li>
                            <li>In the "Full name" field, enter your name.</li>
                            <li>Enter and confirm your password.</li>
                            <li>Click Create Account.</li>
                        </ol>
                    </div>
                    <div className="hidden md:block">
                        <img src={Guide1} alt="" width="800px" />
                    </div>
                </div>

                {/* Guide 1 */}
                <div className="flex">
                    <div>
                        <div className="w-[70px] h-[70px] bg-[#651FFF] rounded-[50%] flex items-center justify-center text-4xl font-black text-white mr-4">
                            1.
                        </div>
                    </div>

                    <div className="flex flex-col pt-3 mr-8">
                        <h2 className="text-4xl font-bold mb-4">
                            Upload files from desktop
                        </h2>
                        <p className="text-[#5C5F6E] mb-4">
                            You can upload, view, share, and edit files with
                            CampusCollab. When you upload a file to
                            CampusCollab, it should be in supported format (PDF,
                            DOCX) and should only be uploaded to the respective
                            course
                        </p>
                        <ol className="list-decimal list-inside space-y-2 text-[#5C5F6E]">
                            <li>Go to the Home Page.</li>
                            <li>
                                {" "}
                                Select a University, Semester, Course, and
                                Material Type (Study, Handwritten, Exam QP,
                                etc...)
                            </li>
                            <li>
                                At the top left, click Upload and then Upload
                                Files.
                            </li>
                            <li>Choose the file you want to upload.</li>
                        </ol>
                    </div>
                    <div className="hidden md:block max-w-40px">
                        <img src={Guide1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserGuide;
