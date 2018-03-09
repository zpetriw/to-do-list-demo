import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    root: {
      textAlign: "center"
    }
});
class AddItemPage extends React.Component {
    render() {
        return (
            <div className={this.props.classes.root}>
                <h1>Add an item</h1>
                <p>Implement a UI to add items to our to-do list.</p>
            </div>
        );
    }
}

AddItemPage.propTypes = {
    classes: PropTypes.object.isRequired
};

export default compose(
    withStyles(styles)
)(AddItemPage);