
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import StarIcon from '@material-ui/icons/Star';
import {yellow} from "@material-ui/core/colors";
import { createMuiTheme ,ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    
    secondary:yellow
    }
});
const useStyles = makeStyles(theme => ({
  text: {
    margin:theme.spacing(1.5)
  },
  grow: {
    flexGrow: 1
  }
}));

function CardItem() {
  const classes = useStyles();

  return (
    <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Shoes"
          height="200"
          image="https://cdn.improb.com/wp-content/uploads/2018/03/best-waterproof-running-shoes-for-Men-1.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Shoes
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Trainer's White
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
<ThemeProvider theme={theme}>
        <Typography className={classes.text} color="primary" justifyContent="flex-end">
          $ 80
        </Typography>
        <div className={classes.grow} />

        <Typography className={classes.text} color="secondary" justifyContent="flex-end" >4.8 <StarIcon color="secondary" /></Typography>
</ThemeProvider>
      </CardActions>
    </Card>
  );
}
export default function Product() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} lg={3}>
        <CardItem />
      </Grid>
      <Grid item xs={12} sm={12} lg={3}>
        <CardItem />
      </Grid>
      <Grid item xs={12} sm={12} lg={3}>
        <CardItem />
      </Grid>
      <Grid item xs={12} sm={12} lg={3}>
        <CardItem />
      </Grid>
      <Grid item xs={12} sm={12} lg={3}>
        <CardItem />
      </Grid>
      <Grid item xs={12} sm={12} lg={3}>
        <CardItem />
      </Grid>
      <Grid item xs={12} sm={12} lg={3}>
        <CardItem />
      </Grid>
      <Grid item xs={12} sm={12} lg={3}>
        <CardItem />
      </Grid>
    </Grid>
  );
}

