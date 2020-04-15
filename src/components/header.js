import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Avatar from "@material-ui/core/Avatar";
import HomeIcon from "@material-ui/icons/Home";
import DescriptionIcon from "@material-ui/icons/Description";
import AppsIcon from "@material-ui/icons/Apps";
import FilterNoneIcon from "@material-ui/icons/FilterNone";
import GridOnIcon from "@material-ui/icons/GridOn";
import BarChartRoundedIcon from '@material-ui/icons/BarChartRounded';
import MapRoundedIcon from '@material-ui/icons/MapRounded';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import DashBoardNotificatopnBar from './dashNotifification'
import DashboardCharts from './widgets/mainwidget'
import NotificatopnBar from './notification'
import Filter from './filter'
import Product from './products'
import EnhancedTable from './table'
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";

const drawerWidth = 250;

const useStyles = makeStyles(theme => ({
  root:{
margin:theme.spacing(2)
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  username:{
    marginLeft:theme.spacing(1)
  },
  Avatar:{
    marginLeft:theme.spacing(1)
  },
  grow: {
    flexGrow: 1
  },
  bullet: {
    // display: 'inline-block',
    marginRight: theme.spacing(1.5),
    transform: 'scale(5)',
  },
  nested: {
    paddingLeft: theme.spacing(5)
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerContainer: {
    overflow: "auto"
  }
}));
export default function Header() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [open, setOpen] = React.useState(false);
  const [useropen, setUseropen] = React.useState(false);
  const handleUser = () => {
    setUseropen(!useropen);
  };
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
<Router>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            React Material Full Admin
          </Typography>

          <div className={classes.grow} />
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="secondary">
              <EmailOutlinedIcon />
            </Badge>
          </IconButton>
          <IconButton aria-label="show 17 new notifications" color="inherit">
            <Badge badgeContent={17} color="secondary">
              <NotificationsNoneOutlinedIcon />
            </Badge>
          </IconButton>
          <Avatar className={classes.Avatar} src="/broken-image.jpg" />
          <Typography className={classes.username}>Hi,Robert Cotten</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <Toolbar />

        <div className={classes.drawerContainer}>
          <List className={classes.root}>
          <NavLink to="/Dashboard">
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText style={{ color: "black" }} primary="Dashboard" />
            </ListItem>
            </NavLink>
            <ListItem button onClick={handleClick}>
              <ListItemIcon>
                <ShoppingCartOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Ecommerce" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
              <NavLink to="/Ecommerce/ProductManage">
                <ListItem button className={classes.nested}>
                  
                  <ListItemText>{bull}Product Manage</ListItemText>
                </ListItem>
                </NavLink>
                <NavLink to="/Ecommerce/ProductGrid">
                <ListItem button className={classes.nested}> 
                  <ListItemText>{bull}Product Grid</ListItemText>
                </ListItem>
                </NavLink>
                <ListItem button className={classes.nested}>
                  <ListItemText>{bull}Product Page</ListItemText>
                </ListItem>
              
              </List>
            </Collapse>
            <ListItem button onClick={handleUser}>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="User" />
              {useropen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={useropen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemText>{bull}User List</ListItemText>
                </ListItem>
                <ListItem button className={classes.nested}> 
                  <ListItemText>{bull}User Add</ListItemText>
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemText>{bull}User Edit</ListItemText>
                </ListItem>
              </List>
            </Collapse>
            <ListItem button>
              <ListItemIcon>
                <DescriptionIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
          </List>
          <Divider />
          <Typography className={classes.root}>TEMPLATE</Typography>
          <List className={classes.root}>
            <ListItem button>
            <ListItemIcon>
                 <AppsIcon />
              </ListItemIcon>
             <ListItemText primary="core" />
              </ListItem>

              <ListItem button>
            <ListItemIcon>
                 <GridOnIcon />
              </ListItemIcon>
             <ListItemText primary="Tables" />
              </ListItem>

              <ListItem button>
            <ListItemIcon>
                 <FilterNoneIcon  />
              </ListItemIcon>
             <ListItemText primary="UI Elements" />
              </ListItem>

              <ListItem button>
            <ListItemIcon >
                 <DescriptionOutlinedIcon />
              </ListItemIcon>
             <ListItemText primary="Forms" />
              </ListItem>

              
              <ListItem button>
            <ListItemIcon>
                 <BarChartRoundedIcon />
              </ListItemIcon>
             <ListItemText primary="Charts" />
              </ListItem>

              <ListItem button>
            <ListItemIcon>
                 <MapRoundedIcon />
              </ListItemIcon>
             <ListItemText primary="Maps" />
              </ListItem>
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
          <Toolbar />
          <Route path="/Dashboard">
            <DashBoardNotificatopnBar />
            <DashboardCharts />
          </Route>
          <Route path="/Ecommerce/ProductManage">
            <NotificatopnBar />
            <Filter />
            <Product />
          </Route>
          <Route path="/Ecommerce/ProductGrid">
            <NotificatopnBar />
            <EnhancedTable />
          </Route>
        </main>
      </Router>
    </>
  );
}
