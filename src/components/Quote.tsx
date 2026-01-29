
const Quote = () => {


    const textLines = [
        "Строительная",
        "отрасль долго",
        "жила с мифом,",
        "что стоимость",
        "дома — это",
        "«чёрный ящик»",
    ];



    return (
        <div className="relative mt-10 md:mt-40 md:pb-40 px-5 md:px-27.5" >
            <div className="text-black text-center font-montserrat text-[35px] font-medium uppercase flex flex-col gap-4">
                {textLines.map((line, lineIndex) => {
                   
                    return (
                        <div
                            key={lineIndex}
                            className="flex justify-center leading-[120%] md:text-[127px] md:leading-[100%]"
                        >
                           {line}
                        </div>
                    );
                })}
            </div>

            <div className="md:absolute bottom-30 md:right-40 flex flex-row md:flex-row-reverse gap-4 items-center justify-center mt-4">
                <img src="./images/AD.png" className="w-25" alt="" />
                <div className="text-normal font-light leading-[110%] text-black w-30 md:text-right md:w-50">
                    Основатель компании «GOOD WOOD» А. Дубовенко
                </div>
            </div>
        </div>
    );
};

export default Quote;
