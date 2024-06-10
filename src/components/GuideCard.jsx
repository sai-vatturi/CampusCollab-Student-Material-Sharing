// GuideCard.js
import React from "react";

const GuideCard = ({ guideNumber, title, description, steps, image }) => {
    return (
        <div className="w-[80%] mx-auto mt-24">
            <div>
                <div className="w-[70px] h-[70px] bg-[#651FFF] rounded-[50%] flex items-center justify-center text-4xl font-black text-white mr-4">
                    {guideNumber}.
                </div>
            </div>
            <div className="flex h-[400px]">
                <div className="flex flex-col pt-3 mr-8 md:w-[50%]">
                    <h2 className="text-4xl font-bold mb-4">{title}</h2>
                    <p className="text-[#5C5F6E] mb-4">{description}</p>
                    <ol className="list-decimal list-inside space-y-2 text-[#5C5F6E]">
                        {steps.map((step, index) => (
                            <li key={index}>{step}</li>
                        ))}
                    </ol>
                </div>
                <div className="hidden md:block  md:w-[50%]">
                    <img
                        src={image}
                        alt=""
                        className="h-auto max-h-[400px] mx-auto my-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default GuideCard;
