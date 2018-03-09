import React from 'react';
import { compose } from 'recompose';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Logo from './Logo';

const styles = theme => ({
    root: {
      flexGrow: 1,
      height: 430,
      zIndex: 1,
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing.unit * 3,
      minWidth: 0, // So the Typography noWrap works
    },
    toolbar: theme.mixins.toolbar,
    flex: {
      flex: 1,
      textAlign: "center"
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    counter: {
      textAlign: "left"
    },
  });

const AppHeader = props => {
    return (
        <AppBar position="absolute" className={props.classes.appBar}>
            <Toolbar>
                <Logo />
                <Typography variant="title" color="inherit" noWrap className={props.classes.flex}>
                    To-Do List
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

AppHeader.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default compose(
    withStyles(styles)
)(AppHeader);

