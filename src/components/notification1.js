import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import AddShoppingCartOutlinedIcon from "@material-ui/icons/AddShoppingCartOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  }
}));
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
export default function NotificatopnBar() {
  const classes = useStyles();
  return (
    <div className={classes.grow}>
      <AppBar color="transparent" position="static">
        <Toolbar>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Link color="inherit" href="/" onClick={handleClick}>
              E-Commerce
            </Link>
            <Link
              color="inherit"
              // href="/getting-started/installation/"
              // onClick={handleClick}
            >
              Product
            </Link>
            {/* <Typography color="textPrimary">Breadcrumb</Typography> */}
          </Breadcrumbs>
          <div className={classes.grow} />
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="secondary">
              <ModeCommentOutlinedIcon />
            </Badge>
          </IconButton>
          <IconButton aria-label="show 17 new notifications" color="inherit">
            <Badge color="secondary">
              <AddShoppingCartOutlinedIcon />
            </Badge>
          </IconButton>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge color="secondary">
              <StarBorderOutlinedIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
