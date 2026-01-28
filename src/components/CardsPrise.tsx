import { forwardRef } from "react";
import CardsPriseElemM from "./CardsPriseElemM";
import GalleryCards from "./CardsGalereyD";
import type { Card } from "../type";

const CardsPrise = forwardRef<HTMLDivElement>((props, ref) => {
    const cards: Card[] = [
        {
            linkWatch: "sdc",
            linkDownload: "stdfvring",
            text: "Деревянный одноэтажный (эконом) 175&nbsp;м2",
            prise: "43 472",
            bgImage: "43 472",
        },
        {
            linkWatch: "sdc",
            linkDownload: "stdfvring",
            text: "Каменный одноэтажный (эконом) 175&nbsp;м2",
            prise: "67 117",
            bgImage: "43 472",
        },
        {
            linkWatch: "sdc",
            linkDownload: "stdfvring",
            text: "Деревянный двухэтажный (эконом) 350&nbsp;м2",
            prise: "29 142",
            bgImage: "43 472",
        },
        {
            linkWatch: "sdc",
            linkDownload: "stdfvring",
            text: "Каменный двухэтажный (эконом) 350&nbsp;м2",
            prise: "43 823",
            bgImage: "43 472",
        },
        {
            linkWatch: "sdc",
            linkDownload: "stdfvring",
            text: "Деревянный одноэтажный (бизнес) 175&nbsp;м2",
            prise: "39 812",
            bgImage: "43 472",
        },
        {
            linkWatch: "sdc",
            linkDownload: "stdfvring",
            text: "Каменный одноэтажный (бизнес) 175&nbsp;м2",
            prise: "63 213",
            bgImage: "43 472",
        },
        {
            linkWatch: "sdc",
            linkDownload: "stdfvring",
            text: "Деревянный двухэтажный (бизнес) 350&nbsp;м2",
            prise: "24 445",
            bgImage: "43 472",
        },
        {
            linkWatch: "sdc",
            linkDownload: "stdfvring",
            text: "Каменный двухэтажный (бизнес) 350&nbsp;м2",
            prise: "40 238",
            bgImage: "43 472",
        },
    ];

    return (
        <div ref={ref}>
            {/* мобильная */}
            <div className="w-full relative px-6 pt-6 pb-42.5 bg-[#EFEFEF] grid grid-cols-2 gap-4 md:hidden">
                <div className="absolute inset-0 bg-[url('/images/sq1M.png')] bg-size-[50%] bg-top-right  bg-no-repeat z-0  block  md:hidden"></div>
                <div className="absolute inset-0 bg-[url('/images/sq2M.png')] bg-size-[75%] bg-bottom-left  bg-no-repeat z-0  block  md:hidden"></div>
                {cards.map((card, index) => (
                    <CardsPriseElemM key={index} index={index} card={card} />
                ))}
            </div>
            {/* десктоп */}
            <div className="px-27.5 overflow-hidden  w-full relative   hidden md:flex ">
                <GalleryCards items={cards} />
            </div>
        </div>
    );
});

export default CardsPrise;
