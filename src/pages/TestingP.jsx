import { useState, React } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Box from "@mui/material/Box";

function TestingP() {
  //const [name, setName] = useState("");
  // const [id, setId] = useState("");
  // const [date, setDate] = useState(null);
  // const [mail, setMail] = useState("");

  //const [bookings, setBookings] = useState("");

  const [booking, setBooking] = useState({
    newName: "",
    newId: "",
  });

  const setNewName = (e) => {
    setBooking((existingValues) => ({
      ...existingValues,
      newName: e.target.value,
    }));
  };
  const setNewId = (e) => {
    setBooking((existingValues) => ({
      ...existingValues,
      newId: e.target.value,
    }));
  };
  console.log(booking);

  //console.log(date.$d.toDateString());

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setBookings({ ...bookings });
  //   console.log(bookings);
  // };

  //const today = new Date();

  // FUNCIÓN PARA CONFIRMAR FECHA
  // const saveInitialDate = () => {
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
            //name="firstName"
            value={booking.newName}
            // onChange={(e) => {
            //   setName(e.target.value);
            // }}
            onChange={setNewName}
          />
          <TextField
            id="outlined-basic"
            label="DNI"
            variant="outlined"
            // name="newId"
            value={booking.newId}
            // onChange={(e) => {
            //   setId(e.target.value);
            // }}
            onChange={setNewId}
          />
          {/* <TextField
            id="outlined-basic"
            label="Mail"
            variant="outlined"
            value={mail}
            onChange={(e) => {
              setMail(e.target.value);
            }}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              inputFormat="DD/MM/YYYY"
              minDate={today}
              label="Inicio Reserva"
              value={date}
              onChange={(newDate) => {
                setDate(newDate);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider> */}
        </Box>
      </div>

      {/* BOTÓN DE CONFIRMAR INPUTS */}
      <div className="sm:flex sm:gap-4">
        <a
          className="m-auto my-4 block cursor-pointer rounded border border-red-800 bg-red-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-red-800 focus:outline-none focus:ring active:text-red-800"
          // onClick={handleSubmit}
        >
          Save Data
        </a>
      </div>
      <div>tu reserva::: {name.firstName}</div>
    </>
  );
}

export default TestingP;
