import { useState } from "react"
import InfoBox from "./infoBox"
import SearchBox from "./SearchBox"
import Header from "./Header";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "rajkot",
        feelsLike: 25.96,
        humidity: 18,
        temp: 26.89,
        tempMax: 26.89,
        tempMin: 26.89,
        weather: "clear sky"
    });

    let updateInfo = (info) => {
        setWeatherInfo(info);
    };

    return(
        <div>
            {/* <h2>weather app by deep</h2> */}
            <Header />
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}