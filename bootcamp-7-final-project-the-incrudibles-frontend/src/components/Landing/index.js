import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, Grid } from "@mui/material";
import chris from "../../images/Chris.jpeg";

const Landing = ({ nextStep, graduate_name, cohort }) => {
  const first_name = graduate_name.split(" ")[0];

  const card = (
    <>
      <Grid container style={{ justifyContent: "center" }}>
        <Grid item xs={4} sx={{ padding: "1.75em 0 2em 2em" }}>
          <Avatar
            alt=""
            src={chris}
            sx={{
              marginTop: "2.2em",
              marginLeft: "1em",
              width: "10em",
              height: "10em",
            }}
          />
        </Grid>
        <Grid item xs={8}>
          <CardContent>
            <Typography
              variant="h3"
              sx={{ margin: "0.5em 0 0 0" }}

            >
              {`Hello ${first_name},`}
            </Typography>
            <Typography
              variant="h6"
              sx={{ width: "24.5em", margin: "1em auto" }}
            >
              {`Bootcamp ${cohort} may have ended but your journey with the School Of Code continues.`}
            </Typography>
            <Typography
              sx={{ width: "24.5em", margin: "1em auto" }}
              variant="h6"
            >
              Tell us a little about your career in Tech so we can make the next
              Bootcamp even better!
              <br />
            </Typography>
          </CardContent>
        </Grid>
        <CardActions style={{ marginTop: "-1.5em" }}>
          <Button
            sx={{ marginBottom: "1.5em" }}
            variant="contained"
            onClick={nextStep}
            size="large"

          >
            Begin
          </Button>
        </CardActions>
      </Grid>
    </>
  );

  return (
    <Box>
      <Card style={{ width: "50em", margin: "2.5em auto" }}>{card}</Card>
    </Box>
  );
};

export default Landing;
