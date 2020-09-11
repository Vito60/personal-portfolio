import React from "react";
import Pdf from "./Pdf";
import { Box, Tooltip, IconButton } from "@material-ui/core";
import { GetApp } from "@material-ui/icons";
import resumePdf from "../data/resume.pdf";
import resumeImg from '../images/ResumeImage.png';
import {Grid} from '@material-ui/core'

const Resume = () => {
   return (
    <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        mt='10px'
        // style={{ minHeight: '100vh' }}
    >
           <img src={resumeImg} width='70%' height='70%' alt="resume" />
           <IconButton size="medium" href={resumePdf}>
                  <GetApp style={{color: 'tan'}} fontSize="large"></GetApp>
               </IconButton>
       </Grid>
    
   );
};
export default Resume;
