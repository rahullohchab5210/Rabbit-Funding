import { CONTACT_LINKS, LEGAL_LINKS, OUICK_LINKS } from '../../utils/helper'
import Icons from './Icons'

function Footer() {
    return (
        <div className='bg-ternary bg-center bg-cover bg-no-repeat pt-50'>
            <div className='max-w-285 mx-auto px-3'>
                <a href="#" className='flex items-center justify-center mb-15 max-sm:mb-7 max-sm:w-full max-sm:max-w-60'>
                    <Icons icon="LOGO" widthlogo="298" heightlogo="136" />
                </a>
                <div className='grid lg:grid-cols-4 sm:grid-cols-2 justify-between w-full max-lg:gap-y-5'>
                    <div>
                        <span className='font-Montserrat text-body text-secondary font-semibold leading-100 tracking-normal'>Rated 4.9 on trustpilot.</span>
                        <span  >
                            <Icons icon="TRUSTPILOT" className='mt-3' />
                        </span>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h6 className='text-secondary font-Montserrat text-body font-semibold leading-125 tracking-normal'>Quick Links</h6>
                        {OUICK_LINKS.map((item, i) => {
                            return <a key={i} href="#" className='text-secondary font-Montserrat text-body font-normal leading-150 tracking-normal relative w-fit group'>{item.link}
                                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full rounded"></span>
                            </a>
                        })}
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h6 className='text-secondary font-Montserrat text-body font-semibold leading-125 tracking-normal'>Legal</h6>
                        {LEGAL_LINKS.map((item, i) => {
                            return <a key={i} href="#" className='text-secondary font-Montserrat text-body font-normal leading-150 tracking-normal relative w-fit group whitespace-nowrap'>{item.link}
                                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full rounded"></span>
                            </a>
                        })}
                    </div>
                    <div className='flex flex-col gap-4  '>
                        <h6 className='text-secondary font-Montserrat text-body font-semibold leading-125 tracking-normal'>Contact</h6>
                        {CONTACT_LINKS.map((item, i) => {
                            return <a key={i} href="#" className={`flex items-center gap-2 text-secondary font-Montserrat text-body font-normal leading-150 tracking-normal relative w-fit ${item.link === "Admin@rabbitfunding.io" ? "underline hover:no-underline " : " group"}`}><span><Icons icon={item.icon} /></span>{item.link}
                                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#4E4E4E] transition-all duration-300 group-hover:w-full rounded"></span>
                            </a>
                        })}
                    </div>
                </div>
            </div>
            <div className='flex flex-col mt-15'>
                <div className='border border-primary w-full opacity-10'></div>
                <p className='my-4 px-2 text-center text-secondary font-Montserrat text-body font-normal leading-150 tracking-normal'>© {(new Date().getFullYear())} Rabbit Funding, LLC. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer