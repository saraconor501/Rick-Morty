import React from 'react';
import Image from "next/image";
import Hero from '@/shared/assets/icons/hero-logo.svg';

interface Props {
    children: React.ReactNode;
}

export const HeroSlide: React.FC<Props> = ({children}) => {
    return (
        <section
            className="flex justify-center items-center flex-col text-center relative bg-white">
            <h1 className="text-[rgb(32_35_41)] font-black z-[1] text-[5.624rem] absolute">
                {children}
            </h1>
            <div className="">
                <Image src={Hero} alt="Hero"/>
            </div>
        </section>
    );
};