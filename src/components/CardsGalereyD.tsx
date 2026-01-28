// import { useState } from "react";
// import type { Card } from "../type";

// export default function GalleryCards(props: { items: Card[] }) {
//     const { items } = props;
//     const [hovered, setHovered] = useState<number | null>(null);
//     const [index, setIndex] = useState(0);
//     const visibleCount = 0;

//     const prev = () => {
//         setIndex((prev) => Math.max(prev - 1, 0));
//     };

//     const next = () => {
//         setIndex((prev) => Math.min(prev + 1, items.length - 1));
//     };

//     return (
//         <div className="relative w-full min-h-212.5 px-27.5 flex flex-col">
//             {/* cards */}
//             <div className="flex gap-4  flex-1">
//                 {items.map((item, i) => {
//                     const isHovered = hovered === i;

//                     return (
//                         <div
//                             key={i}
//                             onMouseEnter={() => setHovered(i)}
//                             onMouseLeave={() => setHovered(null)}
//                             className="relative h-full shrink-0 transition-[flex-basis] duration-300 ease-out"
//                             style={{
//                                 flexBasis: isHovered ? "37.5%" : "20.8%",
//                             }}
//                         >
//                             <div className="h-full w-full rounded-2xl overflow-hidden">
//                                 <div
//                                     className="h-full w-full bg-cover bg-center px-6 pt-6 pb-8 bg-[url('/images/CardsBgM.png')] flex flex-col justify-between"
//                                     style={{
//                                         backgroundImage: `url(${item.bgImage})`,
//                                     }}
//                                 >
//                                     <div className=" flex flex-row items-start gap-5">
//                                         <div className="w-full text-center rounded-full bg-[rgba(64,107,90,0.51)] py-3 text-white font-montserrat text-[32px] font-medium leading-[110%] mb-4">
//                                             {item?.prise}
//                                         </div>
//                                         <div className={`cursor-pointer shrink-0 ${isHovered ? "block" : "  hidden"}`}>
//                                             <svg
//                                                 width="56"
//                                                 height="56"
//                                                 viewBox="0 0 56 56"
//                                                 fill="none"
//                                             >
//                                                 <rect
//                                                     width="56"
//                                                     height="56"
//                                                     rx="28"
//                                                     fill="#CCF4D5"
//                                                 />
//                                                 <path
//                                                     fill-rule="evenodd"
//                                                     clip-rule="evenodd"
//                                                     d="M21.8011 18.2378C21.7982 17.5248 22.3738 16.9491 23.0868 16.9521L37.6929 17.0119C38.4059 17.0149 38.9863 17.5952 38.9892 18.3082L39.049 32.9143C39.052 33.6273 38.4763 34.2029 37.7633 34.2C37.0503 34.1971 36.47 33.6167 36.467 32.9037L36.4199 21.4144L19.2199 38.6145C18.7178 39.1166 17.9003 39.1132 17.3941 38.607C16.8879 38.1008 16.8845 37.2833 17.3866 36.7812L34.5867 19.5812L23.0974 19.5341C22.3844 19.5312 21.804 18.9508 21.8011 18.2378Z"
//                                                     fill="#00533B"
//                                                 />
//                                             </svg>
//                                         </div>
//                                     </div>
//                                     <div className=" flex flex-col gap-15.5">
//                                         <div className="max-w-50 text-white font-montserrat text-[24px] font-medium uppercase leading-[110%]">
//                                             {item?.text?.replace(
//                                                 /&nbsp;/g,
//                                                 "\u00A0"
//                                             )}
//                                         </div>
//                                         <div className="group relative flex flex-row items-center justify-center  bg-white rounded-full px-2 py-4 cursor-pointer active:translate-y-1 active:shadow-sm transition-all duration-200">
//                                             <div className="text-[#00533B] text-center text-lg mr-8 font-medium leading-6">
//                                                 Скачать отчет
//                                             </div>
//                                             <div className="absolute right-1">
//                                                 <svg
//                                                     className="fill-[#00533B] group-hover:fill-[#087153] transition-all duration-200 "
//                                                     xmlns="http://www.w3.org/2000/svg"
//                                                     width="44"
//                                                     height="44"
//                                                     viewBox="0 0 44 44"
//                                                     fill="none"
//                                                 >
//                                                     <rect
//                                                         width="44"
//                                                         height="44"
//                                                         rx="22"
//                                                     />
//                                                     <path
//                                                         fill-rule="evenodd"
//                                                         clip-rule="evenodd"
//                                                         d="M23.4697 15.4697C23.7626 15.1768 24.2374 15.1768 24.5303 15.4697L30.5303 21.4697C30.8232 21.7626 30.8232 22.2374 30.5303 22.5303L24.5303 28.5303C24.2374 28.8232 23.7626 28.8232 23.4697 28.5303C23.1768 28.2374 23.1768 27.7626 23.4697 27.4697L28.1893 22.75H14C13.5858 22.75 13.25 22.4142 13.25 22C13.25 21.5858 13.5858 21.25 14 21.25H28.1893L23.4697 16.5303C23.1768 16.2374 23.1768 15.7626 23.4697 15.4697Z"
//                                                         fill="white"
//                                                     />
//                                                 </svg>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     );
//                 })}
//             </div>

