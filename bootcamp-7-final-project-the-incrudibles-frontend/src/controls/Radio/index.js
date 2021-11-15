import { FormControlLabel, FormLabel, Grid, Radio, RadioGroup } from '@mui/material';
import React from 'react';

const RadioControl = ({ formData, setFormData }) => {

    function handleChange(e) {
        if (e.target.value === "true") {
            setFormData({ ...formData, tech_role: true });
        } else {
            setFormData({ ...formData, tech_role: false });
        }
    };

    return (
        <Grid container>
            <Grid item xs={8}>
                <FormLabel component="legend" sx={{ marginTop: "0.5em" }}>
                    Are you currently employed in the Tech sector?
                </FormLabel>
            </Grid>
            <Grid item xs={4} sx={{ display: "flex", justifyContent: "flex-end" }}>
                <RadioGroup row aria-label="tech_role" name="tech_role" value={formData.tech_role} onChange={(e) => handleChange(e)} >
                    <FormControlLabel labelPlacement="end" value={true} control={<Radio />} label="Yes" />
                    <FormControlLabel labelPlacement="end" value={false} control={<Radio />} label="No" />
                </RadioGroup>
            </Grid>
        </Grid>
    );
};

export default RadioControl;



