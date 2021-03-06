import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles(theme => ({
  cardroot: {}
}));

function CardItem() {
  const classes = useStyles();

  return (
    <Card className={classes.cardroot}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/image/shoes1"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
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
