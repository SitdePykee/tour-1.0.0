import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={destination}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );
}

const destination = [
  "Đồ Sơn",
  "Hạ Long",
  "Cát Bà",
  "TP. Hồ Chí Minh",
  "Đà Nẵng",
  "Phú Quốc",
  "Côn Đảo",
];
