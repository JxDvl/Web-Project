import React from 'react'
import analginImage from './medicineImg/analgin.jpg'
import './analgin.css'

function analgin() {
    return (
        <div className="analgin-container">
            <div className="left-content">
                <h1>Analgin</h1>
                <img src={analginImage} className="img-style" alt="analgin"/>
            </div>
            <div className="right-content text-container">
                <p>Анальгин обладает слабо выраженным противовоспалительным эффектом,
                    обусловливающим малое влияние на водно-солевой обмен
                    (задержка натрия и воды) и слизистую оболочку ЖКТ.
                    Оказывает спазмолитическое действие на гладкую мускулатуру
                    мочевых и желчных путей. Действие развивается через 20-40 минут
                    после приема внутрь.</p>
            </div>
        </div>
    );
}

export default analgin;