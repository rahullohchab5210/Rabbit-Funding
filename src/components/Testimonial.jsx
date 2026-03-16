import React from 'react'
import Button from './common/Btn'

function Testimonial() {
  return (
      <div>
          <div className='max-w-285 mx-auto px-3'>
              <div className="relative rounded-2xl py-20 text-center bg-gradient-to-r from-[#7AC943] to-[#4CAF50] overflow-hidden">

                  {/* Pattern Image */}
                  <img
                      src="/assets/images/pattern.png"
                      alt="pattern"
                      className="absolute inset-0 w-full h-full object-cover opacity-20"
                  />

                  {/* Content */}
                  <div className="relative   max-w-[758px] flex flex-col justify-center items-center  w">
                      <h2 className="text-white text-3xl font-semibold ">
                          Love what Rabbit Did for You!
                          Share your story and help others discover human-first funding.
                      </h2>
                      <Button className="flex items-center justify-center gap-[10.98px] bg-[#0101013D] border-none text-white hover:bg-black transition-all duration-300"
                          text="Join the Success"
                          icon="BTN_ARROW_ICON"
                      />
                  </div>

              </div>
          </div>
    </div>
  )
}

export default Testimonial