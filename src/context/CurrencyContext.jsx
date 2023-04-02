import React, { useState } from 'react'
import { createContext } from 'react'

export const CurrencyContext = createContext();

const CurrencyProvider = ({ children }) => {

    const [fromCurrency, setFromCurrency] = useState("🇺🇸 USD - United States");
    const [toCurrency, setToCurrency] = useState('🇬🇧 GBP - United Kingdom');
    const [firstAmount, setFirstAmount] = useState(0);

    const value = {
        fromCurrency,
        setFromCurrency,
        toCurrency,
        setToCurrency,
        firstAmount,
        setFirstAmount
    }
    return (
        <CurrencyContext.Provider value={value}>
            {children}
        </CurrencyContext.Provider>
    )
}

export default CurrencyProvider