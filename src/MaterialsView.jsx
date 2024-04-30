import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { cardData } from "./data"; // Import the card data
import Footer from "./components/Footer";

const MaterialsView = () => {
    return (
        <div className="bg-[#fafafa]">
            <div className="fixed w-full bg-white z-50">
                <Navbar />
                <div className="h-[1px] bg-[#651FFF]"></div>
            </div>
            <h1 className="font-bold text-5xl pt-24 mx-12 lg:w-[1140px] lg:mx-auto">
                Download Materials
            </h1>
            <div className="pt-6 lg:w-[1050px] mx-12 lg:mx-auto">
                <div className="font-bold text-3xl">Handwritten Notes</div>
                <p className="text-[#5C5F6E] pt-2">
                    Find various handwritten notes from different universities
                    below and enhance your learning journey!
                </p>
                <div className="lg:grid flex flex-col items-center lg:grid-cols-3 pt-4">
                    {cardData.map((card, index) => (
                        <Card
                            key={index}
                            image={card.image}
                            title={card.title}
                            author={card.author}
                            pages={card.pages}
                            likes={card.likes}
                            comments={card.comments}
                            downloads={card.downloads}
                            views={card.views}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MaterialsView;
