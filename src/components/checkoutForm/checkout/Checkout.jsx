import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

import { commerce } from '../../../lib/commerce';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import styles from './styles';

const steps = ['Shipping address', 'Payment details'];

const Checkout = ({ cart, onCaptureCheckout, order, error }) => {
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [shippingData, setShippingData] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const classes = styles();
  const history = useHistory();

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  useEffect(() => {
    if (cart.id) {
      const generateToken = async () => {
        try {
          const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });

          setCheckoutToken(token);
        } catch (error) {
          if (activeStep !== steps.length) history.push('/');
        }
      };

      generateToken();
    }
  }, [cart]);

  const test = (data) => {
    setShippingData(data);

    nextStep();
  };

  const timeout = () => {
    setTimeout(() => {
      setIsFinished(true)
    }, 3500);
  }

  let Confirmation = () => (order.customer ? (
    <div>
      <div>
        <Typography className={classes.font} variant="h5">Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}!</Typography>
        <Divider className={classes.divider} />
        <Typography className={classes.font} variant="subtitle2">Order ref: {order.customer_reference}</Typography>
      </div>
      <br />
      <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
    </div>
  ) : isFinished ? (
    <div>
     <div>
       <Typography className={classes.font} variant="h5">Thank you for your purchase.</Typography>
       <Divider className={classes.divider} />
     </div>
    <br />
    <Button className={classes.font} component={Link} variant="outlined" type="button" to="/">Back to home</Button>
  </div>
  ) : (
    <div className={classes.spinner}>
      <CircularProgress />
    </div>
  ));

  if (error) {
    Confirmation = () => (
      <div>
        <Typography className={classes.font} variant="h5">Error: {error}</Typography>
        <br />
        <Button className={classes.font} component={Link} variant="outlined" type="button" to="/">Back to home</Button>
      </div>
    );
  }

  const Form = () => (activeStep === 0
    ? <AddressForm checkoutToken={checkoutToken} nextStep={nextStep} setShippingData={setShippingData} test={test} />
    : <PaymentForm checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} shippingData={shippingData} onCaptureCheckout={onCaptureCheckout} timeout={timeout} />);

  return (
    <Grid container className={classes.main}><Grid item>
    <div className={classes.main}>
      <CssBaseline />
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography className={classes.font} variant="h4" align="center">Checkout</Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step className={classes.font} key={label}>
                <StepLabel className={classes.font}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
        </Paper>
      </main>
    </div>
  </Grid> </Grid>
 );
};

export default Checkout;