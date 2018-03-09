import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import routes from './routes';
import AppSidebar from './components/appSidebar/AppSidebar';
import AppHeader from './components/header/AppHeader';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,
});

const App = props => {
  return (
    <div className={props.classes.root}>
      <AppHeader />
      <AppSidebar />
      <main className={props.classes.content}>
        <div className={props.classes.toolbar} />
        {routes}
      </main>
    </div>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);