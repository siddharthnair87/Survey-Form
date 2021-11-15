import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import twitter from "../../images/Twitter.png";
import linkedin from "../../images/LinkedIn.png";
import facebook from "../../images/Facebook.png";
import instagram from "../../images/Instagram.png";
import youtube from "../../images/Youtube.png";

const Success = ({ graduate_name, cohort }) => {
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography
          variant="h3"
          component="div"
          sx={{ mb: 5, mt: 5 }}
          align="center"
        >
          {`Thank you ${graduate_name.split(" ")[0]},`}
        </Typography>

        <Typography sx={{ margin: "0 1.5em 0.8em 1.5em" }} variant="h5" align="center">
          The information you have provided will be used to improve School of
          Code.
          <br />
        </Typography>

        <Typography sx={{ margin: "0 1.5em 0.8em 1.5em" }} variant="h5" align="center">
          Make sure you follow us on social media
          <br />
        </Typography>


        <Typography align="center" variant="h6">
          <div
            style={{
              marginBottom: "-0.4em",
              display: "flex",
              justifyContent: "center",

            }}
          >
            <a
              style={{ paddingRight: "0.4em" }}
              href="https://www.facebook.com/schoolofcode/"
              alt=""
            >
              <img src={facebook} alt="" />
            </a>

            <a
              style={{ paddingRight: "0.4em" }}
              href="https://twitter.com/theschoolofcode"
              alt=""
            >
              <img src={twitter} alt="" />

            </a>
            <a style={{ paddingRight: "0.4em" }}
              href="https://www.linkedin.com/school/school-of-code/" alt="">
              <img src={linkedin} alt="" />
            </a>


            <a style={{ paddingRight: "0.4em" }} href="https://www.instagram.com/theschoolofcode/" alt="">
              <img src={instagram} alt="" />
            </a>

            <a href="https://www.youtube.com/channel/UCKBzheEKcrqsaJhMV0f_Dmg" alt="">
              <img src={youtube} alt="" />
            </a>


          </div>
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  return (
    <Box sx={{ minWidth: 275, margin: "6em" }}>
      <Card
        variant="outlined"
        style={{
          width: "45%",
          margin: "30px auto",
          height: "600%",
        }}
      >
        {card}
      </Card>
    </Box>
  );
};

export default Success;
