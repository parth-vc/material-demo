import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme=>({
  root: {
marginTop:theme.spacing(2),
    // minWidth: 275,
    minHeight:300,
    maxHeight:300
  },
  bullet: {
    display: 'inline-block',
    margin: '7px 5px',
    transform: 'scale(1.0)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginTop:12,
    marginBottom: 12,
  },
}));

export default function Widget14() {
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
       title="Server Overview"
       
     />
      <CardContent>
        <Typography  className={classes.pos} >
         60% /37C/3.3 Ghz
        </Typography>
        <Typography   className={classes.pos} >
        54% /37C/3.3 Ghz
        </Typography>
        <Typography   className={classes.pos} >
        57% /37C/3.3 Ghz
        </Typography>
        
      </CardContent>
    </Card>
  );
}
