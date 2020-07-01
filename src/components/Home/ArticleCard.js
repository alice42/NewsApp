import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 'auto'
  }
})

const ArticleCard = props => {
  const classes = useStyles()
  const defaultSrc =
    'https://scienceofstocks.com/wp-content/uploads/2014/10/default-img.gif'
  const addDefaultSrc = ev => {
    ev.target.src = defaultSrc
  }
  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt={props.article.urlToImage}
        height="140"
        onError={addDefaultSrc}
        src={props.article.urlToImage || defaultSrc}
        title={props.article.title}
      />
      <div className={classes.content}>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          style={{ margin: '10px' }}
        >
          {new Date(props.article.publishedAt).toLocaleString()}
        </Typography>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.article.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.article.description}
          </Typography>
        </CardContent>
      </div>
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
