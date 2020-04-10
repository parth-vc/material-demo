import React from "react";
import Product from "./components/products";
import Header from "./components/header";
import NotificatopnBar from "./components/notification";
import Filter from "./components/filter";
import EnhancedTable from "./components/table"
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
const useStyles = makeStyles(theme => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing()
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
    <div className={classes.root}>
      <Header />
      <main className={classes.content}>
        <Toolbar />
        <NotificatopnBar />
        <EnhancedTable />
        {/* <Filter />
        <Product /> */}
      </main>
    </div>
  );
}
