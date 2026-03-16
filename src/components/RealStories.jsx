import React from 'react'
import { FIVE_STAR_ICON_DATA, STORIES_DATA } from '../utils/helper'
import Icons from './common/Icons'

function RealStories() {
    return (
        <div className='bg-white py-42.5'>
            <div className='max-w-285 mx-auto px-3'>
                <div className='flex flex-col items-center'>
                    <h2 className='font-Montserrat text-hero text-[#2B2B2B] font-bold text-center leading-[120%] tracking-[0%] max-sm:text-medium-heading'>Real Stories. Real Funding.</h2>
                    <p className='pt-3 pb-15 max-w-[590px] font-Montserrat text-body text-center text-[#4E4E4E] font-normal leading-[150%] tracking-[0%]'>We’ve helped small businesses from all industries get approved and grow fast. Here’s what they had to say:</p>
                    <div className='flex flex-row items-center -mx-3 flex-wrap max-lg:gap-y-6 max-[1200px]:w-full'>
                        {STORIES_DATA.map((card, i) => {
                            return <div key={i} className='w-full md:w-1/2 lg:w-1/3 px-3 '>
                                <div className='shadow-lg rounded-3xl bg-white p-6 min-h-[240px] flex w-full'>
                                    <div className='flex flex-col justify-between w-full'>
                                        <div className='flex flex-col'>
                                            <div className='flex flex-row items-center gap-[5.px46]'>
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
            </div>
        </div>
    )
}

export default RealStories