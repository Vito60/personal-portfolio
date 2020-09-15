import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import LinkIcon from '@material-ui/icons/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export default function ProjectCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader style={{color: 'white'}} title={props.data.title}/>
      <CardMedia className={classes.media} image={props.data.image} title={props.data.title}/>
      <CardContent>
        <Typography variant="body2" component="p" style={{color: 'white'}}>
          {props.data.description}
        </Typography>
      </CardContent>
      <CardActions style={{alignItems: "center", justifyContent: "center"}}>
        <IconButton aria-label="add to favorites">
          <a target='_blank' href={props.data.repoLink}>
            <GitHubIcon style={{color: 'white'}}/>
          </a>
        </IconButton>
        <IconButton aria-label="share">
          <a target='_blank' href={props.data.liveLink}>
            <LinkIcon style={{color: 'white'}}/>
          </a>
        </IconButton>
      </CardActions>
    </Card>
  );
}