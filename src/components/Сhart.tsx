function Сhart() {
    return (
        <div className="relative w-full  px-6 md:px-27.5 gap-4 pt-6 md:pt-10 pb-9.25  ">
            <div className="absolute inset-0 bg-[url('/images/sq3.png')] bg-size-[25%] bg-top-right  bg-no-repeat hidden  md:block"></div>
            <div className="absolute inset-0 bg-[url('/images/sq1.png')] bg-size-[25%] bg-bottom-left  bg-no-repeat hidden  md:block"></div>
            <div className="relative bg-white rounded-2xl p-4 md:p-11">
                <div className="bg-[url('/images/СhartM.png')]  md:bg-[url('/images/Сhart.png')]   relative md:bg-center bg-cover rounded-2xl flex flex-col items-center justify-center min-h-80 md:min-h-175 md:gap-15.5">
                    {/* <iframe
                        src="https://app.powerbi.com/view?r=eyJrIjoiYmEzNWZjZDgtMDg3My00M2Q4LThhMjQtYjQzZjU0YzBiZmJlIiwidCI6ImI0NmMwMWE3LTlmOTQtNDViYy04NDhmLTE0ZTU0ODdmNmU1OCIsImMiOjl9"
                        className="w-full md:h-screen border-0 "
                        allow="fullscreen"
                        allowFullScreen
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                    /> */}
                    <div className="  text-black text-center font-montserrat text-[24px] md:text-[40px] font-semibold leading-[110%] uppercase opacity-56">
                        Динамика цен
                        <br className="block  md:hidden" />
                        за 2 года
                    </div>
                    <a className="group  z-10 bottom-0 mt-6  fount-[500] text-[18px] text-[#00513A] bg-white rounded-full py-4 px-4 md:py-2.5 md:px-2 w-[90%] md:w-fit md:gap-15 flex items-center justify-between active:translate-y-1 active:shadow-sm transition-all duration-200" target="_blank" href="https://app.powerbi.com/view?r=eyJrIjoiYmEzNWZjZDgtMDg3My00M2Q4LThhMjQtYjQzZjU0YzBiZmJlIiwidCI6ImI0NmMwMWE3LTlmOTQtNDViYy04NDhmLTE0ZTU0ODdmNmU1OCIsImMiOjl9" >
                        <div className="ml-5 md:ml-15">Смотреть график </div>
                        <svg
                            className="fill-[#00533B] group-hover:fill-[#087153]"
                            width="43"
                            height="43"
                            viewBox="0 0 43 43"
                            fill="none"
                        >
                            <g clip-path="url(#clip0_356_558)">
                                <circle
                                    cx="21.5"
                                    cy="21.5"
                                    r="21.5"
                                    
                                />
                                <path
                                    d="M11 21C10.4477 21 10 21.4477 10 22C10 22.5523 10.4477 23 11 23V22V21ZM33.7071 22.7071C34.0976 22.3166 34.0976 21.6834 33.7071 21.2929L27.3431 14.9289C26.9526 14.5384 26.3195 14.5384 25.9289 14.9289C25.5384 15.3195 25.5384 15.9526 25.9289 16.3431L31.5858 22L25.9289 27.6569C25.5384 28.0474 25.5384 28.6805 25.9289 29.0711C26.3195 29.4616 26.9526 29.4616 27.3431 29.0711L33.7071 22.7071ZM11 22V23H33V22V21H11V22Z"
                                    fill="white"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_356_558">
                                    <rect width="43" height="43" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Сhart;