//             {/* arrows */}
//             <div className=" relative mt-8.5 flex justify-end gap-2">
//                 <button
//                     onClick={prev}
//                     disabled={index === 0}
//                     className="group bg-[#FEFEFE] px-9.5 py-3 rounded-full  disabled:opacity-40 cursor-pointer active:translate-y-1 active:shadow-sm transition-all duration-200"
//                 >
//                     <svg
//                         className="rotate-180 fill-[#519189] group-hover:fill-[#2F6B64]"
//                         width="12"
//                         height="21"
//                         viewBox="0 0 12 21"
//                         fill="none"
//                     >
//                         <path
//                             fill-rule="evenodd"
//                             clip-rule="evenodd"
//                             d="M0.390524 0.384422C0.911223 -0.128141 1.75544 -0.128141 2.27614 0.384422L11.6095 9.57192C12.1302 10.0845 12.1302 10.9155 11.6095 11.4281L2.27614 20.6156C1.75544 21.1281 0.911223 21.1281 0.390524 20.6156C-0.130175 20.103 -0.130175 19.272 0.390524 18.7594L8.78105 10.5L0.390524 2.24058C-0.130175 1.72801 -0.130175 0.896985 0.390524 0.384422Z"
//                         />
//                     </svg>
//                 </button>
//                 <button
//                     onClick={next}
//                     disabled={index >= items.length - visibleCount}
//                     className="bg-[#FEFEFE] px-9.5 py-3 rounded-full disabled:opacity-40 group cursor-pointer active:translate-y-1 active:shadow-sm transition-all duration-200"
//                 >
//                     <svg
//                         className="fill-[#519189] group-hover:fill-[#2F6B64]"
//                         width="12"
//                         height="21"
//                         viewBox="0 0 12 21"
//                         fill="none"
//                     >
//                         <path
//                             fill-rule="evenodd"
//                             clip-rule="evenodd"
//                             d="M0.390524 0.384422C0.911223 -0.128141 1.75544 -0.128141 2.27614 0.384422L11.6095 9.57192C12.1302 10.0845 12.1302 10.9155 11.6095 11.4281L2.27614 20.6156C1.75544 21.1281 0.911223 21.1281 0.390524 20.6156C-0.130175 20.103 -0.130175 19.272 0.390524 18.7594L8.78105 10.5L0.390524 2.24058C-0.130175 1.72801 -0.130175 0.896985 0.390524 0.384422Z"
//                         />
//                     </svg>
//                 </button>
//             </div>
//         </div>
//     );
// }

// import { useState } from "react";
// import type { Card } from "../type";

