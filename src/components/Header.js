import React from 'react'
import codeIcon from '../images/codeIcon.ico'
import {
    Typography,
    Avatar,
    Grid,
    Box
} from '@material-ui/core'

export default function Header() {
    return (
        <Box>
            <Avatar src={codeIcon} alt={'codeIcon'}/>
        </Box>
    )
}
