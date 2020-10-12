import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

import {useStateValue} from '../GlobalState/StateProvider'

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3, 1, 1),
    border: "none",
    outlinbe: "none",
    height: "300px",
    width: "400px",
  },
}));

function AddTransaction() {
  const classes = useStyles();
  const { addTransaction } = useStateValue();


  const [Name, setName] = useState<string>("");
  const [Transaction, setTransaction] = useState<string>("")
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Name !== "" && Transaction!==""){
      handleClose();
      addTransaction? addTransaction({id: (Math.random()*Math.random()*23332).toString(), amount: +Transaction , name: Name}): 
      console.log('Not Found')
      setName("")
      setTransaction("")
    }
    else{
      setName("")
      setTransaction("")
    }
    }

  
  

  return (
    <div>
      <Tooltip title="Add" aria-label="add" >
        <Fab color="secondary" className={classes.absolute}>
          <AddIcon onClick={handleOpen}/>
        </Fab>
      </Tooltip>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <form className={classes.root} noValidate autoComplete="off" onSubmit = {handleSubmit}>
              <h4 style={{ marginBottom: "30px" }}>Add New Transaction</h4>
              <div
                className="input-box"
                style={{ width: "80%", marginBottom: "20px" }}
              >
                <TextField
                  id="standard-basic"
                  label="Transaction Name"
                  value= {Name}
                  style={{ width: "100%" }}
                  onChange= {(e)=> setName(e.target.value)}
                  type='text'
                  required= {true}
                />
              </div>
              <div
                className="input-box"
                style={{ width: "80%", marginBottom: "10px" }}
              >
                <TextField
                  id="standard-basic"
                  label="Transaction Amount"
                  value= {Transaction}
                  style={{ width: "100%" }}
                  onChange= {(e)=> setTransaction(e.target.value)}
                  type='number'
                  required = {true}
                />
              </div>
              <div style={{ width: "80%", marginTop: "60px"}}>
                <Button size="small" type='submit' color="primary">
                    Add Transaction
                </Button>
                <Button size="small" color="primary" onClick= {handleClose}>
                    Cancel
                </Button>
               </div>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default AddTransaction;
