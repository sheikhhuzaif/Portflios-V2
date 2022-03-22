import React from "react";
import resume from "./Mihir Dadwal - Resume.pdf";

export default function Resume() {
    return (
        <section id="resume" className="text-gray-400 bg-gray-900 body-font   pt-20 pb-28">
            <div className="columns-2  px-10 py-20 mx-auto text-center lg:px-40">
                <div className="flex flex-col mb-20 mr-5 w-full ">
                    <h1 className="text-5xl font-bold title-font mb-4 text-white text-center">
                        My Resume
                    </h1>
                </div>

                <div className="ml-5 flex flex-wrap justify-center">
                    <iframe src={resume} frameborder="0" height="600" width="1200"></iframe>
                </div>
            </div>
        </section>
    );
}