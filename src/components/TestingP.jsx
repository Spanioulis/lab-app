import { useState, React } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Overview from "../pages/Overview";
import BookingList from "../pages/BookingList";
import { InputLabel } from "@mui/material";

function TestingP() {
  const [confirmation, setConfirmation] = useState();
  const [bookings, setBookings] = useState([]);
  const [booking, setBooking] = useState({
    newName: "",
    newId: "",
    newMail: "",
    newLab: "",
  });
  const [date, setDate] = useState(null);

  const labs = [
    { id: "Lab-1", name: "Laboratorio 1" },
    { id: "Lab-2", name: "Laboratorio 2" },
    { id: "Lab-3", name: "Laboratorio 3" },
    { id: "Lab-4", name: "Laboratorio 4" },
    { id: "Lab-5", name: "Laboratorio 5" },
  ];

  const handleChange = (event) => {
    setBooking({
      ...booking,
      [event.target.name]: event.target.value,
    });
  };

  const addBooking = (e) => {
    e.preventDefault();
    console.log(booking.newName);
    console.log(date.$d);
    setBookings((bookings) => [...bookings, { booking, date }]);
    setConfirmation(
      `Enhorabuena ${
        booking.newName
      }, tu reserva ha sido confirmada para el día ${date.$d.toDateString()} en el laboratorio ${
        booking.newLab
      }`
    );
    setBooking({
      newName: "",
      newId: "",
      newMail: "",
      newLab: "",
    });
    setDate(null);
  };

  console.log(bookings);

  const today = new Date();

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
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Lab</InputLabel>
              <Select
                id="demo-simple-select-label"
                label="Lab"
                variant="outlined"
                name="newLab"
                value={booking.newLab}
                onChange={handleChange}
              >
                {labs.map((element) => {
                  return (
                    <MenuItem value={element.id} key={element.id}>
                      {element.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </LocalizationProvider>
        </Box>
      </div>

      {/* BOTÓN PARA CONFIRMAR INPUTS */}
      <div className="sm:flex sm:gap-4">
        <a
          className="m-auto my-4 block cursor-pointer rounded border border-red-800 bg-red-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-red-800 focus:outline-none focus:ring active:text-red-800"
          onClick={addBooking}
        >
          Save Data
        </a>
      </div>
      <Overview props={confirmation} />
      <BookingList bookings={bookings} />
    </>
  );
}

export default TestingP;
