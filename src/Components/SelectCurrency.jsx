import { Autocomplete, Grid, Skeleton, TextField } from '@mui/material'
import React from 'react'
import useAxios from '../hooks/useAxios'

const SelectCurrency = ({ value, setValue, label }) => {
    const [data, loading, error] = useAxios('https://restcountries.com/v3.1/all');
    const filteredData = data.filter(items => "currencies" in items)
    const dataCountries = filteredData.map(item => {
        return `${item.flag} ${Object.keys(item.currencies)} - ${item.name.common}`
    })
    if (loading) {
        return (
            <Grid item xs={12} md={3}>
                <Skeleton variant="rounded" height={60} />
            </Grid>
        )
    }
    if (error) {
        return ("Something Went Wrong")
    }
    return (
        <Grid item xs={12} md={3}>
            <Autocomplete
                value={value}
                options={dataCountries}
                onChange={(event, value) => {
                    setValue(value)
                }}
                disableClearable
                renderInput={(params) => (
                    <TextField {...params} label={label} />
                )
                }
            />
        </Grid >
    )
}

export default SelectCurrency