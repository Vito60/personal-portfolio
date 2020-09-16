import React from 'react'
import {makeStyles, withStyles} from '@material-ui/core/styles'
import {TextField, Typography, Button, Grid, Box} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'

const useStyles = makeStyles(theme=>({
    form: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute'
    },
    button: {
        marginTop: '1rem',
        color: 'tan',
        borderColor: '#ff5050'
    }
}))

const InputField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'tan'
        },
        '& label': {
            color: 'tan'
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#ff5050'
            },
            '&:hover fieldset': {
                borderColor: '#ff5050'
            },
            '&.Mui-focused fieldset': {
                borderColor: '#ff5050'
            }
        }
    },
})(TextField);

export default function Contact() {

    const classes = useStyles()

    return (
        <Box component='div'>
            <Grid container justify='center'>
                <Box component='form' className={classes.form}>
                    <Typography variant='h5' style={{color: 'tan', textAlign: 'center', textTransform: 'uppercase'}}>
                        Contact
                    </Typography>
                    <InputField fullWidth={true} label='Name' variant='outlined' margin='dense' size='medium' inputProps={{style:{ color: 'white'}}} />
                    <br/>
                    <InputField fullWidth={true} label='Email' variant='outlined' margin='dense' size='medium' inputProps={{style:{ color: 'white'}}} />
                    <br/>
                    <InputField fullWidth={true} label='Company Name' variant='outlined' margin='dense' size='medium' inputProps={{style:{ color: 'white'}}} />
                    <br/>
                    <InputField fullWidth={true} label='Content' variant='outlined' margin='dense' size='medium' inputProps={{style:{ color: 'white'}}}/>
                    <br/>
                    <Button className={classes.button} variant='outlined' fullWidth={true} endIcon={<SendIcon/>}>
                        Send
                    </Button>
                </Box>
            </Grid>
        </Box>
    )
}

