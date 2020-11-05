import React from "react";
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {displayState} from '../controller/slicetypes'

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    
    title: {
      flexGrow: 1,
      marginRight: theme.spacing(2),
    },
  })
);

function Navbar() {
  const classes = useStyles();
  const [length, setLength] = React.useState(0);
  
  const numberOfItems = useSelector((state: displayState)=>(state.baskets.basket.length))
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Shoe Store
          </Typography>
          <IconButton edge="start" color="inherit" aria-label="menu" component= {Link} to= '/cart'>
            <Badge badgeContent={numberOfItems} color="secondary">
            <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
