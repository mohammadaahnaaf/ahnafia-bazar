import React, { useState } from 'react';
import { AppBar, Hidden, InputBase, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assests/images/logo.png'
import styles from './styles';

const Appbar = ({ totalItems }) => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const classes = styles();
  const location = useLocation();

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const renderMobileMenu = (
    <Menu anchorEl={mobileMoreAnchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={mobileMenuId} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={isMobileMenuOpen} onClose={handleMobileMenuClose}>
      <MenuItem>
        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
          <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
            <img src={logo} alt="ahnafia logo" height="30px" className={classes.image} /> Ahnafia Bazar
          </Typography>
          {/* <Hidden only={['sm', 'xs', 'md']}>
          <Typography component={Link} variant='h6' className={classes.about} to='/about'>About</Typography>
          </Hidden> */}
          <div className={classes.grow} />
          <Hidden only={['sm', 'xs', 'md']}>
          <div className={classes.search}>
             <div className={classes.searchIcon}>
                <SearchIcon />
             </div>
             <InputBase
              placeholder="Find items"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onSubmit={''}
            />
          </div>
          </Hidden>

          {location.pathname === '/' && (
          <div className={classes.button}>
            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
          )}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
};

export default Appbar;