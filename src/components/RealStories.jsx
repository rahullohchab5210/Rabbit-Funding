import React from 'react'
import { FIVE_STAR_ICON_DATA } from '../utils/helper'
import Icons from './common/Icons'

function RealStories() {
  return (
      <div className='bg-white py-42.5'>
          <div className='max-w-285 mx-auto px-3'>
              <div className='flex flex-col items-center'> 
              <h2 className='font-Montserrat text-hero text-[#2B2B2B] font-bold text-center leading-[120%] tracking-[0%]'>Real Stories. Real Funding.</h2>
              <p className='pt-3 pb-15 max-w-[590px] font-Montserrat text-body text-center text-[#4E4E4E] font-normal leading-[150%] tracking-[0%]'>We’ve helped small businesses from all industries get approved and grow fast. Here’s what they had to say:</p>
              <div>
                      <div className='shadow-lg rounded-3xl bg-white p-6 min-h-[240px]'>
                          <div>
                              <div className='flex flex-row items-center gap-[5.px46]'>
                                  {Array(5).fill(FIVE_STAR_ICON_DATA).map((item, i) => {
                                      return <span key={i} className=''><Icons icon={item.icon} /></span>
                                  })}
                              </div>
                          </div>
                      
                      </div>
                  </div>
              </div>
          </div>
 </div>
  )
}

export default RealStories