import React from 'react';
import { compose } from 'recompose';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import List from 'material-ui/List';
import ListIcon from 'material-ui-icons/List';
import PlaylistAdd from 'material-ui-icons/PlaylistAdd';
import InfoOutline from 'material-ui-icons/InfoOutline';
import ListItemLink from '../listContent/ListItemLink';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import ItemCounter from '../items/ItemCounter';

const drawerWidth = 240;

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    top: 0 // This should be set to (logo height - 64 px) so that the app bar doesn't cover the drawer.
  },
  toolbar: theme.mixins.toolbar
});

const AppSidebar = props => {
    return (
        <Drawer
        variant="permanent"
        classes={{
          paper: props.classes.drawerPaper,
        }}
      >
        <div className={props.classes.toolbar} />        
        <List component="nav">
          <ListItemLink to="/" primary="To-Do" icon={<ListIcon />} />
          <ListItemLink to="/additem" primary="Add Item" icon={<PlaylistAdd />} />
          <ListItemLink to="/about" primary="About" secondary="Learn more" icon={<InfoOutline />} />
        <Divider />
          <ItemCounter/>
        <Divider />
        </List>
      </Drawer>
    );
};

AppSidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
    withStyles(styles)
)(AppSidebar);