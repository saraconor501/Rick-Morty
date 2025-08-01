import React from 'react';
import Image from "next/image";
import Logo from "../../../shared/assets/icons/logo.svg";
import Link from "next/link";

export const Header = () => {
    return (
        <header
            className="flex justify-center h-[60px] relative bg-[#FFFFFF]">
            <nav
                className="flex justify-between w-full min-h-[60px] items-center max-w-[97%] pl-[1.5rem] pr-[1.5rem]">
                <Link href={"/"} className="flex items-center">
                    <Image src={Logo} alt="Logo"/>
                </Link>
                <ul className="flex items-center gap-7">
                    <li className="font-bold">Docs</li>
                    <li className="font-bold">About</li>
                    <li className="font-bold">Support</li>
                </ul>
            </nav>
        </header>
    );
};