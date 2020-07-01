import React from 'react'
import theme from '../../theme'
import {
  ThemeMixinsToolBar,
  StyledMain
} from '../../containers/styles/StyledHome'
import HeadLines from './HeadLines'
import Search from './Search'

const DefaultContent = props => {
  return (
    <StyledMain>
      <ThemeMixinsToolBar theme={theme.mixins.toolbar} />
      <Search
        page={props.page}
        search={props.search}
        history={props.history}
        articlesSearch={props.articlesSearch}
        totalarticlesSearch={props.totalarticlesSearch}
        handleHideArticle={props.handleHideArticle}
        handleReadArticle={props.handleReadArticle}
        handleChange={props.handleChange}
        handleChangePage={props.handleChangePage}
        handleSubmitSearch={props.handleSubmitSearch}
        dataType={'articlesSearch'}
      />
      {props.articles && (
        <HeadLines
          country={props.country}
          articles={props.articles}
          handleHideArticle={props.handleHideArticle}
          handleReadArticle={props.handleReadArticle}
          dataType={'articles'}
          handleChangeCountry={props.handleChangeCountry}
        />
      )}
    </StyledMain>
  )
}

export default DefaultContent
