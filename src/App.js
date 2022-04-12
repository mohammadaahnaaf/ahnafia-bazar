import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Appbar, Header, About, Products, Cart, Checkout, Footer } from './components';
import { commerce } from './lib/commerce';
import styles from './styles';

const App = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const classes = styles();

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <Router>
      <div className={classes.main}>
        <CssBaseline />
        <Appbar totalItems={cart.total_items} handleDrawerToggle={handleDrawerToggle} />

        <Switch>

          <Route exact path="/">
            <Grid container direction="column" justifyContent="center" alignItems="stretch">
              <Grid iitem>
                <Header />
              </Grid>
              <Grid item>
                <Products products={products} onAddToCart={handleAddToCart} handleUpdateCartQty />
              </Grid>
            </Grid>
          </Route>

          <Route exact path="/cart">
            <Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />
          </Route>
          <Route path="/checkout" exact>
            <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />
          </Route>
        
        </Switch>

        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        
      </div>

      <Footer />

    </Router>
  );
};

export default App;