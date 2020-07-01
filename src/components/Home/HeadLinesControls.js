import React from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import countries from '../../country.json'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}))

const HeadLinesControls = props => {
  const classes = useStyles()
  return (
    <>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="country-select-outlined-label">Country</InputLabel>
        <Select
          labelId="country-select-outlined-label"
          id="country-select-outlined"
          value={props.country}
          onChange={e => props.handleChangeCountry(e)}
          label="country"
        >
          {Object.entries(countries).map((country, index) => (
            <MenuItem key={`country_${index}`} value={country[0]}>
              {country[1]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="date-select-outlined-label">
          Publication Date
        </InputLabel>
        <Select
          labelId="date-select-outlined-label"
          id="date-select-outlined"
          value={props.date}
          onChange={e => props.handleChangeDate(e)}
          label="Publication Date"
        >
          <MenuItem value={'recent'}>Recent to former publications</MenuItem>
          <MenuItem value={'former'}>Former to recent publications</MenuItem>
        </Select>
      </FormControl>
    </>
  )
}

export default HeadLinesControls
