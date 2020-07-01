import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '10px'
  }
})

const ArticleCard = props => {
  const classes = useStyles()
  return (
    <Card
      className={classes.root}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems: 'strech'
      }}
    >
      <CardMedia
        component="img"
        alt={props.article.urlToImage}
        height="140"
        src={props.article.urlToImage}
        title={props.article.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.article.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.article.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => props.handleHideArticle(props.article, props.dataType)}
        >
          Hide
        </Button>
        <Button
          href={props.article.url}
          target="_blank"
          size="small"
          color="primary"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default ArticleCard
