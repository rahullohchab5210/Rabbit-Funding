import Button from './common/Btn'

function Hero() {
    return (
        <div className='bg-linear-to-b from-[rgba(76,175,80,0.1)] to-[rgba(76,175,80,0)]' >
            <div className='max-w-285 mx-auto px-3' >
                <div className='flex flex-row max-lg:flex-wrap items-center justify-between max-lg:justify-center pt-35 pb-22.5 max-lg:gap-y-10' >
                    <div className='max-w-122.5 max-lg:max-w-full max-lg:text-center max-lg:flex max-lg:flex-col max-lg:items-center' >
                        <h1 className='font-Montserrat text-hero text-primary font-bold leading-120 tracking-normal max-sm:text-medium-heading'>Built by People. Backed by Tech.</h1>
                        <p className='pt-4 pb-8 font-Montserrat text-body text-secondary font-normal leading-150 tracking-normal' >We’re not a software company pretending to care. <br /> We’re real underwriters — with real decision-making power — using tech to move faster, not think for us.</p>
                        <Button className="flex items-center gap-[10.98px] bg-greener border-none text-white hover:bg-black transition-all duration-300 py-5.5 px-8.75"
                            text="Join the Success"
                            icon="BTN_ARROW"
                        />
                    </div>
                    <div className='min-[1285px]:translate-x-21'>
                        <img src="/assets/images/HeroImage.png" alt="image" className='w-full' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero