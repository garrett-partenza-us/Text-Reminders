import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();
  const mess = useState('');
  const setmess = event => {
    mess(event.target.value);
  };



  return (
    <div>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="Message" label="Message" variant="filled" onChange={event => setmess(event.target.value)}/>
        </form>
    </div>

  );
}