// export default function GalleryCards(props: { items: Card[] }) {
//     const { items } = props;
//     const [hovered, setHovered] = useState<number | null>(null);
//     const [index, setIndex] = useState(0);
//     const visibleCount = 4;

//     const prev = () => {
//         console.log(index);
//         setIndex(Math.max(index - 1, 0));
//     };
//     // const next = () => {
//     //     console.log(index);
//     //     setIndex(Math.min(index + 1, items.length - visibleCount));
//     // };
//     const next = () => {
//         const maxIndex = Math.max(items.length - visibleCount - 1, 0);
//         setIndex(Math.min(index + 1, maxIndex));
//     };

//     return (
//         <div className="relative w-full min-h-212.5  flex flex-col ">
//             {/* cards */}
//             <div
//                 className="flex gap-6  flex-1 transition-transform duration-300 ease-out "
//                 style={{
//                     transform: `translateX(-${index * (100 / visibleCount)}%)`,
//                 }}
//             >
//                 {items.map((item, i) => {
//                     const isHovered = hovered === i;

//                     return (
//                         <div
//                             key={i}
//                             onMouseEnter={() => setHovered(i)}
//                             onMouseLeave={() => setHovered(null)}
//                             // className="relative h-full shrink-0 transition-[flex-basis] duration-300 ease-out"
//                             className={`relative h-full shrink-0 transition-[flex-basis] duration-300 ease-out ${
//                                 i === items.length - 1
//                                     ? "origin-right"
//                                     : "origin-left"
//                             }`}
//                             style={{
//                                 flexBasis: isHovered ? "37.5%" : "20.8%",
//                             }}
//                         >
//                             <div className="h-full w-full rounded-2xl overflow-hidden">
//                                 <div
//                                     className="h-full w-full bg-cover bg-center px-6 pt-6 pb-8 bg-[url('/images/CardsBgM.png')] flex flex-col justify-between"
//                                     style={{
//                                         backgroundImage: `url(${item.bgImage})`,
//                                     }}
//                                 >
//                                     <div className=" flex flex-row items-start gap-5">
//                                         <div className="w-full text-center rounded-full bg-[rgba(64,107,90,0.51)] py-3 text-white font-montserrat text-[32px] font-medium leading-[110%] mb-4">
//                                             {item?.prise}
//                                         </div>
//                                         <div
//                                             className={`cursor-pointer shrink-0 ${
//                                                 isHovered ? "block" : "  hidden"
//                                             }`}
//                                         >
//                                             <svg
//                                                 width="56"
//                                                 height="56"
//                                                 viewBox="0 0 56 56"
//                                                 fill="none"
//                                             >
//                                                 <rect
//                                                     width="56"
//                                                     height="56"
//                                                     rx="28"
//                                                     fill="#CCF4D5"
//                                                 />
//                                                 <path
//                                                     fill-rule="evenodd"
//                                                     clip-rule="evenodd"
//                                                     d="M21.8011 18.2378C21.7982 17.5248 22.3738 16.9491 23.0868 16.9521L37.6929 17.0119C38.4059 17.0149 38.9863 17.5952 38.9892 18.3082L39.049 32.9143C39.052 33.6273 38.4763 34.2029 37.7633 34.2C37.0503 34.1971 36.47 33.6167 36.467 32.9037L36.4199 21.4144L19.2199 38.6145C18.7178 39.1166 17.9003 39.1132 17.3941 38.607C16.8879 38.1008 16.8845 37.2833 17.3866 36.7812L34.5867 19.5812L23.0974 19.5341C22.3844 19.5312 21.804 18.9508 21.8011 18.2378Z"
//                                                     fill="#00533B"
//                                                 />
//                                             </svg>
//                                         </div>
//                                     </div>
//                                     <div className=" flex flex-col gap-15.5">
//                                         <div className="max-w-50 text-white font-montserrat text-[24px] font-medium uppercase leading-[110%]">
//                                             {item?.text?.replace(
//                                                 /&nbsp;/g,
//                                                 "\u00A0"
//                                             )}
//                                         </div>
//                                         <div className="group relative flex flex-row items-center justify-center  bg-white rounded-full px-2 py-4 cursor-pointer active:translate-y-1 active:shadow-sm transition-all duration-200">
//                                             <div className="text-[#00533B] text-center text-lg mr-8 font-medium leading-6">
//                                                 Скачать отчет
//                                             </div>
//                                             <div className="absolute right-1">
//                                                 <svg
//                                                     className="fill-[#00533B] group-hover:fill-[#087153] transition-all duration-200 "
//                                                     xmlns="http://www.w3.org/2000/svg"
//                                                     width="44"
//                                                     height="44"
//                                                     viewBox="0 0 44 44"
//                                                     fill="none"
//                                                 >
//                                                     <rect
//                                                         width="44"
//                                                         height="44"
//                                                         rx="22"
//                                                     />
//                                                     <path
//                                                         fill-rule="evenodd"
//                                                         clip-rule="evenodd"
//                                                         d="M23.4697 15.4697C23.7626 15.1768 24.2374 15.1768 24.5303 15.4697L30.5303 21.4697C30.8232 21.7626 30.8232 22.2374 30.5303 22.5303L24.5303 28.5303C24.2374 28.8232 23.7626 28.8232 23.4697 28.5303C23.1768 28.2374 23.1768 27.7626 23.4697 27.4697L28.1893 22.75H14C13.5858 22.75 13.25 22.4142 13.25 22C13.25 21.5858 13.5858 21.25 14 21.25H28.1893L23.4697 16.5303C23.1768 16.2374 23.1768 15.7626 23.4697 15.4697Z"
//                                                         fill="white"
//                                                     />
//                                                 </svg>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     );
//                 })}
//             </div>

