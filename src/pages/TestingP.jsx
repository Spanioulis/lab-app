import * as React from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

export default function TestingP() {
  const today = new Date();
  const [value, setValue] = React.useState(dayjs(today));
  const [value2, setValue2] = React.useState(dayjs(today));

  console.log(value);
  console.log(value2);

  return (
    <div className="m-auto mt-16 block text-center">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          renderInput={(props) => <TextField {...props} />}
          label="Inicio Reserva"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        />

        <DateTimePicker
          renderInput={(props) => <TextField {...props} />}
          label="Fin de reserva"
          value2={value2}
          onChange={(newValue2) => {
            setValue2(newValue2);
          }}
        />
      </LocalizationProvider>
    </div>
  );
}
