import React from 'react'
import theme from '../../theme'
import {
  ThemeMixinsToolBar,
  StyledMain
} from '../../containers/styles/StyledHome'
import HeadLines from './HeadLines'
import Search from './Search'

const Content = props => (
  <StyledMain>
    <ThemeMixinsToolBar theme={theme.mixins.toolbar} />
    <Search {...props} dataType={'articlesSearch'} />
    {(props.articles || props.errorHeadline) && (
      <HeadLines {...props} dataType={'articles'} />
    )}
  </StyledMain>
)

export default Content
