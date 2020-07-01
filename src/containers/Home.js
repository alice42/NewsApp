import React, { Component } from 'react'
import theme from '../theme'
import { StyledContainer } from './styles/StyledHome'

import Header from '../components/Home/Header'
import DefaultContent from '../components/Home/Content'

class Home extends Component {
  state = {
    open: { user: false, notif: false },
    anchorEl: { user: null, notif: null },
    value: 0,
    search: '',
    page: 1
  }

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search)
    const search = query.get('search')
    if (!this.props.data.articles) {
      this.props.dataActions.dataRequest()
    }
    if (this.props.history.location.search && search) {
      const page = query.get('page') || 1
      this.setState({ search, page })
      this.props.dataActions.search(search, page)
    }
  }

  handleHideArticle = (articleToHide, dataType) => {
    const filteredResults = this.props.data[`${dataType}`].filter(article => {
      return article.url !== articleToHide.url
    })
    this.props.dataActions.updateData(filteredResults, dataType)
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

  handleGoBack = () => {
    this.props.history.goBack()
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
        <DefaultContent
          page={this.state.page}
          search={this.state.search}
          history={this.props.history}
          articlesSearch={this.props.data.articlesSearch}
          totalarticlesSearch={this.props.data.totalarticlesSearch}
          handleHideArticle={this.handleHideArticle}
          handleReadArticle={this.handleReadArticle}
          handleChange={this.handleChange}
          handleChangePage={this.handleChangePage}
          handleSubmitSearch={this.handleSubmitSearch}
          articles={this.props.data.articles}
          handleHideArticle={this.handleHideArticle}
          handleReadArticle={this.handleReadArticle}
        />
      </StyledContainer>
    )
  }
}

export default Home
