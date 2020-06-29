import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { StylesProvider } from '@material-ui/core/styles'

import * as userActions from '../actions/userActions'

import Auth from './Auth'
import Home from './Home'

class App extends Component {
  render() {
    const username = window.sessionStorage.getItem('user')
    if (username && !this.props.user.username) {
      this.props.userActions.authRequestValid({ identifiant: username })
    }
    console.log('props', this.props.user)
    return (
      <StylesProvider injectFirst>
        {this.props.user && this.props.user.username ? (
          <HomeConnected />
        ) : (
          <AuthConnected />
        )}
      </StylesProvider>
    )
  }
}

const actionsMapDispatchToProps = dispatch => {
  return {
    userActions: bindActionCreators(userActions, dispatch)
  }
}

const mapStateToProps = state => {
  const { user } = state
  return {
    user
  }
}

const AuthConnected = connect(mapStateToProps, actionsMapDispatchToProps)(Auth)
const HomeConnected = connect(mapStateToProps, actionsMapDispatchToProps)(Home)

export default connect(mapStateToProps, actionsMapDispatchToProps)(App)
