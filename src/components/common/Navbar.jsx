import React, { useEffect, useState } from 'react'
import Icons from './Icons'
import { NAVLINKS } from '../../utils/helper'
import Button from './Btn'
import { Link, NavLink } from 'react-router-dom';


function Navbar() {
    const [menuOpen, setMenuOpen] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    useEffect(() => {
        if (menuOpen) {
            document.body.style.height = "100vh";
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.height = "auto";
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.height = "auto";
            document.body.style.overflow = "auto";
        };
    }, [menuOpen])


    return (
        <div className={`py-5 fixed top-0 z-20 w-full ${isScrolled ? "bg-[#e8f5e0]  shadow-lg" : "bg-transparent"}`}>
            <div className='max-w-285 mx-auto px-3'>
                <div className='flex items-center justify-between '>
                    <Link to={"/"} className="z-20  ">
                        <Icons icon="LOGO_ICON" />
                    </Link>
                    <div className={`flex lg:gap-44.25 gap-6  items-center max-lg:flex-col max-lg:justify-center max-[1024px]:fixed max-[1024px]:bg-[#e8f5e0]  max-[1024px]:backdrop-blur-[50px] max-[1024px]:h-full max-[1024px]:w-full max-[1024px]:top-0 max-[1024px]:transition-all max-[1024px]:duration-300 max-[1024px]:ease-linear z-1 ${menuOpen === "show" ? "max-[1024px]:right-0" : "max-[1024px]:-right-full"}`}>
                        <div className='flex  max-lg:flex-col gap-6  items-center'>
                            {NAVLINKS.map((link, i) => {
                                return <NavLink key={i} to={link === 'home' ? '/' : link}
                                    onClick={() => setMenuOpen(null)}
                                    className={({ isActive }) => `capitalize  text-body font-normal leading-[150%] tracking-[0%] max-lg:text-medium relative inline-block group ${isActive && 'font-semibold text-[#2B2B2B]' || 'text-[#4E4E4E] '}`}>
                                    {
                                        link === "works"
                                            ? "How It Works"
                                            : link
                                    }
                                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#4E4E4E]   transition-all duration-300 group-hover:w-full rounded"></span>
                                </NavLink>
                            })}
                        </div>
                        <Button className="hover:bg-black hover:text-white hover:border-transparent transition-all duration-300 py-4.5 px-7.75"
                            text="Contact Us"
                        />
                    </div>
                    <button onClick={() => setMenuOpen(menuOpen === "show" ? null : "show")} className="lg:hidden flex flex-col gap-1.5 w-10 h-10 justify-center items-center z-50 cursor-pointer">
                        <span className={`block w-7 h-0.5 bg-black transition-all duration-300 ${menuOpen === "show" ? "rotate-45 translate-y-2" : ""}`} />
                        <span className={`block w-7 h-0.5 bg-black transition-all duration-300 ${menuOpen === "show" ? "opacity-0" : ""}`} />
                        <span className={`block w-7 h-0.5 bg-black transition-all duration-300 ${menuOpen === "show" ? "-rotate-45 -translate-y-2" : ""}`} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar


