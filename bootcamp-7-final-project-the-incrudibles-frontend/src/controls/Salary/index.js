import { FormLabel, Grid, Slider } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

/*
import MuiInput from "@mui/material/Input";
import { styled } from "@mui/material/styles";
*/

const marks = [
  {
    value: 0,
    label: "£0",
  },

  {
    value: 20000,
    label: "£20,000",
  },
  {
    value: 40000,
    label: "£40,000",
  },
  {
    value: 60000,
    label: "£60,000",
  },
  {
    value: 80000,
    label: "£80,000",
  },
  {
    value: 100000,
    label: "£100,000 +",
  },
];
/*
const Input = styled(MuiInput)`
  width: 42px;
`;
*/

const SalaryControl = ({ formData, setFormData }) => {
  // const [value, setValue] = useState(30);

  const handleSliderChange = (event, newValue) => {
    setFormData({ ...formData, current_salary: newValue });
  };

  /*
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      current_salary:
        event.target.value === "" ? "" : Number(event.target.value),
    });
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };
  */

  return (
    <div style={{ marginTop: "1em", marginBottom: "0.5em" }}>


      <Box>
        <FormLabel component="legend">Salary </FormLabel>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <Slider
              valueLabelDisplay="on"
              value={
                typeof formData.current_salary === "number"
                  ? formData.current_salary
                  : 0
              }
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
              marks={marks}
              min={0}
              max={100000}
              step={1000}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default SalaryControl;
