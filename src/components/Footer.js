import React from 'react'
import {makeStyles} from '@material-ui/core'
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
    root: {
        '& .MuiBottomNavigationAction-root': {
            minWidth: 0,
            maxWidth: 250
        },
        '& .MuiSvgIcon-root': {
            fill: 'tan',
            '&:hover': {
                fill: 'tan',
                fontSize: '1.8rem'
            }
        }
    }
})

export default function Footer() {

    const classes = useStyles()

    return (
        <BottomNavigation width='auto' style={{background: 'transparent'}}>
            <BottomNavigationAction className={classes.root} style={{padding: 0}} icon={<GitHubIcon/>}/>
            <BottomNavigationAction className={classes.root} style={{padding: 0}} icon={<LinkedInIcon/>}/>
        </BottomNavigation>
    )
}
