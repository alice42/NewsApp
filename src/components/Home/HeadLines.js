import React from 'react'
import { Grid } from '@material-ui/core'
import ArticleCard from './ArticleCard'
import { StyledPaper } from './styles/StyledContent'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import theme from '../../theme'
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

const Content = props => {
  const classes = useStyles()
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <StyledPaper>
          <h2>Top 20 Headlines</h2>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Country
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={props.country}
              onChange={e => props.handleChangeCountry(e)}
              label="country"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {Object.entries(countries).map((country, index) => (
                <MenuItem key={`country_${index}`} value={country[0]}>
                  {country[1]}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
          >
            {props.articles.map((article, index) => (
              <ArticleCard
                dataType={props.dataType}
                key={`article_${index}`}
                article={article}
                handleHideArticle={props.handleHideArticle}
                handleReadArticle={props.handleReadArticle}
              />
            ))}
          </div>
        </StyledPaper>
      </Grid>
    </Grid>
  )
}

export default Content
