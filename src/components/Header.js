import React from 'react'
import Logo from '../images/Logo.png'
import Typed from 'react-typed'
import {makeStyles} from '@material-ui/core/styles'
import {
    Typography,
    Avatar,
    Grid,
    Box
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    title: {
        color: 'tan'
    },
    subtitle: {
        color: 'tan',
        marginBottome: '3rem'
    },
    typedContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        right: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        textAlign: 'center',
        zIndex: 1
    }
}))

export default function Header() {
    const classes = useStyles()

    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
            <Avatar variant="square" className={classes.avatar} src={Logo} alt={'Logo'}/>
            </Grid>
            <Typography className={classes.title} variant='h4'>
                Randall Williams
            </Typography>
            <br/>
            <Typography className={classes.subtitle} variant='h5'>
                <Typed 
                strings={['React.JS', 'JavaScript', 'Redux', 'SQL', 'Ruby', 'Ruby on Rails']} 
                typeSpeed={40} 
                backSpeed={60}
                loop
                />
            </Typography>
        </Box>
    )
}
