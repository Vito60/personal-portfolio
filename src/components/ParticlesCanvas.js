import React from 'react'
import Particles from 'react-particles-js'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles({
    particlesCan: {
        position: 'center'
    }
})

export default function ParticlesCanvas() {

    const classes = useStyles()

    return (
        <div>
            <Particles
            canvasClassName={classes.particlesCan}
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
