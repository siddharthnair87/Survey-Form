import { TextField } from '@mui/material';
import React from 'react';

const TextControl = ({ label, handleChange, field, formData }) => {
    return (
        <div>
            <TextField
                autoComplete="off"
                id="standard-basic"
                label={label}
                onChange={handleChange(field)}
                defaultValue={formData[field]}
                margin="normal"
                variant="outlined"
                fullWidth
            />

        </div>
    );
};

export default TextControl;