import Link from 'next/link'
import React, { useState, useEffect, useRef } from "react";
const close_icon = '/svg/close_icon.svg';
const hamburgerIcon = '/svg/hamburger.svg';
const menuIcon = "/svg/menu.svg";
const accountIcon = "/svg/account.svg";
const websiteIcon = "/svg/Vector.svg";

function useOutsideAlerter(ref: any, setOpenNav: any) {
    useEffect(() => {

        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                setOpenNav(false);
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}


const Navbar = ({ logo }: any) => {

    const [openNav, setOpenNav] = useState(false);

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, setOpenNav);


    return (
        <div className="bg-bgprimary">
            {/* Mobile Nav */}

            <a onClick={() => setOpenNav(true)} className="absolute left-[40px] top-[20px] w-[30px] h-auto hover:text-navhover visible xl:invisible">
                <img src={hamburgerIcon} className='w-[30px] h-auto' alt="hamburgerIcon" />
            </a>

            {
                openNav &&
                <div ref={wrapperRef} className="fixed z-10 top-0 left-0 bottom-0 right-0 h-full bg-[#000000bf] w-full">
                    <div className="flex flex-col z-[11] fixed top-0 bottom-0 left-0 w-[250px] bg-white h-full pt-36 pl-6">
                        <div onClick={() => setOpenNav(false)} className="absolute left-[40px] top-[20px]">
                            <img className="w-[30px] h-auto cursor-pointer" src={close_icon} alt="closeIcon" />
                        </div>
                        <div className="pl-[5%]">
                            <img src={logo} className='w-[50px] h-auto' />
                        </div>
                        <Link href="/">

                            <div onClick={() => setOpenNav(false)} className="flex pl-2.5 pt-6 text-fsl font-bold transition-all hover:text-navhover">
                                <img src={websiteIcon} className="ml-1" />
                                Home
                            </div>
                        </Link>
                        <Link href="#Menu">

                            <div onClick={() => setOpenNav(false)} className="flex pl-2.5 pt-6 text-fsl font-bold transition-all hover:text-navhover">
                                <img src={menuIcon} className="ml-1" />
                                Menu
                            </div>
                        </Link>
                        <Link href="#My-account">

                            <div onClick={() => setOpenNav(false)} className="flex pl-2.5 pt-6 text-fsl font-bold transition-all hover:text-navhover">
                                <img src={accountIcon} className="ml-1" />
                                My Account
                            </div>
                        </Link>
                    </div>
                </div>
            }
            <div className="flex border-[#e7e8ec] sticky items-center p-0 pt-5 xl:p-5 invisible xl:visible">
                {/* Desktop Nav */}

                <div className="flex space-x-16 items-center hidden xl:flex">
                    <Link href="/" >
                        <img className="flex h-full w-full items-center" src={logo} alt="logo" />
                    </Link>
                    <Link href="/">
                        <div className="flex text-xl font-body transition-all hover:text-navhover">
                            <img src={websiteIcon} className="w-[25px] pl-1" />
                            Home
                        </div>
                    </Link>
                    <Link href="#Menu">

                        <div className="flex text-xl font-body transition-all hover:text-navhover">
                            <img src={menuIcon} className="w-[25px] pl-1" />
                            Menu
                        </div>
                    </Link>
                    <Link href="#My Accout">
                        <div className="flex text-xl font-body transition-all hover:text-navhover">
                            <img src={accountIcon} className="w-[25px] pl-1" />
                            My Account
                        </div>
                    </Link>
                </div>

            </div>
        </div>

    );
};

export default Navbar;

