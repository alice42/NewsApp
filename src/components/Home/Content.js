import React from 'react'
import { Grid } from '@material-ui/core'
import { StyledPaper } from './styles/StyledContent'

const Content = props => {
  const url = window.location.href
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <StyledPaper>A</StyledPaper>
      </Grid>
    </Grid>
  )
}

export default Content
