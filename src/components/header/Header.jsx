import React from 'react';
import { Typography } from '@material-ui/core';
import styles from './styles';


function Header() {
    const classes = styles();
    
    return (
        <header className={classes.root}>
            <Typography className={classes.header}>Nation's Largest and Fastest Online Bazar.</Typography>
            <Typography className={classes.offer}>Get your offers today.</Typography>               
        </header>
    )
}

export default Header;
