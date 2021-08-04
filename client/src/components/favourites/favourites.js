import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Placeholder, Button } from 'semantic-ui-react'
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    arrows: {
        justifyContent: 'center'
    }
  }));

export default function MediaControlCard() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card>
      <div className={classes.root}>
      <Grid container spacing={12}>

        <Grid className={classes.arrows} item xs={2}>
            <Box
                display="flex"
                alignItems="center"
                bgcolor="background.paper"
                sx={{ height: 185 }}
            >
                <IconButton aria-label="previous">
                        {theme.direction === 'rtl' ? <KeyboardArrowRightIcon /> : <KeyboardArrowLeftIcon />}
                </IconButton>
            </Box>
            
        </Grid>

        <Grid item xs={8}>
            <Placeholder style={{ height: 200}}>
                <Placeholder.Image />
            </Placeholder>
            <Button primary fluid>Click Here</Button>
        </Grid>

        <Grid item xs={2}>
            <Box
                display="flex"
                alignItems="center"
                bgcolor="background.paper"
                sx={{ height: 185 }}
            >
                <IconButton aria-label="next">
                    {theme.direction === 'rtl' ? <KeyboardArrowLeftIcon /> : <KeyboardArrowRightIcon />}
                </IconButton>
            </Box>
        </Grid>
      </Grid>

        <div>

        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image="/static/images/cards/live-from-space.jpg"
        title="Live from space album cover"
      />
    </Card>
  );
}