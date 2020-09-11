import React from 'react'
import NavBar from './NavBar'
import Header from './Header'
import Particles from 'react-particles-js'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles({
    particlesCanvas: {
        position: 'absolute'
    }
})

export default function Home() {

    const classes = useStyles()

    return (
        <div>
            {/* <NavBar/> */}
            {/* <Header/> */}
            <Particles
            canvasClassName={classes.particlesCanvas}
            params={{
                particles: {
                    number:{
                        value: 45,
                        density: {
                            enable: true,
                            value_area: 900
                        }
                    },
                    shape: {
                        type: 'circle',
                        strole: {
                            width: 1,
                        }
                    },
                    size: {
                        value: 3,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 2,
                            size_min: 0.1,
                            sync: true
                        }
                    }
                }
            }}
            />
        </div>
    )
}