//             {/* arrows */}
//             <div className=" relative mt-8.5 flex justify-end gap-2">
//                 <button
//                     onClick={prev}
//                     disabled={index === 0}
//                     className="group bg-[#FEFEFE] px-9.5 py-3 rounded-full  disabled:opacity-40 cursor-pointer active:translate-y-1 active:shadow-sm transition-all duration-200"
//                 >
//                     <svg
//                         className="rotate-180 fill-[#519189] group-hover:fill-[#2F6B64]"
//                         width="12"
//                         height="21"
//                         viewBox="0 0 12 21"
//                         fill="none"
//                     >
//                         <path
//                             fill-rule="evenodd"
//                             clip-rule="evenodd"
//                             d="M0.390524 0.384422C0.911223 -0.128141 1.75544 -0.128141 2.27614 0.384422L11.6095 9.57192C12.1302 10.0845 12.1302 10.9155 11.6095 11.4281L2.27614 20.6156C1.75544 21.1281 0.911223 21.1281 0.390524 20.6156C-0.130175 20.103 -0.130175 19.272 0.390524 18.7594L8.78105 10.5L0.390524 2.24058C-0.130175 1.72801 -0.130175 0.896985 0.390524 0.384422Z"
//                         />
//                     </svg>
//                 </button>
//                 <button
//                     onClick={next}
//                     disabled={index >= items.length - visibleCount}
//                     className="bg-[#FEFEFE] px-9.5 py-3 rounded-full disabled:opacity-40 group cursor-pointer active:translate-y-1 active:shadow-sm transition-all duration-200"
//                 >
//                     <svg
//                         className="fill-[#519189] group-hover:fill-[#2F6B64]"
//                         width="12"
//                         height="21"
//                         viewBox="0 0 12 21"
//                         fill="none"
//                     >
//                         <path
//                             fill-rule="evenodd"
//                             clip-rule="evenodd"
//                             d="M0.390524 0.384422C0.911223 -0.128141 1.75544 -0.128141 2.27614 0.384422L11.6095 9.57192C12.1302 10.0845 12.1302 10.9155 11.6095 11.4281L2.27614 20.6156C1.75544 21.1281 0.911223 21.1281 0.390524 20.6156C-0.130175 20.103 -0.130175 19.272 0.390524 18.7594L8.78105 10.5L0.390524 2.24058C-0.130175 1.72801 -0.130175 0.896985 0.390524 0.384422Z"
//                         />
//                     </svg>
//                 </button>
//             </div>
//         </div>
//     );
// }

