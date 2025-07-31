import React from 'react';
import Image from "next/image";
import Logo from "../../../shared/assets/icons/logo.svg";

export const Header = () => {
    return (
        <header
            className="flex justify-center h-[60px] relative bg-[#FFFFFF]">
            <nav
                className="flex justify-between w-full min-h-[60px] items-center mx-auto">
                <Image src={Logo} alt="Logo"/>
            </nav>
        </header>
    );
};