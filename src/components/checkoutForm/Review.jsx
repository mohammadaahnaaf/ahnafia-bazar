import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const styles = makeStyles(() => ({
    font: {
        fontFamily: ['Julius Sans One', 'sans-serif']
    }
}))


function Review({ checkoutToken }) {
    const classes = styles();
    return (
        <div>
            <Typography className={classes.font} variant='h5' gutterBottom>Order Summary</Typography>
            <List disablePadding>
                {checkoutToken.live.line_items.map((product) => (
                    <ListItem style ={{ padding: '10px 0' }} key={product.name}>
                        <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`} />
                        <Typography variant="body2">{product.line_total.formatted_with_symbol}</Typography>
                    </ListItem>
                ))}
                <ListItem style={{ padding: '10px 0' }}>
                    <ListItemText primary='Total' />
                    <Typography className={classes.font} variant='subtitle1' style={{fontWeight: 700 }}>
                        {checkoutToken.live.subtotal.formatted_with_symbol}
                    </Typography>
                </ListItem>
            </List>
        </div>
    )
}

export default Review;
