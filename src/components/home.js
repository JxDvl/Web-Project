import React from "react";
import './home.css'
import docs from './img/docs.png'

function Home() {
    return (
        <div className="container">
            <h1>Alikh & Pills</h1>
            <p>Ваша надежная онлайн аптека для качественных препаратов и заботы о здоровье</p>
            <section>
                <h2>О нас</h2>
                <p>
                    Alikh & Pills - это современная аптечная сеть, предоставляющая широкий ассортимент
                    лекарств и медицинских товаров для улучшения вашего здоровья и благополучия.
                </p>
                <div className="photo-container">
                    <img src={docs} alt="doctors"/>
                </div>
            </section>
            <section>
            <h2>Наши услуги</h2>
                <ul>
                    <li>Быстрая доставка препаратов</li>
                    <li>Консультации специалистов онлайн</li>
                    <li>Широкий выбор качественных товаров</li>
                </ul>
            </section>
            <section>
                <h2>Контакты</h2>
                <p>
                    Адрес: Pills Street 166
                    <br/>
                    Телефон: +7 (777) 777 77 77
                    <br/>
                    Email: Pills@pill.pill
                </p>
            </section>
        </div>
    );
}

export default Home;