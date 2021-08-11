import { Typography } from '@material-ui/core';
import React from 'react';
import styles from './styles';

function Footer() {
    const classes = styles();
    return (
        <footer className={classes.footer}>
          <Typography className={classes.text}>
            This Site Is Made By Ahnafia
          </Typography>
        </footer>
    )
}

export default Footer;