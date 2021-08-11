import React from 'react';
import { Typography, Grid, Card, CardActions, CardContent, CardMedia, IconButton } from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/IndeterminateCheckBoxOutlined';
import AddIcon from '@material-ui/icons/AddBoxOutlined';
import RemoveCartIcon from '@material-ui/icons/RemoveShoppingCartOutlined';
import styles from './styles';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const classes = styles();

  const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);

  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);
  
  return (
    <Card>
      <CardMedia image={item.media.source} alt={item.name} className={classes.media} />
      <CardContent className={classes.cardContent}>
        <Typography className={classes.font} variant="h6">{item.name}</Typography>
        <Typography className={classes.font} color='secondary' variant="h6">{item.line_total.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Grid container className={classes.buttons}>
            <Grid item>
              <IconButton>
                <RemoveIcon type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)} />
              </IconButton>
            </Grid>
            <Grid item>
               <Typography className={classes.font}>&nbsp;{item.quantity}&nbsp;</Typography>
            </Grid>
            <Grid item>
               <IconButton>
                 <AddIcon type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)} />
               </IconButton>
            </Grid>
          </Grid>
          <Grid container alignItems="flex-end" justifyContent="flex-end">
              <Grid item>
                <IconButton>
                  <RemoveCartIcon variant="contained" type="button" color="secondary" onClick={() => handleRemoveFromCart(item.id)}>Remove</RemoveCartIcon>
                </IconButton>
              </Grid>
          </Grid>
        
      </CardActions>
    </Card>
  );
};

export default CartItem;