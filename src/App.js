import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import Home from './components/home';
import List from './components/list'
import Footer from './components/footer'
import Contact from './components/contact'
import Ibuprofen from './components/medicines/ibuprofen'
import Analgin from './components/medicines/analgin'
import Ketanov from './components/medicines/ketanov'
// import medicines from './components/medicines'
import logo from './components/img/logo.png'

import './App.css';

function App() {
    const [searchQuery, setSearchQuery] = useState('');

    // The search function isn't ready yet, but it's almost complete, a bug has popped up
    const handleSearch = () => {
        // const filMedicines = medicines.filter(medicine =>
        //     medicines.name.toLowerCase().includes(searchQuery.toLowerCase())
        // );

        // if (filMedicines === 1) {
        //     const medicine = filMedicines[0];
        // }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <div className="header-content">
                        <div className="logo-container">
                            <img src={logo} className="App-logo" alt="logo"/>
                        </div>

                        <nav>
                            <ul>
                                <div className="button-container">
                                    <Link to="/" className="nav-link">Home</Link>
                                    <Link to="/list" className="nav-link">Pills</Link>
                                    <Link to="/contact" className="nav-link">Contact</Link>
                                    <Link to="/medicines/ibuprofen" className="nav-link">Ibuprofen</Link>
                                    <Link to="/medicines/analgin" className="nav-link">Analgin</Link>
                                    <Link to="/medicines/ketanov" className="nav-link">Ketanov</Link>
                                </div>
                            </ul>
                        </nav>

                        <div className="search-container">
                            <input
                                type="text"
                                placeholder="Search"
                                className="search-input"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyPress={handleKeyPress}
                            />
                            <button className="search-button" onClick={handleSearch}>
                                Search
                            </button>
                        </div>
                    </div>
                </header>

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/list" element={<List/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/medicines/ibuprofen" element={<Ibuprofen/>}/>
                    <Route path="/medicines/analgin" element={<Analgin/>}/>
                    <Route path="/medicines/ketanov" element={<Ketanov/>}/>
                </Routes>

                <Footer/>
            </div>
        </Router>
    );
}

export default App;