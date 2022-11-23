import { Typography } from '@material-ui/core';
import React from 'react';
import styles from './styles';

function Footer() {
  const classes = styles();
  return (
    <footer className={classes.footer}>
      <Typography className={classes.text}>
        This Site Is Made By
      </Typography>
      <a className={classes.text} href='www.ahnafyaes.tech'>{' _'}Ahnafia</a>
    </footer>
  )
}

export default Footer;