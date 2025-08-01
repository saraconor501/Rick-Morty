import {HeroSlide} from "@/widgets/hero-slide";
import {MainList} from "@/widgets/main-list";

export default async function Home() {
    return (
        <>
            <HeroSlide>
                The Rick and Morty
            </HeroSlide>
            <MainList/>
        </>
    );
}
