import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Booking, BookingList, Overview, Navigation } from './pages';
import './App.css';

function App() {
   const [bookings, setBookings] = useState([]);

   return (
      <Router>
         <Navigation />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bookings" element={<Booking bookings={bookings} setBookings={setBookings} />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/booking-list" element={<BookingList bookings={bookings} />} />
         </Routes>
      </Router>
   );
}

export default App;
