import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Booking, Overview } from './pages';
import './App.css';

function App() {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bookings" element={<Booking />} />
            <Route path="/overview" element={<Overview />} />
         </Routes>
      </Router>
   );
}

export default App;
