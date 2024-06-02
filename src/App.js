import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddressPage from './pages/AddressPage';
import EditAddressPage from './pages/EditAddressPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AddressPage />} />
                <Route path="/edit" element={<EditAddressPage />} />
            </Routes>
        </Router>
    );
}

export default App;
