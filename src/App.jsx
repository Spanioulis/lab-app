import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Booking, Overview, Navigation } from "./pages";
import "./App.css";
import TestingP from "./pages/TestingP";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function App() {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Navigation />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bookings" element={<Booking />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/testingp" element={<TestingP />} />
          </Routes>
        </Router>
      </LocalizationProvider>
    </>
  );
}

export default App;
