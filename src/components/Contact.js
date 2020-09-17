import React, { useState } from "react";
import emailjs from 'emailjs-com'
import {makeStyles, withStyles} from '@material-ui/core/styles'
import {TextField, Typography, Button, Grid, Box} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'

const useStyles = makeStyles(theme=>({
    form: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute',
        width: '80%',
        height: '50%'
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
        },
    }
})(TextField);

export default function Contact() {

    const classes = useStyles()

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [content, setContent] = useState("");
    const NODE_ENV_TEMPLATE_ID = process.env.NODE_ENV_TEMPLATE_ID;
    const NODE_ENV_SERVICE_ID = process.env.NODE_ENV_SERVICE_ID;
    const NODE_ENV_USER_ID = process.env.NODE_ENV_USER_ID;

    const handleSubmit = (contentValue, nameValue, emailValue) => {
        sendEmail({message: contentValue, from_name: nameValue, reply_to: emailValue})
        setName('')
        setEmail('')
        setContent('')
    }
    
    const sendEmail = (variables) => {
        console.log(NODE_ENV_SERVICE_ID, NODE_ENV_TEMPLATE_ID, variables, NODE_ENV_USER_ID)
        debugger
        emailjs.send( NODE_ENV_SERVICE_ID, NODE_ENV_TEMPLATE_ID, variables, NODE_ENV_USER_ID)
        .then(res => {
            console.log('Email successfully sent!', res)
          })
          .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
      }

    return (
        <Box component='div'>
            <Grid container justify='center'>
                <Box component='form' className={classes.form}>
                    <Typography variant='h5' style={{color: 'tan', textAlign: 'center', textTransform: 'uppercase'}}>
                        Contact
                    </Typography>
                    <InputField required type='text' value={name} onChange={e => setName(e.target.value)} fullWidth={true} label='Name' variant='outlined' margin='dense' size='medium' inputProps={{style:{ color: 'white'}}} />
                    <br/>
                    <InputField required type='text' value={email} onChange={e => setEmail(e.target.value)} fullWidth={true} label='Email' variant='outlined' margin='dense' size='medium' inputProps={{style:{ color: 'white'}}} />
                    <br/>
                    <InputField required type='text' value={content} onChange={e => setContent(e.target.value)} multiline rows={6} fullWidth={true} label='Content' variant='outlined' margin='dense' size='medium' inputProps={{ style:{ color: 'white' }}}/>
                    <br/>
                    <Button onClick={() => {handleSubmit(content, name, email)}} className={classes.button} variant='outlined' fullWidth={true} endIcon={<SendIcon/>}>
                        Send
                    </Button>
                </Box>
            </Grid>
        </Box>
    )
}

