import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { StylesProvider } from '@material-ui/core/styles'
import * as userActions from '../actions/userActions'
import * as dataActions from '../actions/dataActions'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Auth from './Auth'
import Home from './Home'

const App = props => {
  const username = window.sessionStorage.getItem('user')
  if (username && !props.user.username) {
    props.userActions.authRequestValid({ identifiant: username })
  }
  return (
    <StylesProvider injectFirst>
      <BrowserRouter basename="/">
        <Switch>
          <Route exact path="/">
            <Redirect to="/auth" />
          </Route>
          <Route exact path={'/auth'} component={AuthConnected} />
          {props.user.username || username ? (
            <Route exact path={'/home'} component={HomeConnected} />
          ) : (
            <Redirect to="/" />
          )}
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  )
}

const actionsMapDispatchToProps = dispatch => {
  return {
    userActions: bindActionCreators(userActions, dispatch),
    dataActions: bindActionCreators(dataActions, dispatch)
  }
}

const mapStateToProps = state => {
  const { user, data } = state
  return {
    user,
    data
  }
}

const AuthConnected = connect(mapStateToProps, actionsMapDispatchToProps)(Auth)
const HomeConnected = connect(mapStateToProps, actionsMapDispatchToProps)(Home)

export default connect(mapStateToProps, actionsMapDispatchToProps)(App)
