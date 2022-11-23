import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import CartItem from './cartitem/CartItem';
import styles from './styles';

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  const classes = styles();

  const handleEmptyCart = () => onEmptyCart();

  const renderEmptyCart = () => (
      <div className={classes.emptyCart}>
    <Typography className={classes.font} variant="subtitle1">OH NO! Your cart is empty right now!
      <Link className={classes.link} to="/"> Let's adding some!</Link>
    </Typography>
    </div>
  );

  if (!cart.line_items) return 'Loading';

  const renderCart = () => (
    <div>
      <Grid container spacing={3}>
        {cart.line_items.map((lineItem) => (
          <Grid item xs={12} sm={6} md={4} key={lineItem.id}>
            <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography className={classes.font} variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
        <div className={classes.buttons}>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty cart</Button>
          <Button className={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">Checkout</Button>
        </div>
      </div>
    </div>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>Shopping Cart</Typography>
      { !cart.line_items.length ? renderEmptyCart() : renderCart() }
    </Container>
  );
};

export default Cart;