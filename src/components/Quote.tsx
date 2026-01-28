
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
        <div className="mt-10 px-5 md:px-27.5" >
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

            <div className="flex flex-row gap-4 items-center justify-center mt-4">
                <img src="./images/AD.png" className="w-25" alt="" />
                <div className="text-normal font-light leading-[110%] text-black w-30">
                    Основатель компании «GOOD WOOD» А. Дубовенко
                </div>
            </div>
        </div>
    );
};

export default Quote;
