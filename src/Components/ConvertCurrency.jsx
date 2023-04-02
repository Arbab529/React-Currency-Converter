import { Button, Grid } from '@mui/material'
import React from 'react'
import { TbArrowsExchange2 } from 'react-icons/tb'
import { useContext } from 'react';
import { CurrencyContext } from '../context/CurrencyContext';

const ConvertCurrency = () => {
    const {
        fromCurrency,
        setFromCurrency,
        toCurrency,
        setToCurrency
    } = useContext(CurrencyContext);

    const handleSwitch = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency)
    }
    return (
        <Grid item xs={12} md="auto" sx={{ borderRadius: 1, height: "100%" }}>
            <Button sx={{ fontSize: 30, color: "black" }} onClick={handleSwitch}><TbArrowsExchange2 /></Button>
        </Grid>
    )
}

export default ConvertCurrency