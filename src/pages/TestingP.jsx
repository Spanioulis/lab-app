import { useState, React } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function TestingP() {
  const [value, setValue] = useState(null);
  const [dateList, setDatelist] = useState();

  const today = new Date();

  const saveInitialDate = () => {
    let datePicked = value.$d.toDateString();
    setDatelist(datePicked);
  };

  return (
    <>
      <div className="m-auto mt-16 block text-center">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            inputFormat="DD/MM/YYYY"
            minDate={today}
            label="Inicio Reserva"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </div>
      <div className="sm:flex sm:gap-4">
        <a
          className="m-auto my-4 block cursor-pointer rounded border border-red-800 bg-red-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-red-800 focus:outline-none focus:ring active:text-red-800"
          onClick={saveInitialDate}
        >
          Save Date & Time
        </a>
      </div>
      <div>{dateList}</div>
    </>
  );
}

export default TestingP;
