import { CARD_DATA, FIVE_STAR_ICON_DATA } from '../utils/helper'
import Icons from './common/Icons'

function RealPeople() {
    return (
        <div className='max-w-285 mx-auto px-3 pb-42.5 max-lg:pb-17.5 max-sm:pb-12.5 w-full'>
            <h2 className='max-sm:pb-7 pb-15 font-Montserrat text-primary text-heading font-bold text-center leading-120 tracking-normal max-sm:text-medium'>Real People. Real Results.</h2>
            <div className='flex flex-row items-center -mx-3 flex-wrap gap-y-5 max-[1200px]:w-full  '>
                {CARD_DATA.map((card, i) => {
                    return <div key={i} className='lg:w-1/2 px-2 w-full'>
                        <div className='p-5 shadow-[0px_4px_54px_0px_rgba(0,0,0,0.05)] rounded-3xl bg-white min-h-98.5 flex w-full hover:scale-95 transition-all duration-300'>
                            <div className='flex flex-col justify-between w-full'>
                                <div className='flex flex-col'>
                                    <div className='flex flex-row items-center gap-[4.59px]'>
                                        {Array(5).fill(FIVE_STAR_ICON_DATA).map((item, i) => {
                                            return <span key={i} className=''><Icons icon={item.icon} /></span>
                                        })}
                                    </div>
                                    <p className='pt-4 font-Montserrat text-body text-secondary font-normal leading-150 tracking-normal'>{card.paragraph}</p>
                                </div>
                                <div>
                                    <div className='border border-primary w-full opacity-10'></div>
                                    <div className='flex flex-row items-center gap-3 pt-4'>
                                        <img src={card.img} alt="Profile" />
                                        <div>
                                            <h6 className='font-Montserrat text-body text-primary font-semibold leading-125 tracking-normal'>{card.title}</h6>
                                            <p className='font-Montserrat text-tiny-small text-primary font-normal leading-150 tracking-normal'>{card.description}</p>
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
