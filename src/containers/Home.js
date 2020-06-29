import React, { Component } from 'react'
import theme from '../theme'
import {
  ThemeMixinsToolBar,
  StyledContainer,
  StyledMain
} from './styles/StyledHome'

import Header from '../components/Home/Header'
import Content from '../components/Home/Content'

class Home extends Component {
  state = {
    open: { user: false, notif: false },
    anchorEl: { user: null, notif: null },
    value: 0
  }

  handleLogout = () => {
    window.sessionStorage.clear()
    this.props.userActions.logoutRequest()
  }

  handleMenu = (e, type) => {
    this.setState({
      open: { ...this.state.open, [`${type}`]: true },
      anchorEl: { ...this.state.anchorEl, [`${type}`]: e.currentTarget }
    })
  }

  handleClose = type => {
    this.setState({
      open: { ...this.state.open, [`${type}`]: false },
      anchorEl: { ...this.state.anchorEl, [`${type}`]: null }
    })
  }

  render() {
    return (
      <StyledContainer
        maxWidth="lg"
        themespacing={theme.spacing(4)}
        spacing={4}
      >
        <Header
          theme={theme}
          handleLogout={this.handleLogout}
          handleClose={this.handleClose}
          handleMenu={this.handleMenu}
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          user={this.props.user}
        />

        <StyledMain>
          <ThemeMixinsToolBar theme={theme.mixins.toolbar} />
          <Content />
        </StyledMain>
      </StyledContainer>
    )
  }
}

export default Home
