import React from 'react'
import theme from '../theme'
import { StyledContainer } from './styles/StyledHome'
import countries from '../country.json'
import Header from '../components/Home/Header'
import DefaultContent from '../components/Home/Content'

const Home = props => {
  const [anchorEl, setAnchorEl] = React.useState({ user: null, notif: null })
  const [open, setOpen] = React.useState({ user: false, notif: null })
  const [search, setSearch] = React.useState('')
  const [page, setPage] = React.useState(1)
  const [country, setCountry] = React.useState('fr')
  const [date, setDate] = React.useState('recent')

  React.useEffect(() => {
    if (!props.data.articles) props.dataActions.dataRequest(country)
  }, [country])

  React.useEffect(
    () => {
      const query = new URLSearchParams(props.location.search)
      console.log(props.location.search)
      const search = query.get('search')
      const paramCountry = query.get('country')
      if (
        !props.data.articlesSearch &&
        props.history.location.search &&
        search
      ) {
        const page = query.get('page') || 1
        setSearch(search)
        setPage(page)
        props.dataActions.search(search, page)
      }
      if (paramCountry) {
        const validValue = countries.hasOwnProperty(paramCountry)
          ? paramCountry
          : 'fr'
        setCountry(validValue)
      }
    },
    [search, setSearch],
    [page, setPage],
    [country, setCountry]
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
      const formerCountryParams = country ? `&country=${country}` : ''
      props.history.push({
        search: `?search=${search}${formerCountryParams}`
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
      const formerCountryParams = country ? `&country=${country}` : ''
      props.history.push({
        search: `?search=${search}&page=${value}${formerCountryParams}`
      })
      window.scrollTo(0, 0)
      props.dataActions.search(search, value)
    }
  }

  const handleChangeCountry = e => {
    const query = new URLSearchParams(props.location.search)
    const search = query.get('search')
    const validValue = countries.hasOwnProperty(e.target.value)
      ? e.target.value
      : 'fr'
    props.dataActions.dataRequest(validValue)
    setCountry(validValue)
    const formerSearchParams = search ? `&search=${search}` : ''
    props.history.push({
      search: `?country=${validValue}${formerSearchParams}`
    })
  }

  const handleChangeDate = e => {
    const validValue =
      e.target.value === 'recent' || e.target.value === 'former'
        ? e.target.value
        : 'recent'
    props.dataActions.updateSortDate()
    setDate(validValue)
  }

  return (
    <StyledContainer maxWidth="lg" themespacing={theme.spacing(4)} spacing={4}>
      <Header
        theme={theme}
        open={open}
        anchorEl={anchorEl}
        user={props.user}
        handleLogout={handleLogout}
        handleClose={handleClose}
        handleMenu={handleMenu}
      />
      <DefaultContent
        date={date}
        country={country}
        page={page}
        search={search}
        history={props.history}
        articles={props.data.articles}
        articlesSearch={props.data.articlesSearch}
        totalarticlesSearch={props.data.totalarticlesSearch}
        totalarticles={props.data.totalarticles}
        handleHideArticle={handleHideArticle}
        handleChange={handleChange}
        handleChangePage={handleChangePage}
        handleSubmitSearch={handleSubmitSearch}
        handleChangeCountry={handleChangeCountry}
        handleChangeDate={handleChangeDate}
      />
    </StyledContainer>
  )
}

export default Home
