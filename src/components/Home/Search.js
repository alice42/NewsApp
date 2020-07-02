import React from 'react'
import { TextField } from '@material-ui/core'
import ArticleCard from './ArticleCard'
import { Grid } from '@material-ui/core'
import {
  StyledPaper,
  StyledSearch,
  StyledCardContainer,
  StyledTitle
} from './styles/StyledContent'
import Pagination from '@material-ui/lab/Pagination'
import TotalResults from './TotalResults'
import Error from '../Error'

const Search = props => {
  if (props.errorSearch)
    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <StyledPaper>
            <Error message={props.errorSearch} />
          </StyledPaper>
        </Grid>
      </Grid>
    )
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <StyledPaper>
          <StyledTitle>
            <h2>Find Articles</h2>
            <TotalResults results={props.totalarticlesSearch} />
          </StyledTitle>
          <TextField
            type="text"
            name="search"
            id="search"
            placeholder="search"
            value={props.search}
            onChange={e => {
              props.handleChange(e)
            }}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoComplete="search"
            autoFocus
            onKeyPress={e => {
              if (e.key === 'Enter') {
                props.handleSubmitSearch()
              }
            }}
          />
          {props.articlesSearch && (
            <StyledSearch>
              <StyledCardContainer>
                {props.articlesSearch.map((article, index) => {
                  return (
                    <ArticleCard
                      dataType={props.dataType}
                      key={`article_${index}`}
                      article={article}
                      handleHideArticle={props.handleHideArticle}
                      handleReadArticle={props.handleReadArticle}
                    />
                  )
                })}
              </StyledCardContainer>
              {props.totalarticlesSearch > 0 && (
                <Pagination
                  page={Number(props.page)}
                  count={
                    Math.round(props.totalarticlesSearch / 20) >= 5
                      ? 5
                      : Math.ceil(props.totalarticlesSearch / 20)
                  }
                  onChange={props.handleChangePage}
                />
              )}
            </StyledSearch>
          )}
        </StyledPaper>
      </Grid>
    </Grid>
  )
}

export default Search