import { useState } from "react";
import type { Card } from "../type";

export default function GalleryCards(props: { items: Card[] }) {
    const { items } = props;
    const [hovered, setHovered] = useState<number | null>(null);
    const [index, setIndex] = useState(0);
    const visibleCount = 4;

    const prev = () => {
        console.log(index);
        setIndex(Math.max(index - 1, 0));
    };
    const next = () => {
        console.log(index);
        setIndex(Math.min(index + 1, items.length - visibleCount));
    };
    // const next = () => {
    //     const maxIndex = Math.max(items.length - visibleCount - 1, 0);
    //     setIndex(Math.min(index + 1, maxIndex));
    // };

    return (
        <div className="relative w-full min-h-212.5  flex flex-col ">
            {/* cards */}
            
                <div
                    className="flex gap-6  flex-1 transition-transform duration-300 ease-out "
                    style={{
                        transform: `translateX(-${
                            index * (100 / visibleCount)
                        }%)`,
                    }}
                >
                    {items.map((item, i) => {
                        const isHovered = hovered === i;

                        return (
                            <div
                                key={i}
                                onMouseEnter={() => setHovered(i)}
                                onMouseLeave={() => setHovered(null)}
                                // className="relative h-full shrink-0 transition-[flex-basis] duration-300 ease-out"
                                className={`relative h-full shrink-0 transition-[flex-basis] duration-300 ease-out `}
                                style={{
                                    flexBasis: isHovered ? "37.5%" : "20.8%",
                                }}
                            >
                                <div className="h-full w-full rounded-2xl overflow-hidden">
                                    <div
                                        className="h-full w-full bg-cover bg-center px-6 pt-6 pb-8 bg-[url('/images/CardsBgM.png')] flex flex-col justify-between"
                                        style={{
                                            backgroundImage: `url(${item.bgImage})`,
                                        }}
                                    >
                                        <div className=" flex flex-row items-start gap-5">
                                            <div className="w-full text-center rounded-full bg-[rgba(64,107,90,0.51)] py-3 text-white font-montserrat text-[32px] font-medium leading-[110%] mb-4">
                                                {item?.prise}
                                            </div>
                                            <a
                                                target="blank"
                                                href={item?.linkWatch}
                                                className={`cursor-pointer shrink-0 ${
                                                    isHovered
                                                        ? "block"
                                                        : "  hidden"
                                                }`}
                                            >
                                                <svg
                                                    width="56"
                                                    height="56"
                                                    viewBox="0 0 56 56"
                                                    fill="none"
                                                >
                                                    <rect
                                                        width="56"
                                                        height="56"
                                                        rx="28"
                                                        fill="#CCF4D5"
                                                    />
                                                    <path
                                                        fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                        d="M21.8011 18.2378C21.7982 17.5248 22.3738 16.9491 23.0868 16.9521L37.6929 17.0119C38.4059 17.0149 38.9863 17.5952 38.9892 18.3082L39.049 32.9143C39.052 33.6273 38.4763 34.2029 37.7633 34.2C37.0503 34.1971 36.47 33.6167 36.467 32.9037L36.4199 21.4144L19.2199 38.6145C18.7178 39.1166 17.9003 39.1132 17.3941 38.607C16.8879 38.1008 16.8845 37.2833 17.3866 36.7812L34.5867 19.5812L23.0974 19.5341C22.3844 19.5312 21.804 18.9508 21.8011 18.2378Z"
                                                        fill="#00533B"
                                                    />
                                                </svg>
                                            </a>
                                        </div>
                                        <div className=" flex flex-col gap-15.5">
                                            <div className="max-w-50 text-white font-montserrat text-[24px] font-medium uppercase leading-[110%]">
                                                {item?.text?.replace(
                                                    /&nbsp;/g,
                                                    "\u00A0"
                                                )}
                                            </div>
                                            <a target="blank" href={item?.linkDownload} className="group relative flex flex-row items-center justify-center  bg-white rounded-full px-2 py-4 cursor-pointer active:translate-y-1 active:shadow-sm transition-all duration-200">
                                                <div className="text-[#00533B] text-center text-lg mr-8 font-medium leading-6">
                                                    Скачать отчет
                                                </div>
                                                <div className="absolute right-1">
                                                    <svg
                                                        className="fill-[#00533B] group-hover:fill-[#087153] transition-all duration-200 "
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="44"
                                                        height="44"
                                                        viewBox="0 0 44 44"
                                                        fill="none"
                                                    >
                                                        <rect
                                                            width="44"
                                                            height="44"
                                                            rx="22"
                                                        />
                                                        <path
                                                            fill-rule="evenodd"
                                                            clip-rule="evenodd"
                                                            d="M23.4697 15.4697C23.7626 15.1768 24.2374 15.1768 24.5303 15.4697L30.5303 21.4697C30.8232 21.7626 30.8232 22.2374 30.5303 22.5303L24.5303 28.5303C24.2374 28.8232 23.7626 28.8232 23.4697 28.5303C23.1768 28.2374 23.1768 27.7626 23.4697 27.4697L28.1893 22.75H14C13.5858 22.75 13.25 22.4142 13.25 22C13.25 21.5858 13.5858 21.25 14 21.25H28.1893L23.4697 16.5303C23.1768 16.2374 23.1768 15.7626 23.4697 15.4697Z"
                                                            fill="white"
                                                        />
                                                    </svg>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* arrows */}
                <div className=" relative mt-8.5 flex justify-end gap-2">
                    <button
                        onClick={prev}
                        disabled={index === 0}
                        className="group bg-[#FEFEFE] px-9.5 py-3 rounded-full  disabled:opacity-40 cursor-pointer active:translate-y-1 active:shadow-sm transition-all duration-200"
                    >
                        <svg
                            className="rotate-180 fill-[#519189] group-hover:fill-[#2F6B64]"
                            width="12"
                            height="21"
                            viewBox="0 0 12 21"
                            fill="none"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M0.390524 0.384422C0.911223 -0.128141 1.75544 -0.128141 2.27614 0.384422L11.6095 9.57192C12.1302 10.0845 12.1302 10.9155 11.6095 11.4281L2.27614 20.6156C1.75544 21.1281 0.911223 21.1281 0.390524 20.6156C-0.130175 20.103 -0.130175 19.272 0.390524 18.7594L8.78105 10.5L0.390524 2.24058C-0.130175 1.72801 -0.130175 0.896985 0.390524 0.384422Z"
                            />
                        </svg>
                    </button>
                    <button
                        onClick={next}
                         disabled={index >= items.length - visibleCount}
                        // disabled={index >= items.length - visibleCount - 1}
                        className="bg-[#FEFEFE] px-9.5 py-3 rounded-full disabled:opacity-40 group cursor-pointer active:translate-y-1 active:shadow-sm transition-all duration-200"
                    >
                        <svg
                            className="fill-[#519189] group-hover:fill-[#2F6B64]"
                            width="12"
                            height="21"
                            viewBox="0 0 12 21"
                            fill="none"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M0.390524 0.384422C0.911223 -0.128141 1.75544 -0.128141 2.27614 0.384422L11.6095 9.57192C12.1302 10.0845 12.1302 10.9155 11.6095 11.4281L2.27614 20.6156C1.75544 21.1281 0.911223 21.1281 0.390524 20.6156C-0.130175 20.103 -0.130175 19.272 0.390524 18.7594L8.78105 10.5L0.390524 2.24058C-0.130175 1.72801 -0.130175 0.896985 0.390524 0.384422Z"
                            />
                        </svg>
                    </button>
                </div>
            
        </div>
    );
}
