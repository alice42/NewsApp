import React from 'react'
import theme from '../../theme'
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'
import ArticleCard from './ArticleCard'
import { Grid } from '@material-ui/core'
import { StyledPaper } from './styles/StyledContent'
import Pagination from '@material-ui/lab/Pagination'

const Search = props => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <StyledPaper>
          <h2>Find Articles</h2>
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
          />
          <Button
            type="submit"
            fullWidth
            palette={theme.palette}
            themespacing={theme.spacing(3, 0, 2)}
            onClick={() => props.handleSubmitSearch()}
          >
            Go!
          </Button>
          {props.articlesSearch && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              {props.totalarticlesSearch > 0 ? (
                <div>
                  Total Results:{' '}
                  {props.totalarticlesSearch > 100
                    ? 100
                    : props.totalarticlesSearch}
                </div>
              ) : (
                <div> No Results, try something else :)</div>
              )}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center'
                }}
              >
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
              </div>
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
            </div>
          )}
        </StyledPaper>
      </Grid>
    </Grid>
  )
}

export default Search
