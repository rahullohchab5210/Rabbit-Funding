import { FIVE_STAR_ICON_DATA, STORIES_DATA } from '../utils/helper'
import Icons from './common/Icons'
import Button from './common/Btn'

function RealStories() {
    return (
        <div className='bg-white '>
            <div className='max-w-285 mx-auto px-3 relative pb-99.5 max-sm:pb-90 pt-42.5 max-lg:pt-17.5 max-sm:pt-12.5'>
                <div className='flex flex-col items-center  '>
                    <h2 className='font-Montserrat text-hero text-[#2B2B2B] font-bold text-center leading-[120%] tracking-[0%] max-sm:text-medium'>Real Stories. Real Funding.</h2>
                    <p className='pt-3 pb-15 max-sm:pb-7 max-w-147.5 font-Montserrat text-body text-center text-[#4E4E4E] font-normal leading-[150%] tracking-[0%]'>We’ve helped small businesses from all industries get approved and grow fast. Here’s what they had to say:</p>
                    <div className='flex flex-row items-center -mx-3.5 flex-wrap max-lg:gap-y-6 max-[1200px]:w-full'>
                        {STORIES_DATA.map((card, i) => {
                            return <div key={i} className='w-full md:w-1/2 lg:w-1/3 px-3 '>
                                <div className='shadow-[0px_4px_54px_0px_rgba(0,0,0,0.05)] rounded-3xl bg-white p-6 min-h-60 flex w-full hover:scale-105 transition-all duration-300'>
                                    <div className='flex flex-col justify-between w-full'>
                                        <div className='flex flex-col'>
                                            <div className='flex flex-row items-center gap-[5.46px]'>
                                                {Array(5).fill(FIVE_STAR_ICON_DATA).map((item, i) => {
                                                    return <span key={i} className=''><Icons icon={item.icon} /></span>
                                                })}
                                            </div>
                                            <p className='pt-4 font-Montserrat text-body text-[#4E4E4E] font-normal leading-[150%] tracking-[0%]'>{card.paragraph}</p>
                                        </div>
                                        <div>
                                            <span><svg className='w-full' width="316" height="1" viewBox="0 0 316 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <line opacity="0.1" x1="4.37114e-08" y1="0.5" x2="316" y2="0.500028" stroke="#2B2B2B" />
                                            </svg>
                                            </span>
                                            <div className='flex flex-row items-center gap-3 pt-4'>
                                                <img src={card.img} alt="Mike-Profile" />
                                                <div>
                                                    <h6 className='font-Montserrat text-body text-[#2B2B2B] font-semibold leading-[100%] tracking-[0%]'>{card.title}</h6>
                                                    <p className='font-Montserrat text-tiny-small text-[#2B2B2B] font-normal leading-[150%] tracking-[0%]  '>{card.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
                <div className="absolute left-0 right-0 px-3  -bottom-25">
                    <div
                        className="max-w-285 relative  w-full mx-auto flex flex-col items-center text-center rounded-3xl text-white lg:max-h-82 overflow-hidden"
                        style={{
                            background: "linear-gradient(to bottom, #7AC943, #4CAF50)",
                        }}
                    >
                        <div
                            className="absolute inset-0 rounded-3xl"
                            style={{
                                backgroundImage: "url(/assets/images/TestimonialBg.png)",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                opacity: 0.5,
                            }}
                        />
                        <div className="relative z-10  max-w-189.5 w-full flex flex-col  items-center mt-15 mb-15 ">
                            <h4 className="font-Montserrat text-medium-heading font-bold leading-[120%] max-sm:text-medium max-sm:px-2">
                                Love what Rabbit Did for You! <br /> Share your story and help
                                others discover human-first funding.
                            </h4>
                            <Button className=" mt-8  max-sm:mx-2 max-sm:px-7 rounded-[200px] flex items-center py-5.5 px-8.75 gap-[10.98px] bg-[#010101]/24 hover:bg-[#010101] transition-all duration-300 border-none text-white font-Montserrat font-semibold text-body leading-[100%] tracking-[0%]"
                                text="Submit Your Testimonial"
                                icon="BTN_ARROW_ICON"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RealStories