import Link from 'next/link'
import React, { useState, useEffect, useRef } from "react";

const logo = "/images/logo.png";
const close_icon = "/svg/close_icon.svg";
const hamburgerIcon = "/svg/hamburger.svg";
const menuIcon = "/svg/menu.svg";
const accountIcon = "/svg/account.svg";
const websiteIcon = "/svg/Vector.svg";
const basket = "/images/basket.png"

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


const Navbar = () => {

    const [openNav, setOpenNav] = useState(false);

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, setOpenNav);


    return (
        <div className="bg-white">
            {/* Mobile Nav */}
            <div className='flex flex-row items-center p-4 justify-between block xl:hidden'>
                {/* <a onClick={() => setOpenNav(true)} className="cursor-pointer"> */}
                <img src={hamburgerIcon} className='w-[30px] h-auto cursor-pointer' alt="hamburgerIcon" onClick={() => setOpenNav(true)} />
                {/* </a> */}
                <img src={logo} className='w-fit h-auto' />
                <div className="flex flex-row items-center">
                    <span className="block rounded-lg w-[6px] h-[6px] bg-green-500 mr-2"></span>
                    <span className="text-green-500 text-sm">Open</span>
                </div>
            </div>

            {
                openNav &&
                <div ref={wrapperRef} className="fixed z-10 top-0 left-0 bottom-0 right-0 h-full bg-[#000000bf] w-full">
                    <div className="flex flex-col z-[11] fixed top-0 bottom-0 left-0 w-[250px] bg-white h-full pt-24 pl-6">
                        <div onClick={() => setOpenNav(false)} className="absolute left-[40px] top-[20px]">
                            <img className="w-[30px] h-auto cursor-pointer" src={close_icon} alt="closeIcon" />
                        </div>
                        <Link href="/">
                            <div onClick={() => setOpenNav(false)} className="flex pl-2.5 text-fsl font-bold transition-all text-slate-800 hover:text-navhover">
                                Home
                            </div>
                        </Link>
                        <Link href="#Login">
                            <div onClick={() => setOpenNav(false)} className="flex pl-2.5 pt-6 text-fsl font-bold transition-all text-slate-800 hover:text-navhover">
                                Login
                            </div>
                        </Link>
                        <Link href="#Delivery-Menu">
                            <div onClick={() => setOpenNav(false)} className="flex pl-2.5 pt-6 text-fsl font-bold transition-all text-slate-800 hover:text-navhover">
                                Delivery Menu
                            </div>
                        </Link>
                        <Link href="#Collection-Menu">
                            <div onClick={() => setOpenNav(false)} className="flex pl-2.5 pt-6 text-fsl font-bold transition-all text-slate-800 hover:text-navhover">
                                Collection Menu
                            </div>
                        </Link>
                        <Link href="#Coupons">
                            <div onClick={() => setOpenNav(false)} className="flex pl-2.5 pt-6 text-fsl font-bold transition-all text-slate-800 hover:text-navhover">
                                Coupons
                            </div>
                        </Link>
                        <div className='flex flex-col border-b-2 mt-auto'>
                        </div>
                        <div className='text-slate-800 p-2'>Contact</div>
                        <div className='text-slate-800 p-2'>Terms & Conditions</div>
                        <div className='text-slate-800 p-2'>Privacy Policy</div>
                    </div>
                </div>
            }
            <div className="flex sticky items-center w-full p-0 pt-5 xl:p-5 hidden xl:block">
                {/* Desktop Nav */}

                <div className="flex flex-row items-center w-full justify-between hidden xl:flex">
                    <Link href="/" >
                        <img className="flex h-full w-full items-center ml-10" src={logo} alt="logo" />
                    </Link>
                    <div className='flex flex-row w-full justify-center items-center ml-64 gap-14'>
                        <Link href="/">
                            <div className="flex text-base transition-all text-slate-800 hover:text-navhover">
                                <img src={websiteIcon} className="w-full pr-4" />
                                Home
                            </div>
                        </Link>
                        <Link href="#Menu">

                            <div className="flex text-base transition-all text-slate-800 hover:text-navhover">
                                <img src={menuIcon} className="w-full pr-4" />
                                Menu
                            </div>
                        </Link>
                        <Link href="#My Accout">
                            <div className="flex text-base transition-all text-slate-800 hover:text-navhover">
                                <img src={accountIcon} className="w-[35px] pr-4" />
                                My Account
                            </div>
                        </Link>
                        <div className='flex flex-col'>
                            <div className='text-green-600 font-medium text-sm'>
                                Open
                            </div>
                            <div className='text-zinc-600 text-xs'>
                                Accepting DoorDash orders until 11:39 PM
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row items-center justify-center space-x-4 bg-[#334155] mr-8 w-[80px] h-[35px] border rounded-2xl'>
                        <img src={basket} className=" w-[15px] h-[15px]" />
                        <span className='text-white py-1'>3</span>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Navbar;

