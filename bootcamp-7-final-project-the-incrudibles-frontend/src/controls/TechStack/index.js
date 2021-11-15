import { TextField } from '@mui/material';
import React from 'react';

const TechStack = ({ formData, setFormData }) => {

    function handleChange(e) {
        let result = (e.target.value).split(" ")
        setFormData({ ...formData, current_tech_stack: result });
    }

    return (
        <div>
            <TextField
                autoComplete="off"
                id="standard-basic"
                label="Current Tech Stack?"
                onChange={(e) => handleChange(e)}
                defaultValue={formData.current_tech_stack}
                margin="normal"
                variant="outlined"
                fullWidth
            />
        </div>
    );
};

export default TechStack;