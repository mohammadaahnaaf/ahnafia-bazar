import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import styles from './styles';


function Header() {
    const classes = styles();

    return (
        <header>
            <Grid className={classes.root}>
                <Typography variant='h1' className={classes.header}>Nation's Largest and Fastest Online Bazar.</Typography>
                <Typography variant='h1' className={classes.offer}>Get your offers today.</Typography>
            </Grid>
        </header>
    )
}

export default Header;
