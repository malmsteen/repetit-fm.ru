import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
}));

export default function MyPagination(props) {
  const classes = useStyles();
  const { count, color} = props;
  return (
    <div className={classes.root}>
      <Pagination count={count} color={color} />
      {/* <Pagination count={10} color="primary" />
      <Pagination count={10} color="secondary" />
      <Pagination count={10} disabled /> */}
    </div>
  );
}