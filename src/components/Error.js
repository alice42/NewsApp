import React from 'react'
import { Grid } from '@material-ui/core'
import { StyledPaper } from './Home/styles/StyledContent'

const Error = ({ message }) => {
  return <div style={{ color: 'red' }}>{message}</div>
}

export default Error
