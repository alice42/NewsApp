import React from 'react'
import theme from '../theme'
import { StyledContainer } from './styles/StyledHome'

import Header from '../components/Home/Header'
import DefaultContent from '../components/Home/Content'

const Home = props => {
  const [anchorEl, setAnchorEl] = React.useState({ user: null, notif: null })
  const [open, setOpen] = React.useState({ user: false, notif: null })
  const [search, setSearch] = React.useState('')
  const [page, setPage] = React.useState(1)
  const [country, setCountry] = React.useState('fr')

  React.useEffect(() => {
    if (!props.data.articles) props.dataActions.dataRequest(country)
  }, [country])

  React.useEffect(
    () => {
      const query = new URLSearchParams(props.location.search)
      const search = query.get('search')
      if (props.history.location.search && search) {
        const page = query.get('page') || 1
        setSearch(search)
        setPage(page)
        props.dataActions.search(search, page)
      }
    },
    [search, setSearch],
    [page, setPage]
  )

  const handleHideArticle = (articleToHide, dataType) => {
    const filteredResults = props.data[`${dataType}`].filter(article => {
      return article.url !== articleToHide.url
    })
    props.dataActions.updateData(filteredResults, dataType)
  }

  const handleLogout = () => {
    window.sessionStorage.clear()
    props.userActions.logoutRequest()
    props.history.push({
      pathname: `/`
    })
  }

  const handleMenu = (e, type) => {
    setAnchorEl({ ...anchorEl, [`${type}`]: e.currentTarget })
    setOpen({ ...open, [`${type}`]: true })
  }

  const handleClose = type => {
    setAnchorEl({ ...anchorEl, [`${type}`]: null })
    setOpen({ ...open, [`${type}`]: false })
  }

  const handleSubmitSearch = () => {
    if (search) {
      props.history.push({
        search: `?search=${search}`
      })
      props.dataActions.search(search)
    }
  }

  const handleChange = event => {
    setSearch(event.target.value)
  }

  const handleChangePage = (event, value) => {
    setPage(value)
    if (search) {
      props.history.push({
        search: `?search=${search}&page=${value}`
      })
      props.dataActions.search(search, value)
    }
  }

  const handleChangeCountry = e => {
    props.dataActions.dataRequest(e.target.value)
    setCountry(e.target.value)
  }
  return (
    <StyledContainer maxWidth="lg" themespacing={theme.spacing(4)} spacing={4}>
      <Header
        theme={theme}
        handleLogout={handleLogout}
        handleClose={handleClose}
        handleMenu={handleMenu}
        open={open}
        anchorEl={anchorEl}
        user={props.user}
      />
      <DefaultContent
        country={country}
        page={page}
        search={search}
        history={props.history}
        articles={props.data.articles}
        articlesSearch={props.data.articlesSearch}
        totalarticlesSearch={props.data.totalarticlesSearch}
        handleHideArticle={handleHideArticle}
        handleChange={handleChange}
        handleChangePage={handleChangePage}
        handleSubmitSearch={handleSubmitSearch}
        handleChangeCountry={handleChangeCountry}
      />
    </StyledContainer>
  )
}

export default Home
