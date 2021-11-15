import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import RadioControl from "../../controls/Radio";
import SalaryControl from "../../controls/Salary";
import TextControl from "../../controls/TextControl";
import ServiceControl from "../../controls/Service";
import Satisfaction from "../../controls/Satisfaction";
import DateSelector from "../../controls/DateSelector";
import { Card } from "@mui/material";
import AutocompleteInput from "../../controls/AutocompleteInput";

export default function CareerDetails({ nextStep, id, first_job_date }) {
  const initialFormData = {
    graduate_uuid: id,
    tech_role: null,
    current_salary: 0,
    current_employer: null,
    length_of_service: "",
    current_position: null,
    current_tech_stack: [],
    job_satisfaction: 1,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [startDate, setStartDate] = useState(first_job_date);

  let submitDisabled = true;
  if (formData.tech_role === false) {
    submitDisabled = false;
  } else if (
    formData.tech_role === true &&
    formData.current_salary !== 0 &&
    formData.current_employer !== null &&
    formData.length_of_service !== "" &&
    formData.current_position !== null &&
    formData.current_tech_stack !== [] &&
    formData.job_satisfaction !== null
  ) {
    submitDisabled = false;
  }

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  async function onSubmit() {
    console.log(formData);

    const res = await fetch(
      `https://incrudibles.herokuapp.com/graduates/${formData.graduate_uuid}/responses`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    );
    console.log("Response data sent to repsonse table", res);

    const patch = await fetch(
      `https://incrudibles.herokuapp.com/graduates/${formData.graduate_uuid}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ first_job_date: startDate }),
      }
    );
    console.log("Start date  sent to gradutes table", patch);


    nextStep();
  }

  const card = (
    <div style={{ width: "33em", margin: "2em auto", height: "30%" }}>
      <Box sx={{ flexGrow: 1, marginBottom: "0.5em" }}>
        <AppBar position="static">
          <Toolbar>
            <Typography align="center" variant="h6" sx={{ flexGrow: 1 }}>
              Beyond Bootcamp Survey
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Box>
        <br />
        <RadioControl formData={formData} setFormData={setFormData} />
        {formData.tech_role ? (
          <div>
            {!first_job_date && (
              <DateSelector startDate={startDate} setStartDate={setStartDate} />
            )}
            <SalaryControl formData={formData} setFormData={setFormData} />
            <TextControl
              label="Current Employer"
              handleChange={handleChange}
              field="current_employer"
              formData={formData}
            />
            <ServiceControl formData={formData} handleChange={handleChange} />
            <TextControl
              label="Current Role"
              handleChange={handleChange}
              field="current_position"
              formData={formData}
            />
            <AutocompleteInput formData={formData} setFormData={setFormData} />
            {/* <TechStack formData={formData} setFormData={setFormData} /> */}
            <div style={{ margin: "12px 0px" }}></div>
            <Satisfaction formData={formData} setFormData={setFormData} />
          </div>
        ) : (
          <div></div>
        )}
      </Box>
      <div
        style={{
          marginTop: "1em",
          marginBottom: "-0.4em",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          disabled={submitDisabled}
          onClick={onSubmit}
        >
          Submit
        </Button>
      </div>
    </div>
  );

  return (
    <Box>
      <Card style={{ width: "39em", margin: "2.5em auto" }}>{card}</Card>
    </Box>
  );
}
