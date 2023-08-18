import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";
import { PlaceholderStyles } from "~/styles/styles.js";

export const DateFilter = ({ selectedDate, handleDateChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateField"]}>
        <DateField
          label="filter by date"
          size="small"
          value={selectedDate}
          onChange={handleDateChange}
          sx={PlaceholderStyles}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};
