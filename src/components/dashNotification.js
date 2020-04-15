import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";

const useStyles = makeStyles(theme => ({
  root:{
    marginLeft:theme.spacing(1)
  },
  header:{
marginRight:theme.spacing(1)
  },
  grow: {
    flexGrow: 1
  }
}));
const date = new Date().toDateString();
// console.log(date)
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
export default function DashBoardNotificatopnBar() {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles();
  return (
    <div className={classes.grow}>
      <AppBar color="transparent" position="static">
        <Toolbar>
          <Typography className={classes.header} variant="h5">Dashboard</Typography>
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
            <Tab label="Active" />
            <Tab label="Disabled" />
            <Tab label="Active" />
          </Tabs>
          <div className={classes.grow} />
          <CalendarTodayIcon />
          <Typography>{date}</Typography>
          <Button variant="contained" color="secondary" className={classes.root}>
            Latest Report
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
