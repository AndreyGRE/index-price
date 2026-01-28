import type { Card } from "../type";

function CardsPriseElemM(props: { card: Card; index: number }) {
    const { card } = props;
    const { index } = props;

    return (
        <div
            className={`
                relative
                z-10
                bg-[url('/images/CardsBgM.png')]
                rounded-2xl min-h-137.5 bg-cover p-4 flex flex-col justify-between 
                ${
                index % 2 === 1
                    ? "top-21.5"
                    : ""
            }`}
        >
            <div className="flex flex-col gap-2">
                <a href={card.linkWatch}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="42"
                        height="41"
                        viewBox="0 0 42 41"
                        fill="none"
                    >
                        <g clip-path="url(#clip0_468_505)">
                            <circle
                                cx="21.0562"
                                cy="18.7515"
                                r="18.9077"
                                fill="#F0F0F0"
                            />
                            <path
                                d="M24.6366 18.7519C24.6366 20.7319 23.0366 22.3319 21.0566 22.3319C19.0766 22.3319 17.4766 20.7319 17.4766 18.7519C17.4766 16.7719 19.0766 15.1719 21.0566 15.1719C23.0366 15.1719 24.6366 16.7719 24.6366 18.7519Z"
                                stroke="#292D32"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M21.0545 27.0266C24.5845 27.0266 27.8745 24.9466 30.1645 21.3466C31.0645 19.9366 31.0645 17.5666 30.1645 16.1566C27.8745 12.5566 24.5845 10.4766 21.0545 10.4766C17.5245 10.4766 14.2345 12.5566 11.9445 16.1566C11.0445 17.5666 11.0445 19.9366 11.9445 21.3466C14.2345 24.9466 17.5245 27.0266 21.0545 27.0266Z"
                                stroke="#292D32"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_468_505">
                                <rect width="42" height="41" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </a>
                <a href={card.linkDownload}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="42"
                        height="41"
                        viewBox="0 0 42 41"
                        fill="none"
                    >
                        <circle
                            cx="21.0562"
                            cy="20.4995"
                            r="18.9077"
                            fill="#52988E"
                        />
                        <path
                            d="M25.4991 17.6504C29.0991 17.9604 30.5691 19.8104 30.5691 23.8604V23.9904C30.5691 28.4604 28.7791 30.2504 24.3091 30.2504H17.7991C13.3291 30.2504 11.5391 28.4604 11.5391 23.9904V23.8604C11.5391 19.8404 12.9891 17.9904 16.5291 17.6604"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M21.0586 10.75V23.63"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M24.407 21.4004L21.057 24.7504L17.707 21.4004"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </a>
            </div>
            <div className="flex flex-col gap-3">
                <div className="text-white font-montserrat text-[16px] font-semibold leading-[117%] uppercase">
                    {card.text}
                </div>
                <div className="bg-white/83 rounded-full py-2 px-4 text-[#0B3D2F] text-[18px] fount-[500] w-full">
                    {card.prise} ₽/м2
                </div>
            </div>
        </div>
    );
}

export default CardsPriseElemM;
