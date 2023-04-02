import { Box, Container, Grid, Typography } from '@mui/material'
import './App.css'
import InputAmount from "./Components/InputAmount";
import SelectCurrency from "./Components/SelectCurrency";
import ConvertCurrency from "./Components/ConvertCurrency";
import { useContext, useEffect, useState } from 'react';
import { CurrencyContext } from './context/CurrencyContext';
import axios from 'axios';

function App() {
  const {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    firstAmount,
    setFirstAmount
  } = useContext(CurrencyContext);

  const [resultCurrency, setResultCurrency] = useState(0);
  const codeFromCurrency = fromCurrency.split(" ")[1];
  const codeToCurrency = toCurrency.split(" ")[1];

  useEffect(() => {
    if (firstAmount) {
      axios.get('https://api.freecurrencyapi.com/v1/latest', {
        params: {
          apikey: "NirUDtoni5Mg666xbmALKgLrPcUZBnuLYwnTmXMT",
          base_currency: codeFromCurrency,
          currencies: codeToCurrency,
        }
      })
        .then((response) => setResultCurrency(response.data.data[codeToCurrency]))
        .catch((error) => console.log(error))
    }
  }, [firstAmount]);


  const boxStyle = {
    backgroundColor: "#ffff",
    marginTop: '10rem',
    textAlign: "center",
    color: "#252525",
    minHeight: "20rem",
    borderRadius: 2,
    padding: "3rem 2rem",
    boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
    position: "relative"
  }

  return (
    <Container maxWidth="md" sx={boxStyle}>
      <Typography variant='h5' sx={{ marginTop: "2rem", marginBottom: "4rem" }}>
        Stay Ahead with Accurate Conversions
      </Typography>
      <Grid container spacing={5}>
        <InputAmount />
        <SelectCurrency value={fromCurrency} setValue={setFromCurrency} label="From" />
        <ConvertCurrency />
        <SelectCurrency value={toCurrency} setValue={setToCurrency} label="To" />
      </Grid>
      {firstAmount ?
        (
          <Box sx={{ textAlign: "left", marginTop: "1rem" }}>
            <Typography>{firstAmount} {fromCurrency} = </Typography>
            <Typography variant='h5' sx={{ marginTop: "5px", fontWeight: "bold" }}>{resultCurrency * firstAmount} {toCurrency} </Typography>
          </Box>
        ) : ""
      }
    </Container>
  )
}

export default App
