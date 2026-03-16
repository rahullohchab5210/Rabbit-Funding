import React from "react";
import rabbit from "/assets/images/RabbitImage.png";
import Button from "./common/Btn";

function WorkedRabbit() {
    return (
        <div className="relative flex justify-center items-center overflow-hidden
    bg-linear-to-b from-[#4CAF50]/10 to-transparent py-25 max-sm:py-10">

            {/* Rabbit Background Image */}
            <img
                src={rabbit}
                alt="rabbit"
                className="absolute inset-0 m-auto opacity-5 mix-blend-overlay pointer-events-none"
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center items-center pt-36 pb-28 max-w-147.5 max-sm:py-20 px-3">
                <h2 className="font-Montserrat font-bold text-[#2B2B2B] text-hero leading-[120%] text-center max-sm:text-medium-heading min-[400px]:text-nowrap">
                    Worked With Rabbit?
                </h2>

                <p className="font-Montserrat pt-3 pb-6 max-w-132 text-center text-small text-[#4E4E4E] font-normal">
                    We love hearing success stories. Submit your testimonial and help
                    others fund their story.
                </p>

                <Button
                    className="flex items-center gap-[10.98px] py-5 px-8 bg-[#7AC943] border-none text-[#FEFEFE] hover:bg-black cursor-pointer transition-all duration-300"
                    text="Share Yours"
                    icon="BTN_ARROW_ICON"
                />
            </div>

        </div>
    );
}

export default WorkedRabbit;


// import React from "react";
// import rabbit from "/assets/images/RabbitImage.png";
// import Button from "./common/Btn";

// function WorkedRabbit() {
//     return (
//         <div className="relative flex justify-center  items-center  bg-cover bg-center bg-no-repeat  
//     bg-linear-to-b from-[#4CAF50]/10 to-transparent py-25 max-sm:py-5">

//             {/* Rabbit */}
//             <img
//                 src={rabbit}
//                 alt="rabbit"
//                 className="absolute mix-blend-overlay opacity-5   "
//             />

//             <div className="z-1 flex flex-col justify-center items-center max-sm:pt-25 max-sm:pb-25 pt-36.25 pb-28.75 max-w-147.5">
//                 <h2 className="  font-Montserrat font-bold text-[#2B2B2B] text-hero leading-[120%] tracking-[0%] text-center max-sm:text-medium-heading">Worked With Rabbit?</h2>
//                 <p className="font-Montserrat pt-3 pb-6 max-w-132 text-center text-small text-[#4E4E4E] font-normal">We love hearing success stories. Submit your testimonial and help others fund their story.</p>
//                 <Button className="flex items-center gap-[10.98px] py-5 px-8 bg-[#7AC943] border-none text-[#FEFEFE] hover:bg-black cursor-pointer transition-all duration-300"
//                     text="Share Yours"
//                     icon="BTN_ARROW_ICON"
//                 />
//             </div>

//         </div>
//     );
// }

// export default WorkedRabbit;