import React from 'react';
import ibuprofen from './medicines/medicineImg/Ibuprofen.jpg'
import ketanov from './medicines/medicineImg/ketanov.jpg'
import analgin from './medicines/medicineImg/analgin.jpg'

import './list.css';

function List() {
    return (
        <div>
            <section className="product-list">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 custom-cell">
                            <div className="product card mb-4">
                                <img src={ibuprofen} className="card-img-top" alt="Ибупрофен"/>
                                <div className="card-body">
                                    <h5 className="card-title">Ibuprofen</h5>
                                    <p className="card-text">0.47$</p>
                                    <a href="https://asevalar.ru/catalog/lekarstvennye_preparaty/nervnaya_sistema/sredstva_ot_boli/168253_ibuprofen_200_mg_20_sht_tabletki_pokrytye_obolochkoy/"
                                       className="btn btn-primary">Buy</a>
                                </div>
                                <div className="description">
                                    <p> Оригинальное ркаткое описание </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 custom-cell">
                            <div className="product card mb-4">
                                <img src={ketanov} className="card-img-top" alt="Кетанов"/>
                                <div className="card-body">
                                    <h5 className="card-title">Ketanov</h5>
                                    <p className="card-text">4.63$</p>
                                    <a href="https://366.ru/p/ketanov-tab-p-o-10mg-100-5004/?utm_source=google.com&utm_medium=organic&utm_campaign=google.com&utm_referrer=google.com"
                                       className="btn btn-primary">Buy</a>
                                </div>
                                <div className="description">
                                    <p> Оригинальное ркаткое описание </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 custom-cell">
                            <div className="product card mb-4">
                                <img src={analgin} className="card-img-top" alt="Анальгин"/>
                                <div className="card-body">
                                    <h5 className="card-title">Analgin</h5>
                                    <p className="card-text">1.33$</p>
                                    <a href="https://www.eapteka.ru/goods/id35136/" className="btn btn-primary">Buy</a>
                                </div>
                                <div className="description">
                                    <p> Оригинальное ркаткое описание </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default List;