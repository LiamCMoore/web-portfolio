import React from "react";

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-5xl md:text-6xl dark:text-white mb-1 md:mb-2 font-bold">Liam Moore</h1>
            <p className="text-base md:text-xl mb-3 md:mb-2 medium">Games QA, Game Designer & Programmer</p>
            <p className="text-sm max-w-xl mb-6 font-bold">I'm Liam Moore, a games QA specialist with a background in game design and programming. I find problems, track down what causes them and explain them clearly to the people who need to fix them. Having designed and programmed games myself, I understand the systems I'm testing and can work closely with designers and programmers. </p>
        </div>
    )
}

export default Intro;