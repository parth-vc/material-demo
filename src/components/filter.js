import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles(theme => ({
  formControl: {
    flexGrow: 1,
    marginRight: theme.spacing(4),
    marginLeft: theme.spacing(0),
    margin: theme.spacing(2),
    // minWidth: 140
    width: "100%"
  },
  select: {
    // width: "100%"
  },
}));
export default function Filter() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: "",
    name: "hai"
  });
  const handleChange = event => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value
    });
  };
  return (
    <div>
      <Grid container>
        <Grid item className={classes.grow}>
          <Grid container spacing={1} position="absolute">
            <Grid item xs={4} sm={4} md={2} lg={2} xl={2}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">
                  Age
                </InputLabel>
                <Select
                  native
                  value={state.age}
                  onChange={handleChange}
                  label="Age"
                  inputProps={{
                    name: "age",
                    id: "outlined-age-native-simple"
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4} sm={4} md={2} lg={2} xl={2}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">
                  Age
                </InputLabel>
                <Select
                  native
                  value={state.age}
                  onChange={handleChange}
                  label="Age"
                  inputProps={{
                    name: "age",
                    id: "outlined-age-native-simple"
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4} sm={4} md={2} lg={2} xl={2}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">
                  Age
                </InputLabel>
                <Select
                  native
                  value={state.age}
                  onChange={handleChange}
                  label="Age"
                  inputProps={{
                    name: "age",
                    id: "outlined-age-native-simple"
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4} sm={4} md={2} lg={2} xl={2}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">
                  Age
                </InputLabel>
                <Select
                  native
                  value={state.age}
                  onChange={handleChange}
                  label="Age"
                  inputProps={{
                    name: "age",
                    id: "outlined-age-native-simple"
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4} sm={4} md={2} lg={2} xl={2}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">
                  Age
                </InputLabel>
                <Select
                  native
                  value={state.age}
                  onChange={handleChange}
                  label="Age"
                  inputProps={{
                    name: "age",
                    id: "outlined-age-native-simple"
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4} sm={4} md={2} lg={2} xl={2}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">
                  Age
                </InputLabel>
                <Select
                  native
                  value={state.age}
                  onChange={handleChange}
                  label="Age"
                  className={classes.select}
                  inputProps={{
                    name: "age",
                    id: "outlined-age-native-simple"
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
