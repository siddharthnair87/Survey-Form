import React, { useState } from "react";
import CareerDetails from "../CareerDetails";
import Landing from "../Landing";
import Success from "../Success";

const UserForm = ({ graduateDetails }) => {
  const { id, graduate_name, cohort, first_job_date } = graduateDetails;

  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep(step + 1);
  };

  /*
  const handleCheckboxChange = (input) => (e) => {
    console.log(e.target.checked)
    setFormData({ ...formData, currentTechStack: { ...formData.currentTechStack, [input]: e.target.checked } });
  };
  */

  switch (step) {
    case 0:
      return (
        <Landing nextStep={nextStep} graduate_name={graduate_name} cohort={cohort} />
      );

    case 1:
      return (
        <CareerDetails first_job_date={first_job_date} nextStep={nextStep} id={id} />
      );

    case 2:
      return <Success graduate_name={graduate_name} cohort={cohort} />;
    default:
      console.log("This is a multi-step form built with React.");
  }
};

export default UserForm;
