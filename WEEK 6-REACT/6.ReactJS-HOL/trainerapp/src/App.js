import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import TrainersList from './TrainersList';
import TrainerDetail from './TrainerDetail';
import trainersMock from './TrainersMock';
import './App.css';

function App() {
    return (
        <Router>
            <div>
                <h1>My Academy Trainers App</h1>
                <nav>
                    <Link to="/">Home</Link> | <Link to="/trainers">Show Trainers</Link>
                </nav>
                <hr />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/trainers" element={<TrainersList trainers={trainersMock} />} />
                    <Route path="/trainer/:id" element={<TrainerDetail />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
