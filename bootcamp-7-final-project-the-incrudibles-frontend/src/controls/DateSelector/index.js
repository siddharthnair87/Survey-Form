import TextField from "@mui/material/TextField";
import { FormLabel, Grid } from "@mui/material";

export default function DateSelector({ startDate, setStartDate }) {
  const handleChange = (e) => {
    setStartDate({ first_job_date: e.target.value });
  };

  return (
    <div style={{ marginTop: "1em", marginBottom: "0.5em" }}>
      <Grid container>
        <Grid item xs={7}>
          <FormLabel component="legend" >
            Please let us know when you started <br></br>your first role post-graduation
          </FormLabel>
        </Grid>
        <Grid item xs={5} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <TextField id="date" label="Start date" type="date" defaultValue={startDate} sx={{ width: 220 }} InputLabelProps={{ shrink: true }} onChange={(e) => handleChange(e)} />
        </Grid>
      </Grid>
    </div>

    // <LocalizationProvider dateAdapter={AdapterDateFns}>
    // <Stack spacing={3}>
    //   <DesktopDatePicker
    //     label="Date desktop"
    //     inputFormat="MM/dd/yyyy"
    //     onChange={(e) => handleChange(e)}
    //     renderInput={(params) => <TextField {...params} />}
    //   />
    // </Stack>
    // </LocalizationProvider>
  );
}
