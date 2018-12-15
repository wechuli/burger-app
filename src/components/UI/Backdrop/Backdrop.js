import React from "react";
import Aux from "../../../hoc/Auxilliary";
import classes from './Backdrop.module.css'

export default function Backdrop(props) {
  return <Aux>{props.show ? <div className={classes.Backdrop} onClick={props.clicked}/> : null}</Aux>;
}
