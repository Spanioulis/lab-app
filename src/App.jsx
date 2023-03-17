import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Booking, BookingList, Overview, Navigation } from './pages';
import './App.css';

function App() {
   return (
      <Router>
         <Navigation />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bookings" element={<Booking />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/booking-list" element={<BookingList />} />
         </Routes>
      </Router>
   );
}

export default App;
