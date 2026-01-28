import "./App.css";
import Header from "./components/Header";
import Quote from "./components/Quote";
import Cards from "./components/Cards";
import Сhart from "./components/Сhart";
import CardsPrise from "./components/CardsPrise";
import HowWeCollectData from "./components/HowWeCollectData";
import WhyDataFree from "./components/WhyDataFree";
import Footer from "./components/Footer";
import { useRef } from "react";

function App() {
    const cardsPriseRef = useRef<HTMLDivElement>(null);

    return (
        <div>
            <Header
                scrollToCardsPrise={() => {
                    cardsPriseRef.current?.scrollIntoView({
                        behavior: "smooth",
                    });
                }}
            />

            <Quote />

            <Cards />

            <Сhart />

            <CardsPrise ref={cardsPriseRef}/>

            <HowWeCollectData />

            <WhyDataFree />

            <Footer />
        </div>
    );
}

export default App;
