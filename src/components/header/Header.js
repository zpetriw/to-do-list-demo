import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';
import Toolbar from 'material-ui/Toolbar/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import routes from './routes';

const styles = {
    root: {
      flexGrow: 1,
    },
    flex: {
      flex: 1,
      textAlign: "left"
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };

const Header = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        To-Do List
                    </Typography>
                    <img src={logo} className="App-logo" alt="logo" />
                </Toolbar>
            </AppBar>
        </div>
    );
  }

Header.propTypes = {
    children: PropTypes.object.isRequired
  }

export default withStyles(styles)(Header);