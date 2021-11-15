import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const ServiceControl = ({ formData, handleChange }) => {
  return (
    <div>
      <FormControl fullWidth margin="normal">
        <InputLabel id="length_of_service">Length of Service</InputLabel>
        <Select
          labelId="length_of_service"
          id="length_of_service"
          value={formData.length_of_service}
          label="Length of Service"
          onChange={handleChange("length_of_service")}
        >
          <MenuItem value="0-3 months">0-3 months</MenuItem>
          <MenuItem value="3-6 months">3-6 months</MenuItem>
          <MenuItem value="6-12 months">6-12 months</MenuItem>
          <MenuItem value="12-18 months">12-18 months</MenuItem>
          <MenuItem value="18-24 months">18-24 months</MenuItem>
          <MenuItem value=" > 24 months">Greater than 24 months</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default ServiceControl;
