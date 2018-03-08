import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import logo from '../header/logo.svg';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import ListIcon from 'material-ui-icons/List';
import DraftsIcon from 'material-ui-icons/Drafts';
import PlaylistAdd from 'material-ui-icons/PlaylistAdd';
import InfoOutline from 'material-ui-icons/InfoOutline';
import ListContent from '../listContent/ListContent';
import ListItemLink from '../listContent/ListItemLink';
import { Route } from 'react-router';

const drawerWidth = 240;

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
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    top: 0 // This should be set to (logo height - 64 px) so that the app bar doesn't cover the drawer.
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
});

// refactor
// 1. use arrow function, const Main = ({classes}) => {}
// 2. move it to App component
// 3. move AppBar to Header
// 4. move Drawer to AppSidebar
// 5. Consider refactor the AppSidebar component according to the "Presentational and Container Components" pattern
function Main(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
            <img src={logo} className="App-logo" alt="logo" />
            <Typography variant="title" color="inherit" noWrap className={classes.flex}>
                To-Do List
            </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />        
        <List component="nav">
            <ListItemLink to="/" primary="To-Do" icon={<ListIcon />} />
            <ListItemLink to="/additem" primary="Add Item" icon={<PlaylistAdd />} />
            <ListItemLink to="/about" primary="About" secondary="Learn more" icon={<InfoOutline />} />
        </List>
        <Divider />
      </Drawer>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        {routes}
      </main>
    </div>
  );
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);