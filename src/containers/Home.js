import React, { Component } from 'react'
import theme from '../theme'
import {
  ThemeMixinsToolBar,
  StyledContainer,
  StyledMain
} from './styles/StyledHome'

import Header from '../components/Home/Header'
import Content from '../components/Home/Content'
import Search from '../components/Home/Search'

class Home extends Component {
  state = {
    open: { user: false, notif: false },
    anchorEl: { user: null, notif: null },
    value: 0,
    search: '',
    page: 1
  }

  componentDidMount() {
    if (!this.props.data.articles) {
      this.props.dataActions.dataRequest()
    }
    if (this.props.history.location.search) {
      const query = new URLSearchParams(this.props.location.search)
      const search = query.get('search')
      const page = query.get('page') || 1
      this.setState({ search, page })
      this.props.dataActions.search(search, page)
    }
  }

  handleHideArticle = articleToHide => {
    console.log('articleToHide', articleToHide)
  }

  handleReadArticle = articleToRead => {
    console.log('articleToRead', articleToRead)
  }

  handleLogout = () => {
    window.sessionStorage.clear()
    this.props.userActions.logoutRequest()
    this.props.history.push({
      pathname: `/`
    })
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

  handleSubmitSearch = () => {
    const { search } = this.state
    if (search) {
      this.props.history.push({
        search: `?search=${search}`
      })
      this.props.dataActions.search(search)
    }
  }

  handleChange = event => {
    const value = event.target.value
    this.setState({
      search: value
    })
  }

  handleChangePage = (event, value) => {
    this.setState({
      page: value
    })
    const { search } = this.state
    if (search) {
      this.props.history.push({
        search: `?search=${search}&page=${value}`
      })
      this.props.dataActions.search(search, value)
    }
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
          <Search
            page={this.state.page}
            search={this.state.search}
            history={this.props.history}
            articlesSearch={this.props.data.articlesSearch}
            totalArticlesSearch={this.props.data.totalArticlesSearch}
            handleHideArticle={this.handleHideArticle}
            handleChange={this.handleChange}
            handleChangePage={this.handleChangePage}
            handleSubmitSearch={this.handleSubmitSearch}
          />
          {this.props.data.articles && (
            <Content
              articles={this.props.data.articles}
              handleHideArticle={this.handleHideArticle}
            />
          )}
        </StyledMain>
      </StyledContainer>
    )
  }
}

export default Home
