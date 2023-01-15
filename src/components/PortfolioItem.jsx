import React from "react";

function PortfolioItem({title, imgUrl, stack, link}) {
    let fileType = imgUrl.split(".").pop();
    return (
    <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden"
    >
        <div className="border-2 border-stone-900 rounded-md overflow-hidden">
            {fileType === "mp4" ? (
                <video autoPlay muted playsInline controls={false} loop={true}
                alt="portfolio piece image" 
                className="W-full h-36 md:h-48 object-cover cursor-pointer"                
                >
                    <source src={imgUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) 
            : 
            (
                <img 
                    src={imgUrl} 
                    alt="portfolio piece image" 
                    className="w-full h-36 md:h-48 object-cover cursor-pointer"
                />
            )}
            <div className="w-full p-4">
                <h3 className="text-lg md:text-xl mv-2 md:mb-3 font-semibold dark:text-white">{title}</h3>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white">{stack.map((item, index) => (
                    <span key={index} className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md">
                        {item}
                    </span>
                ))}
                </p>
            </div>
        </div>
    </a>
    )
}


export default PortfolioItem;