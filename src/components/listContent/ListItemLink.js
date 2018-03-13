import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { withStyles } from 'material-ui/styles';

// Question: How do we show which link we are currently on (using Material UI)? See hint below?... 

const styles = theme => ({
    content: {
        backgroundColor: "#3F51B5"
    }
});



const ListItemLink = ({classes, icon, primary, secondary, to}) => {

  // I cannot get this to work with 'activeStyle={classes}' or classes.content.
  const renderLink = itemProps => <NavLink activeStyle={{backgroundColor: "#C5CAE9"}} exact to={to} {...itemProps} />;

  return (
    <li>
      <ListItem button component={renderLink} >
        {<ListItemIcon>{icon}</ListItemIcon>}
        <ListItemText inset primary={primary} secondary={secondary} />
      </ListItem>
    </li>
  );
};

ListItemLink.propTypes = {
    classes: PropTypes.object.isRequired,
    icon: PropTypes.node.isRequired,
    primary: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
};

export default withStyles(styles)(ListItemLink);