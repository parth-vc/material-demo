import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import DeleteIcon from "@material-ui/icons/Delete";
import StarIcon from "@material-ui/icons/Star";
import FilterListIcon from "@material-ui/icons/FilterList";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { green, yellow, blue } from "@material-ui/core/colors";
import SearchAppBar from "./searchbar";
import Grid from "@material-ui/core/Grid";
// import Grid from "./@material-ui/core/Grid"
const theme = createMuiTheme({
  palette: {
    primary: green,
    textprimary: yellow
  }
});
const Tabletheme = createMuiTheme({
  palette: {
    primary: yellow,
    secondary: blue
  }
});
function createData(name, calories, fat, carbs, protein, ratings, Action) {
  return { name, calories, fat, carbs, protein, ratings, Action };
}
function Image1() {
  return (
    <img
      src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
      width="100"
      alt="Image 1"
    />
  );
}

function Image2() {
  return (
    <img
      src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      width="100"
      alt="Image 1"
    />
  );
}
const useButtonStyles = makeStyles(theme => ({
  root: {
    marginLeft: theme.spacing(5)
  }
}));

function Actions() {
  const classes = useButtonStyles();
  return (
    <div>
      <Button className={classes.root}>Edit</Button>
      <Button className={classes.root}>Delete</Button>
    </div>
  );
}
const rows = [
  createData(1, <Image1 />, "Boots", "trinars in blue", 1500, 4.8),
  createData(2, <Image2 />, "Boots", "trinars in blue", 1500, 4.9),
  createData(3, <Image1 />, "Boots", "trinars in blue", 1500, 5.0),
  createData(4, <Image2 />, "Boots", "trinars in blue", 1400, 4.2),
  createData(5, <Image1 />, "Boots", "trinars in blue", 1010, 3.9),
  createData(6, <Image2 />, "Boots", "trinars in blue", 1500, 4.1),
  createData(7, <Image1 />, "Boots", "trinars in blue", 2500, 4.0),
  createData(8, <Image2 />, "Boots", "trinars in blue", 1400, 4.5),
  createData(9, <Image1 />, "Boots", "trinars in blue", 7000, 4.9),
  createData(10, <Image2 />, "Boots", "trinars in blue", 4000, 2.0),
  createData(11, <Image1 />, "Boots", "trinars in blue", 1500, 3.0),
  createData(12, <Image2 />, "Boots", "trinars in blue", 3700, 4.0),
  createData(13, <Image1 />, "Boots", "trinars in blue", 1300, 4.2)
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

const headCells = [
  { id: "ID", numeric: false, disablePadding: true, label: "ID" },
  { id: "Image", numeric: false, disablePadding: false, label: "Image" },
  { id: "Title", numeric: false, disablePadding: false, label: "Title" },
  { id: "Subtitle", numeric: false, disablePadding: false, label: "Subtitle" },
  { id: "Price", numeric: true, disablePadding: false, label: "Price" },
  { id: "Ratings", numeric: true, disablePadding: false, label: "Ratings" },
  { id: "Actions", numeric: false, disablePadding: false, label: "Action" }
];

function EnhancedTableHead(props) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort
  } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all desserts" }}
          />
        </TableCell>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "left" : "center"}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
};

const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    marginTopn: theme.spacing(2),
    paddingRight: theme.spacing(1)
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85)
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark
        },
  title: {
    flex: "1 1 100%"
  }
}));

const EnhancedTableToolbar = props => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0
      })}
    >
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          className={classes.title}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Product
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired
};

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  btdiv: {
    position: "relative"
  },
  buttonroot: {
    flexGrow: 1,
    position: "static",
    margin: theme.spacing(2),
    flex: "1 1 100%"
  },
  paper: {
    width: "100%",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2)
  },
  papperheader: {
    margin: theme.spacing(3)
    // marginTop:theme.spacing()
  },
  table: {
    minWidth: 750
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1
  }
}));

export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  function Image1() {
    return (
      <img
        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        width="100"
        alt="Image 1"
      />
    );
  }

  function Image2() {
    return (
      <img
        src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        width="100"
        alt="Image 1"
      />
    );
  }
  const useButtonStyles = makeStyles(theme => ({
    root: {
      marginLeft: theme.spacing(2),
      marginTop: theme.spacing(1)
    }
  }));

  function Actions() {
    const classes = useButtonStyles();
    return (
      <div>
        <ThemeProvider theme={theme}>
          <Button variant="contained" color="primary" className={classes.root}>
            EDIT
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.root}
          >
            DELETE
          </Button>
        </ThemeProvider>
      </div>
    );
  }
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = event => {
    setDense(event.target.checked);
  };

  const isSelected = name => selected.indexOf(name) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.papperheader}>
            Products
          </Typography>
          <Grid>
            <div display="flex" className="flex-item" nowrap p={1}>
              <Grid item xs={12} spacing={3}>
                <Button
                  variant="contained"
                  color="primary"
                  p={1}
                  // flexGrow={1}
                  className={classes.buttonroot}
                >
                  CREATE PRODUCT
                </Button>
              </Grid>
              <SearchAppBar />
            </div>
          </Grid>
          <EnhancedTableToolbar numSelected={selected.length} />
          <TableContainer>
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              size={dense ? "small" : "medium"}
              aria-label="enhanced table"
            >
              <EnhancedTableHead
                classes={classes}
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    console.log(row);
                    const isItemSelected = isSelected(row.name);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <ThemeProvider theme={Tabletheme}>
                        <TableRow
                          hover
                          onClick={event => handleClick(event, row.name)}
                          role="checkbox"
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={row.name}
                          selected={isItemSelected}
                        >
                          <TableCell padding="checkbox">
                            <Checkbox
                              checked={isItemSelected}
                              inputProps={{ "aria-labelledby": labelId }}
                            />
                          </TableCell>
                          <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="none"
                          >
                            {row.name}
                          </TableCell>
                          <TableCell align="center">{row.calories}</TableCell>
                          <TableCell align="center">
                            <Typography color="secondary">{row.fat}</Typography>
                          </TableCell>
                          <TableCell align="center">{row.carbs}</TableCell>
                          <TableCell align="center">${row.protein}</TableCell>
                          <TableCell align="center">
                            <Typography color="primary">
                              {row.ratings}
                              <StarIcon color="primary" />
                            </Typography>
                          </TableCell>
                          <TableCell align="center">
                            {" "}
                            <Actions />{" "}
                          </TableCell>
                        </TableRow>
                      </ThemeProvider>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
        <FormControlLabel
          control={<Switch checked={dense} onChange={handleChangeDense} />}
          label="Dense padding"
        />
      </div>
    </ThemeProvider>
  );
}
