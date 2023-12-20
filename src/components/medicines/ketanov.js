import React from 'react'
import ketanovImage from './medicineImg/ketanov.jpg'

import './ketanov.css'

function ketanov() {
    return (
        <div className="ketanov-container">
            <div className="left-content">
                <h1>Ketanov</h1>
                <img src={ketanovImage} className="img-style" alt="ketanov"/>
            </div>
            <div className="right-content text-container">
                <p>Кетанов показан для кратковременного (до 5 сут)
                    купирования боли средней интенсивности, в том числе послеоперационной.
                    Кеторолак — ненаркотический анальгетик, который подавляет активность
                    фермента ЦОГ в метаболическом каскаде арахидоновой кислоты и,
                    таким образом, препятствует продукции простагландинов.</p>
            </div>
        </div>
    );
}

export default ketanov;