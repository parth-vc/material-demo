import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),
    // minWidth: 275,
    minHeight: 300
  },
  bullet: {
    display: "inline-block",
    margin: "7px 5px",
    transform: "scale(1.5)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginTop: 12,
    marginBottom: 12
  }
}));

export default function Widget1() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Support Traker"
      />
      <CardContent>
        <Typography variant="h3" component="subtitle1">
          543
        </Typography>
        <Typography
          display="inline"
          variant="subtitle2"
          className={classes.pos}
          color="textSecondary"
        >
          Ti..
        </Typography>
        <br />
        <br />
        <Typography
          display="inline"
          variant="subtitle2"
          className={classes.pos}
          color="textSecondary"
        >
          New Tickets &nbsp;
        </Typography>
        <Grid>
          <Grid content item sm={4}>
            <Typography className={classes.paper}>item</Typography>
          </Grid>
          <Grid item sm={4}>
            <Typography className={classes.paper}>item</Typography>
          </Grid>
          <Grid item sm={4}>
            <Typography className={classes.paper}>item</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
