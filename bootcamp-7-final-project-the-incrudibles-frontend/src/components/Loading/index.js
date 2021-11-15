import {
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import twitter from "../../images/Twitter.png";
import linkedin from "../../images/LinkedIn.png";

import React from "react";

const Loading = () => {
  const card = (
    <CardContent>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "2em 0 1em 0",
        }}
      >
        <CircularProgress size="5em" />
      </Grid>
      <Typography align="center" variant="h4" sx={{ margin: "1em 0 0.5em 0" }}>
        Beyond Bootcamp Survey Loading...
      </Typography>

      <Typography
        align="center"
        variant="h6"
        sx={{ margin: "0.5em 0 0.25em 0" }}
      >
        If this page does not load, contact us using the links below.
      </Typography>
      <Typography align="center" variant="h6">
        <div
          style={{
            marginTop: "1em",
            marginBottom: "-0.8em",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <a
            style={{ paddingRight: "0.4em" }}
            href="https://twitter.com/theschoolofcode"
            alt=""
          >
            <img src={twitter} alt="" />
          </a>
          <a href="https://www.linkedin.com/school/school-of-code/" alt="">
            <img src={linkedin} alt="" />
          </a>
        </div>
      </Typography>
    </CardContent>
  );

  return (
    <Box>
      <Card style={{ width: "45em", margin: "2.5em auto" }}>{card}</Card>
    </Box>
  );
};
export default Loading;

/*


      <Box sx={{ flexGrow: 1, bgcolor: "background.paper" }}>

        <Typography
          align="center"
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          Please wait while we draw up a form!
        </Typography>
        <Typography
          align="center"
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          If this is taking too long, your link may be invalid
        </Typography>
        <Typography
          align="center"
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          Plase contact us to resolve this
        </Typography>
      </Box>

    */
