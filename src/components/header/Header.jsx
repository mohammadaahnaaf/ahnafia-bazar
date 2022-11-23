import React from 'react';
import { Box, Grid, Hidden, Typography } from '@material-ui/core';
import styles from './styles';


function Header() {
    const classes = styles();

    return (
        <header>
            <Grid className={classes.root}>
                <Hidden only={['sm', 'xs', 'md']}>
                    <Typography variant='h2' className={classes.header}>Nation's Largest and Fastest Online Bazar.</Typography>
                    <Typography variant='h2' className={classes.offer}>Get your offers today.</Typography>
                </Hidden>
                <Hidden only={['lg', 'xl']}>
                    <Box className={classes.small}>
                        <Typography variant='h5' className={classes.header}>Nation's Largest and Fastest Online Bazar.</Typography>
                        <Typography variant='h5' className={classes.offer}>Get your offers today.</Typography>
                    </Box>
                </Hidden>
            </Grid>
        </header>
    )
}

export default Header;
