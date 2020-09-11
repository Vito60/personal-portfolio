import React from "react";
import resumeImg from '../images/ResumeImage.png';

import { Paper, Box } from "@material-ui/core";

function Pdf() {
   return (
      <Paper elevation={20}>
               <img src={resumeImg} width='70%' height='70%' alt="resume" />
      </Paper>
   );
}

export default Pdf;