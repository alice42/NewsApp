import React from 'react'
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

const Auth = props => {
  const [user, setUser] = React.useState({ identifiant: '', password: '' })

  const handleSubmit = () => {
    if (user.identifiant === 'user' && user.password === 'user') {
      window.sessionStorage.setItem('user', user.identifiant)
      props.userActions.authRequestValid({
        identifiant: user.identifiant,
        password: user.password
      })
      props.history.push({
        pathname: `/home`
      })
    } else props.userActions.authRequestError('wrong username or password')
  }

  const handleChange = event => {
    const { target } = event
    const value = event.target.value
    const { name } = target
    setUser({ ...user, [name]: value })
  }

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
          value={user.identifiant}
          onChange={e => {
            handleChange(e)
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
          value={user.password}
          onChange={e => {
            handleChange(e)
          }}
        />
        <StyledButton
          type="submit"
          fullWidth
          palette={theme.palette}
          themespacing={theme.spacing(3, 0, 2)}
          onClick={() => handleSubmit()}
        >
          Sign In
        </StyledButton>
      </StyledFormContainer>
      {props.user.error && <Error message={props.user.error} />}
    </StyledContainer>
  )
}

export default Auth
