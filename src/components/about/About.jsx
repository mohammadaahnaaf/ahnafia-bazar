import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import styles from './styles';

function About() {
    const classes = styles();
    return (
        <div className={classes.root}>
        <div className={classes.main} container>
            <Grid item>
               <Typography variant='h2' color='secondary' className={classes.title}>About Us</Typography>
            </Grid>
            <Grid item>
               <Typography variant='h2' color='secondary' className={classes.des}>
                 sourcecode available <a href="https://github.com/mohammadaahnaaf/ahnafia-bazar.git">Github</a>
               </Typography>
            </Grid>
        </div>
        </div>
    )
}

export default About;
