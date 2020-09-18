import React, {useState} from 'react'
import Logo from '../images/Logo.png'
import Footer from './Footer'
import { makeStyles } from '@material-ui/core/styles';
import MobileRightMenuSlider from '@material-ui/core/Drawer'
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    ListItemIcon,
    Avatar,
    List,
    Typography,
    Box
} from '@material-ui/core';
import {
    MenuOpen,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from '@material-ui/icons'

import { Link } from "react-router-dom";

// CSS STYLES
const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: '100%',
        backgroundColor: 'transparent',
        height: '100%'
    },
    BackdropProps: {
        background: 'transparent'
    },
    avatar: {
        display: 'block',
        margin: '0.5rem auto',
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color: 'tan'
    }
}));

const menuItems = [
    {
        listIcon: <Home/>,
        listText: 'Home',
        route: '/'
    },
    {
        listIcon: <AssignmentInd/>,
        listText: 'Resume',
        route: '/resume'
    },
    {
        listIcon: <Apps/>,
        listText: 'Projects',
        route: '/projects'
    },
    {
        listIcon: <ContactMail/>,
        listText: 'Contact',
        route: '/contact'
    }
]

export default function NavBar() {

    const [state, setState] = useState({
        open: false,
        clicked: false
    })

    const toggleSlider = open => () => {
        setState({...state, open: open, clicked: open})
    }
    
    const classes = useStyles()

    const sideList = () => (
        <Box className={classes.menuSliderContainer} component='div' onClick={toggleSlider(false)}>
            <Avatar variant="square" className={classes.avatar} src={Logo} alt='Logo'/>
            <List>
                {menuItems.map((listItem, key)=>(
                        <ListItem button key={key} component={Link} to={listItem.route}>
                            <ListItemIcon className={classes.listItem}>
                                {listItem.listIcon}
                            </ListItemIcon>
                            <ListItemText className={classes.listItem} primary={listItem.listText}/>
                        </ListItem>
                ))}
            </List>
        </Box>
    )

    return (
        <>
        <Box component='nav'>
            <AppBar position='static' elevation={0} style={{background: 'transparent'}}>
                <Toolbar>
                    <Typography variant='h5' style={{color: 'tan', flex: 1}}>
                        Software Engineer
                    </Typography>
                    <IconButton onClick={toggleSlider(true)}>
                        <MenuOpen fontSize="large" style={{color: state.clicked? 'transparent':'tan'}}/>
                    </IconButton>
                    <MobileRightMenuSlider anchor='right' open={state.open} onClose={toggleSlider(false)}>
                        {sideList()}
                        <Footer/>
                    </MobileRightMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}
