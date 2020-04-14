import React from 'react'
import Widget1 from './widget1'
import Widget2 from './widget2'
import Widget3 from './widget3'
import Widget4 from './widget4'
import Grid from '@material-ui/core/Grid'

export default function DashboardCharts() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} lg={3}>
        <Widget1 />
      </Grid>
      <Grid item xs={12} sm={12} lg={3}>
        <Widget2 />
      </Grid>
      <Grid item xs={12} sm={12} lg={3}>
        <Widget3 />
      </Grid>
      <Grid item xs={12} sm={12} lg={3}>
        <Widget4 />
      </Grid>
    </Grid>
  );
}