import React from 'react';
import employeeServices from "./Employee";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

  export const Form = ({ text, setText, amount, setAmount,  saveEmployee, type, setType,}) => {

  const classes = useStyles();
  const handleChange = (event) => {
    setType(event.target.value);
  };

  return(
    <div className="form-container">
      <div className="row">
        <FormControl className={classes.formControl}>
         <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          onChange={handleChange}
        >
          <MenuItem value={"inc"}>収入</MenuItem>
          <MenuItem value={"exp"}>支出</MenuItem>
        </Select>
      </FormControl>
      </div>  


      
      

      

      <div className="row">
        <form className={classes.root} noValidate autoComplete="off">
          <label htmlFor="firstName"></label>
          <TextField
          id="outlined-secondary"
          label="内容"
          variant="outlined"
          color="secondary"
          value={text} 
          className="form-control" 
          placeholder=""
          onChange={(event)=>setText(event.target.value)}
          />
        </form>
      </div>

      <div className="row">
        <form className={classes.root} noValidate autoComplete="off">
          <label htmlFor="address"></label>
          <TextField
          id="outlined-basic"
          label="金額"
          variant="outlined"
          color="secondary"
          value={amount}
          className="form-control" 
          placeholder=""
          onChange={(event)=>setAmount(event.target.value)}
          />
        </form>
      </div>

      
      <div className="form-row">
        <Fab color="primary" aria-label="add"
          type="submit"
          onClick={()=>saveEmployee()}>
         <AddIcon />
        </Fab>
      </div>
      
    </div>

    
  )
}
export default Form;