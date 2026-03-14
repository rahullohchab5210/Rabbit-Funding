import React from 'react'
import { BETTER_TECH_DATA } from '../utils/helper'
import Icons from './common/Icons'

function BetterTech() {
    return (
        <div className='bg-[#F5F5F5] py-15'>
            <div className='max-w-285 mx-auto px-3'>
                <h2 className='pb-10 text-center text-[#2B2B2B] text-heading font-bold leading-[120%] tracking-[0%] max-sm:text-medium-heading'>Better Tech. Better Team. Better Lending</h2>
                <div className='flex flex-row items-center max-lg:flex-wrap  max-md:justify-center justify-between w-full'>
                    {BETTER_TECH_DATA.map((item, i) => {
                        return <div key={i} className='flex flex-col items-center  gap-3 max-w-70 py-6'>
                            <span className='bg-[#7AC943] rounded-xl w-14.5 h-14.5 flex items-center justify-center'><Icons icon={item.icon}/></span>
                            <h5 className='max-w-57.25 text-[#2B2B2B] text-center text-subtitle font-semibold leading-[100%] tracking-[0%] font-Rubik'>{item.title}</h5>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default BetterTech