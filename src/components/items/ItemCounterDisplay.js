import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText } from 'material-ui/List';
import { compose } from 'recompose';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    counter: {
      textAlign: "center"
    }
  });

const ItemCounterDisplay = props => {
    return (
        <ListItem>
            <ListItemText primary={`Items To Do: ${props.itemCount}`} className={props.classes.counter}/>
        </ListItem>
    );
};

ItemCounterDisplay.propTypes = {
    itemCount: PropTypes.number.isRequired,
    classes: PropTypes.object.isRequired
};

ItemCounterDisplay.defaultProps = {
    itemCount: 0
};

export default compose(
    withStyles(styles)
)(ItemCounterDisplay);