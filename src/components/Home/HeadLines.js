import React from 'react'
import { Grid } from '@material-ui/core'
import ArticleCard from './ArticleCard'
import {
  StyledPaper,
  StyledCardContainer,
  StyledTitle
} from './styles/StyledContent'
import HeadLinesControls from './HeadLinesControls'
import TotalResults from './TotalResults'
import Error from '../Error'

const HeadLines = props => {
  if (props.errorHeadline)
    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <StyledPaper>
            <Error message={props.errorHeadline} />
          </StyledPaper>
        </Grid>
      </Grid>
    )
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <StyledPaper>
          <StyledTitle>
            <h2>Top Headlines</h2>
            <TotalResults results={props.totalarticles} />
          </StyledTitle>
          <HeadLinesControls
            handleChangeCountry={props.handleChangeCountry}
            handleChangeDate={props.handleChangeDate}
            country={props.country}
            date={props.date}
          />
          <StyledCardContainer>
            {props.articles.map((article, index) => (
              <ArticleCard
                dataType={props.dataType}
                key={`article_${index}`}
                article={article}
                handleHideArticle={props.handleHideArticle}
                handleReadArticle={props.handleReadArticle}
              />
            ))}
          </StyledCardContainer>
        </StyledPaper>
      </Grid>
    </Grid>
  )
}

export default HeadLines
