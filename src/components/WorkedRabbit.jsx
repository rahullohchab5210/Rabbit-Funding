import React from "react";
import rabbit from "/assets/images/RabbitImage.png";
import Button from "./common/Btn";
import Icons from "./common/Icons";

function WorkedRabbit() {
    return (



        <div className="w-full mx-auto bg-[linear-gradient(to_bottom,#e8f5e0_0%,#f0f9ea_40%,white_100%)] px-4 md:py-25.75 py-10">
            <div className="max-w-[734.29px] w-full mx-auto relative flex items-center justify-center">
                <Icons icon={"RABBIT"} />

                <div className="absolute flex flex-col  w-full items-center text-center px-4">
                    <div className="flex flex-col max-w-147.5">
                        <h2 className="font-Montserrat font-bold text-[#2B2B2B] text-hero leading-[120%] text-center max-sm:text-medium min-[400px]:text-nowrap">
                            Worked With Rabbit?
                        </h2>

                        <p className="font-Montserrat pt-3 pb-6 max-w-132 text-center text-small text-[#4E4E4E] font-normal">
                            We love hearing success stories. Submit your testimonial and help
                            others fund their story.
                        </p>
                    </div>
                    <Button className="flex items-center gap-[10.98px] py-5.5 px-8.75 bg-[#7AC943] border-none text-[#FEFEFE] hover:bg-black cursor-pointer transition-all duration-300"
                        text="Share Yours"
                        icon="BTN_ARROW_ICON"
                        
                    />
                </div>
            </div>
        </div>


        
    );
}

export default WorkedRabbit;