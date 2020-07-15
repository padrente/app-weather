import React from 'react';
import './Result.css';

const Result = props => {
    
    const {date, city, sunrise, sunset, temp, windIn, pressure, err} = props.weather;
    
    let content = null;

    if(!err && city){
        const sunRTime = new Date(sunrise * 1000).toLocaleTimeString();
        const sunSTime = new Date(sunset * 1000).toLocaleTimeString();
        content =(
            <div>
                <h3>{`Wyszukiwanie dla miasta ${city}`}</h3>
                <h4>Dane dla dnia i godziny: {date}</h4>
                <h4>Temperatura: {temp}°C</h4>
                <h4>Ciśnienie: {pressure} hPa</h4>
                <h4>Wsch. słońca: {sunRTime}</h4>
                <h4>Zach. słońca: {sunSTime}</h4>
                <h4>Prędkość wiatru: {windIn} km/h</h4>
            </div>
        )
    }
    return (
        <div className = "result">
            {err ? `Nie posiadamy informacji o ${city} w naszej bazie danych. ` : content}
        </div>
    );
}
 
export default Result;