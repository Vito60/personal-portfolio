import React from 'react'
import {Grid} from '@material-ui/core'
import projectData from '../data/projectData.js'
import ProjectCard from './ProjectCard'

export default function ProjectsGrid() {
    return ( 
        <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        >     
        {projectData.map(element => {
            return (
                <Grid xl={6} md={6} sm={12} xs={12} item align='center'>
                <ProjectCard data={element}/>
                </Grid>
            )
        })}
        </Grid>
    )
}
