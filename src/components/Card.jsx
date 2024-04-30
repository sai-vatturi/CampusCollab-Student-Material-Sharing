import React from "react";
import { GoHeart, GoComment, GoDownload, GoEye, GoShare } from "react-icons/go";

const Card = ({
    image,
    title,
    author,
    pages,
    likes,
    comments,
    downloads,
    views,
}) => {
    return (
        <div className="pb-10">
            <div className="w-[300px] h-[450px] bg-white rounded-xl shadow-sm shadow-[#838696] flex flex-col">
                <div className="my-5 mx-3">
                    <img src={image} alt="" className="rounded-sm" />
                    <div className="mx-2">
                        <h2 className="font-bold mt-3">{title}</h2>
                        <div className="flex justify-between text-[10px] text-[#737373] pt-2">
                            <p>{author}</p>
                            <p>{pages}</p>
                        </div>
                        <div className="flex justify-between text-[10px] text-[#737373] mt-4">
                            <button className="bg-gray-300 hover:bg-gray-400 hover:text-white text-[#737373] w-28 h-8 rounded-md ml-1">
                                View
                            </button>
                            <button className="bg-[#542aff] hover:bg-[#532ea3] text-[#E2E4E9] w-28 h-8 rounded-md mr-1">
                                Download
                            </button>
                        </div>
                        <div className="flex justify-between mt-3 text-[#737373] text-[10px] pt-3 bottom-0">
                            <div className="flex items-center">
                                <GoHeart className="mr-1" size={14} />
                                <span>{likes}</span>
                            </div>
                            <div className="w-[0.5px] h-[16px] bg-[#838696]"></div>
                            <div className="flex items-center">
                                <GoComment className="mr-1" size={14} />
                                <span>{comments}</span>
                            </div>
                            <div className="w-[0.5px] h-[16px] bg-[#838696]"></div>
                            <div className="flex items-center">
                                <GoDownload className="mr-1" size={14} />
                                <span>{downloads}</span>
                            </div>
                            <div className="w-[0.5px] h-[16px] bg-[#838696]"></div>
                            <div className="flex items-center">
                                <GoEye className="mr-1" size={14} />
                                <span>{views}</span>
                            </div>
                            <div className="w-[0.5px] h-[16px] bg-[#838696]"></div>
                            <div>
                                <GoShare size={14} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
