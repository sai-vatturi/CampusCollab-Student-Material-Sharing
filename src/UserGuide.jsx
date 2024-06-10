import React from "react";
import Navbar from "./components/Navbar";
import UserGuideImage from "./assets/bg-graphics/UserGuideImage.svg";
import Guide1 from "./assets/stock/Guide1.png";
import GuideCard from "./components/GuideCard";
import Footer from "./components/Footer";

const UserGuide = () => {
    const guide1Data = {
        guideNumber: 1,
        title: "Create an account",
        description:
            "When you create a CampusCollab Account, we ask for some personal info. By providing accurate info, you can help keep your account secure and make our services more useful",
        steps: [
            "Click Create Account button on header",
            "Enter your email addressê",
            'In the "Full name" field, enter your name',
            " Enter and confirm your password",
            "Click Create Account.",
        ],
        image: Guide1,
    };

    const guide2Data = {
        guideNumber: 2,
        title: "Upload files from desktop",
        description:
            "You can upload, view, share, and edit files with CampusCollab. When you upload a file to CampusCollab, it should be in supported format (PDF, DOCX) and should only be uploaded to the respective course",
        steps: [
            "Go to the Home Page.",
            "Select a University, Semester, Course, and Material Type (Study, Handwritten, Exam QP, etc...)",
            "At the top left, click Upload and then Upload Files.",
            "Choose the file you want to upload.",
        ],
        image: Guide1,
    };

    const guide3Data = {
        guideNumber: 3,
        title: "View Course Materials",
        description:
            "All data stored using CampusCollab is made available for viewing via the CampusCollab Webiste. To view any material, Follow the below instructions:",
        steps: [
            "Go to the Home Page.",
            "Select a University, Semester, Course, and Material Type (Study, Handwritten, Exam QP, etc...)",
            "In the search results, select and filter your required material document.",
            "Click on view icon to view the website in an interactive document viewer.",
        ],
        image: Guide1,
    };

    const guide4Data = {
        guideNumber: 4,
        title: "Download Course Materials",
        description:
            "All data stored using CampusCollab is made available for viewing via the CampusCollab Webiste. To Download any material, Follow the below instructions:",
        steps: [
            "Go to the Home Page.",
            "Select a University, Semester, Course, and Material Type (Study, Handwritten, Exam QP, etc...)",
            "In the search results, select and filter your required material document.",
            "Click on download icon to start downloading the file.",
        ],
        image: Guide1,
    };

    const guide5Data = {
        guideNumber: 5,
        title: "Share files to friends",
        description:
            "You can also share your files to your friends using a simple link. Click on share button and it will generate a link for others to open",
        steps: [
            "Hover over the file or folder you like to share)",
            "Click the share icon at menu",
            "Click generate icon for your file.",
        ],
        image: Guide1,
    };

    return (
        <div className="font-sofia-pro">
            <Navbar />
            {/* Hero */}
            <div className="bg-gray-50 w-full py-6">
                <div className="container mx-auto px-4 lg:px-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="my-auto">
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">
                                Learn how to use Campus Collab Step by Step
                            </h2>
                            <p className="text-gray-600 mt-4 lg:mt-6">
                                Learn how to create, store, and share files on
                                decentralized storage technologies with the
                                frictionless experience you expect in a modern
                                workflow.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <img
                                src={UserGuideImage}
                                alt=""
                                className="max-h-64"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Guide 1 */}
            <GuideCard {...guide1Data} />
            <GuideCard {...guide2Data} />
            <GuideCard {...guide3Data} />
            <GuideCard {...guide4Data} />
            <GuideCard {...guide5Data} />
            <div className="mt-12">
                <Footer />
            </div>
        </div>
    );
};

export default UserGuide;
