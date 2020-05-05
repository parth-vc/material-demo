import React from "react";
import Product from "./components/products";
import Header from "./components/header";
import NotificatopnBar from "./components/notification";
import Filter from "./components/filter";
import EnhancedTable from "./components/table";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import DashboardCharts from "./components/widgets/mainwidget";
import DashBoardNotificatopnBar from "./components/dashNotifification";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
const useStyles = makeStyles(theme => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(1)
    },
    display: "flex",
    flexGrow: 1
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

export default function Demo() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.root}>
        <Header />

        {/* <main className={classes.content}>
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
        </main> */}
      </div>
    </Router>
  );
}
