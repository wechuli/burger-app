import React from "react";
import Aux from "../../hoc/Auxilliary";
import classes from './Layout.module.css'
import Toolbar from "../Navigation/Toolbar/Toolbar";

const Layout = props => {
  return (
    <Aux>
      <Toolbar></Toolbar>     
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};
export default Layout;
