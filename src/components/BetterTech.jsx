import { BETTER_TECH_DATA } from '../utils/helper'
import Icons from './common/Icons'

function BetterTech() {
    return (
        <div className='bg-ternary py-15'>
            <div className='max-w-285 mx-auto px-3'>
                <h2 className='pb-10 font-Montserrat text-center text-primary text-heading font-bold leading-120 tracking-normal max-sm:text-medium'>Better Tech. Better Team. Better Lending</h2>
                <div className='flex flex-row items-center max-lg:flex-wrap max-md:justify-center justify-between w-full'>
                    {BETTER_TECH_DATA.map((item, i) => {
                        return <div key={i} className='flex flex-col items-center gap-3 max-w-70 py-6'>
                            <span className='bg-greener rounded-xl w-14.5 h-14.5 flex items-center justify-center'><Icons icon={item.icon} /></span>
                            <h5 className='max-w-50.5 text-primary text-center text-subtitle font-semibold tracking-normal leading-125 font-Rubik max-sm:text-body'>{item.title}</h5>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default BetterTech