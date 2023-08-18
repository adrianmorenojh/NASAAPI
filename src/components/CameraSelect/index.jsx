import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { PlaceholderStyles } from "~/styles/styles.js";

export const CameraSelect = ({ camera, handleCameraSelect }) => {
  return (
    <div className="camera-filters">
      <FormControl sx={PlaceholderStyles} size="small">
        <InputLabel id="demo-select-small-label">Camera</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={camera}
          label="camera"
          onChange={handleCameraSelect}
          sx={{
            borderColor: "white",
            color: "white",
          }}
        >
          <MenuItem value={"all"}>all</MenuItem>
          <MenuItem value={"FHAZ"}>Front Hazard Avoidance Camera</MenuItem>
          <MenuItem value={"RHAZ"}>Rear Hazard Avoidance Camera</MenuItem>
          <MenuItem value={"MAST"}>Mast Camera</MenuItem>
          <MenuItem value={"CHEMCAM"}>Chemistry and Camera Complex</MenuItem>
          <MenuItem value={"MAHLI"}>Mars Hand Lens Imager</MenuItem>
          <MenuItem value={"MARDI"}>Mars Descent Imager</MenuItem>
          <MenuItem value={"NAVCAM"}>Navigation Camera</MenuItem>
          <MenuItem value={"PANCAM"}>Panoramic Camera</MenuItem>
          <MenuItem value={"MINITES"}>
            Miniature Thermal Emission Spectrometer (Mini-TES)
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
