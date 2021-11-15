import React from "react";
import { Grid, InputLabel, Rating } from "@mui/material";
import Box from '@mui/material/Box';

const Satisfaction = ({ formData, setFormData }) => {

  function handleChange(e) {
    setFormData({ ...formData, job_satisfaction: Number(e.target.value) });
  };

  return (
    <Grid container sx={{ margin: "1.2em 0 1.2em 0" }}>
      <Grid item xs={8}>
        <InputLabel id="job_satisfaction" sx={{ marginLeft: "0.8em" }}>Job Satisfaction</InputLabel>
      </Grid>
      <Grid item xs={4} sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Box sx={{ '& > legend': { mt: 2 }, }}
        >
          <Rating size="large"
            name="simple-controlled"
            value={formData.job_satisfaction}
            onChange={(e) => handleChange(e)}
            sx={{ marginRight: "0.1em" }}
          />
        </Box>
      </Grid>
    </Grid>

  );
};

export default Satisfaction;
