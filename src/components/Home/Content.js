import React from 'react'
import theme from '../../theme'
import {
  ThemeMixinsToolBar,
  StyledMain
} from '../../containers/styles/StyledHome'
import HeadLines from './HeadLines'
import Search from './Search'

const DefaultContent = props => (
  <StyledMain>
    <ThemeMixinsToolBar theme={theme.mixins.toolbar} />
    <Search {...props} dataType={'articlesSearch'} />
    {props.articles && <HeadLines {...props} dataType={'articles'} />}
  </StyledMain>
)

export default DefaultContent
