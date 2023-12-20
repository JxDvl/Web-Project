import React from 'react'
import ibuprofenImage from './medicineImg/Ibuprofen.jpg'

import './ibuprorfen.css'

function ibuprofen() {
    return (
        <div className="ibuprofen-container">
            <div className="left-content">
                <h1>Ibuprofen</h1>
                <img src={ibuprofenImage} className="img-style" alt="ibuprofen"/>
            </div>
            <div className="right-content text-container">
                <p>Препарат Ибупрофен относится к нестероидным
                    противовоспалительным средствам для наружного применения.
                    Ибупрофен оказывает противовоспалительное и анальгезирующее действие.
                    Подавляет продукцию медиаторов воспаления.
                    Ингибирует циклооксигеназу и блокирует биосинтез простагландинов.</p>
            </div>
        </div>
    );
}

export default ibuprofen;