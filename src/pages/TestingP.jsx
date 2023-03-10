import { useState, React } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Box from "@mui/material/Box";

function TestingP() {
  const [bookings, setBookings] = useState([]);
  const [booking, setBooking] = useState({
    newName: "",
    newId: "",
    newMail: "",
  });
  const [date, setDate] = useState(null);

  const handleChange = (event) => {
    setBooking({
      ...booking,
      [event.target.name]: event.target.value,
    });
  };

  const addBooking = (e) => {
    e.preventDefault();
    setBookings((bookings) => [...bookings, { booking, date }]);
    setBooking({
      newName: "",
      newId: "",
      newMail: "",
    });
    setDate(null);
  };

  console.log(bookings);

  const today = new Date();

  // FUNCIÓN PARA CONFIRMAR FECHA
  // const saveInitialDate = (event) => {
  //   let datePicked = value.$d.toDateString();
  //   setDatelist(datePicked);
  // };

  return (
    <>
      <div className="m-auto mt-16 block text-center">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Nombre"
            variant="outlined"
            name="newName"
            value={booking.newName}
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="DNI"
            variant="outlined"
            name="newId"
            value={booking.newId}
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Mail"
            variant="outlined"
            name="newMail"
            value={booking.newMail}
            onChange={handleChange}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              inputFormat="DD/MM/YYYY"
              minDate={today}
              label="Inicio Reserva"
              //name="newDate"
              value={date}
              onChange={(newDate) => {
                setDate(newDate);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Box>
      </div>

      {/* BOTÓN PARA CONFIRMAR INPUTS */}
      <div className="sm:flex sm:gap-4">
        <a
          className="m-auto my-4 block cursor-pointer rounded border border-red-800 bg-red-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-red-800 focus:outline-none focus:ring active:text-red-800"
          onClick={addBooking}
        >
          Save Data
        </a>
      </div>
    </>
  );
}

export default TestingP;
