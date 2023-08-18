import TextField from "@mui/material/TextField";
import { PlaceholderStyles } from "~/styles/styles.js";

export const SunFilter = ({ numberValue, handleNumberChange }) => {
  return (
    <TextField
      id="outlined-number"
      label="filter by sun"
      type="number"
      size="small"
      InputLabelProps={{
        shrink: true,
      }}
      sx={PlaceholderStyles}
      value={numberValue}
      onChange={handleNumberChange}
    />
  );
};
