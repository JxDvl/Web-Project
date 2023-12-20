import React, {useState} from 'react';
import docImg from './img/doc.png'
import './contact.css'
function Contact() {
    const [showPopup, setShowPopup] = useState(false);

    const handleSendClick = () => {
        setShowPopup(true);
    }

    const closePopup = () => {
        setShowPopup(false);
    }
    return (
        <div className="contact-container">
            <div className="label-container">
                <h1>Contact Us</h1>

                <label htmlFor="message">Your message:</label>
                <textarea className="txtArea" id="message" name="message" rows="4" cols="50"></textarea>

                <label htmlFor="contactNumber">Contact Number:</label>
                <input className="inpt" type="text" id="contactNumber" name="contactNumber"/>

                <button onClick={handleSendClick}>Send</button>

                <label htmlFor="workingHours">Working Hours:</label>
                <p>Monday to Friday: 9 AM to 5 PM</p>
            </div>

            <div className="image-container">
                <img src={docImg} alt="Doctor"/>
            </div>

            {showPopup && (
                <div className="popup">
                    <p>Мы записали ваше сообщение.</p>
                    <button onClick={closePopup}>Закрыть</button>
                </div>
            )}
        </div>
    );
}

export default Contact;