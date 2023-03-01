import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Booking, Overview, Navigation, TestingP } from './pages';
import './App.css';

function App() {
   return (
      <Router>
         <Navigation />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bookings" element={<Booking />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/testing" element={<TestingP />} />
         </Routes>
      </Router>
   );
}

export default App;
