import React, { useState, useEffect } from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from './CustomTextField';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

import { commerce } from '../../lib/commerce';

const styles = makeStyles(() => ({
    font: {
        fontSize: '18px',
        fontFamily: ['Julius Sans One', 'sans-serif']
    },
    fonts: {
        fontFamily: ['Julius Sans One', 'sans-serif']
    },
}));

function AddressForm({ checkoutToken, test }) {
    const methods = useForm();
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivision, setShippingSubdivision] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');

    const classes = styles();

    const countries = Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name }));
    const subdivisions = Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name }));
    const options = shippingOptions.map((sO) => ({ id: sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})` }))


    const fetchShippingCountries = async (checkoutTokenId) => {
        const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);

        setShippingCountries(countries);
        setShippingCountry(Object.keys(countries)[0]);
    }

    const fetchSubdivisions = async (countryCode) => {
        const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);

        setShippingSubdivisions(subdivisions);
        setShippingSubdivision(Object.keys(subdivisions)[0]);
    };

    const fetchShippingOptions = async (checkoutTokenId, country, region = null) => {
        const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region });

        setShippingOptions(options);
        setShippingOption(options[0].id);
    };

    useEffect(() => {
        fetchShippingCountries(checkoutToken.id)
    }, [checkoutToken]);

    useEffect(() => {
        if (shippingCountry) fetchSubdivisions(shippingCountry);
    }, [shippingCountry]);

    useEffect(() => {
        if (shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
    }, [shippingSubdivision, checkoutToken, shippingCountry]);

    return (
        <div>
            <Typography variant='h6' className={classes.fonts} align='center' gutterBottom>Shipping Address</Typography>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit((data) => test({ ...data, shippingCountry, shippingSubdivision, setShippingOption }))}>
                    <Grid container spacing={3}>
                        <FormInput name='first name' label={<Typography className={classes.font}>First Name</Typography>} />
                        <FormInput name='last name' label={<Typography className={classes.font}>Last Name</Typography>} />
                        <FormInput name='address1' label={<Typography className={classes.font}>Address</Typography>} />
                        <FormInput name='email' label={<Typography className={classes.font}>Email</Typography>} />
                        <FormInput name='city' label={<Typography className={classes.font}>City</Typography>} />
                        <FormInput name='zip' label={<Typography className={classes.font}>ZIP / postal code</Typography>} />
                        <Grid item xs={12} sm={6}>
                            <InputLabel className={classes.fonts}>Shipping Country</InputLabel>
                            <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                                {countries.map((country) => (
                                    <MenuItem key={country.id} value={country.id}>
                                        {country.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel className={classes.fonts}>Shipping Subdivision</InputLabel>
                            <Select value={shippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)}>
                                {subdivisions.map((item) => (
                                    <MenuItem key={item.id} value={item.id}>
                                        {item.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel className={classes.fonts}>Shipping Options</InputLabel>
                            <Select value={shippingOption} fullWidth onChange={(e) => setShippingOption(e.target.value)}>
                                {options.map((option) => (
                                    <MenuItem key={option.id} value={option.id}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                    </Grid>
                    <div style={{ marginTop: '3%', display: 'flex', justifyContent: 'space-between' }}>
                        <Button color='secondary' component={Link} to='/cart' variant='outlined'><Typography className={classes.font}>Back</Typography></Button>
                        <Button variant='outlined' color='primary' type='submit'><Typography className={classes.font}>Next</Typography></Button>
                    </div>
                </form>
            </FormProvider>
        </div>
    )
}

export default AddressForm
