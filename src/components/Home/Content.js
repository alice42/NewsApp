import React from 'react'
import { Grid } from '@material-ui/core'
import Article from './Article'
import { StyledPaper } from './styles/StyledContent'

const Content = props => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <StyledPaper>
          <h2>Top 20 Headlines</h2>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
          >
            {props.articles.map((article, index) => (
              <Article
                key={`article_${index}`}
                article={article}
                handleHideArticle={props.handleHideArticle}
              />
            ))}
          </div>
        </StyledPaper>
      </Grid>
    </Grid>
  )
}

export default Content
