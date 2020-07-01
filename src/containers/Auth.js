import React, { Component } from 'react'
import theme from '../theme'
import { TextField, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import {
  StyledContainer,
  StyledAvatar,
  StyledFormContainer,
  StyledButton
} from './styles/StyledAuth'
import Error from '../components/Error'

class Auth extends Component {
  state = {
    identifiant: '',
    password: ''
  }

  handleSubmit = () => {
    const { identifiant, password } = this.state
    if (identifiant === 'user' && password === 'user') {
      window.sessionStorage.setItem('user', identifiant)
      this.props.userActions.authRequestValid({ identifiant, password })
      this.props.history.push({
        pathname: `/home`
      })
    } else this.props.userActions.authRequestError('wrong username or password')
  }

  handleChange = event => {
    const { target } = event
    const value = event.target.value
    const { name } = target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <StyledContainer maxWidth="xs" themespacing={theme.spacing(8)}>
        <StyledAvatar
          themespacing={theme.spacing(1)}
          color={theme.palette.blues.Twilight}
        >
          <LockOutlinedIcon />
        </StyledAvatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <StyledFormContainer themespacing={theme.spacing(1)}>
          <TextField
            type="text"
            name="identifiant"
            id="identifiant"
            placeholder="identifiant"
            value={this.state.identifiant}
            onChange={e => {
              this.handleChange(e)
            }}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoComplete="identifiant"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            placeholder="password"
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={this.state.password}
            onChange={e => {
              this.handleChange(e)
            }}
          />
          <StyledButton
            type="submit"
            fullWidth
            palette={theme.palette}
            themespacing={theme.spacing(3, 0, 2)}
            onClick={() => this.handleSubmit()}
          >
            Sign In
          </StyledButton>
        </StyledFormContainer>
        {this.props.user.error && <Error message={this.props.user.error} />}
      </StyledContainer>
    )
  }
}

export default Auth
