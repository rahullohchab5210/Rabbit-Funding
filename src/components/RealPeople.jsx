import React from 'react'
import { CARD_DATA, FIVE_STAR_ICON_DATA } from '../utils/helper'
import Icons from './common/Icons'

function RealPeople() {
    return (
        <div className='max-w-285 mx-auto px-3 pb-42.5 max-lg:pb-17.5 max-sm:pb-12.5 w-full'>
            <h2 className='pb-15 font-Montserrat text-[#2B2B2B] text-heading font-bold text-center leading-[120%] tracking-[0%] max-sm:text-medium-heading'>Real People. Real Results.</h2>
            <div className='flex flex-row items-center flex-wrap gap-y-6 max-[1200px]:w-full  '>
                {CARD_DATA.map((card, i) => {
                    return <div key={i} className='lg:w-1/2 px-3 w-full '>
                        <div className='p-6 shadow-xl rounded-3xl bg-white min-h-98.5 flex w-full'>
                            <div className='flex flex-col justify-between w-full'>
                                <div className='flex flex-col'>
                                    <div className='flex flex-row items-center gap-[4.59px]'>
                                        {Array(5).fill(FIVE_STAR_ICON_DATA).map((item, i) => {
                                            return <span key={i} className=''><Icons icon={item.icon} /></span>
                                        })}
                                    </div>
                                    <p className='pt-4 font-Montserrat text-body text-[#4E4E4E] font-normal leading-[150%] tracking-[0%]'>{card.paragraph}</p>
                                </div>
                                <div>
                                    <span><svg className='w-full' width="510" height="1" viewBox="0 0 510 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line opacity="0.1" x1="4.37114e-08" y1="0.5" x2="510" y2="0.500045" stroke="#2B2B2B" />
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
    )
}

export default RealPeople