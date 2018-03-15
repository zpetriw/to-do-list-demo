import React from 'react';
import { compose } from 'recompose';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    button: {
        margin: theme.spacing.unit,
    }
});

export const ItemInput = ({classes, textLabel, textValue, buttonLabel, onChange, onClick}) => {
    return (
        <div>
            <TextField
            required
            id="required"
            label={textLabel}
            className={classes.textField}
            margin="normal"
            onChange={onChange}
            value={textValue}
            />
            <Button variant="raised" className={classes.button} onClick={onClick}>
                {buttonLabel}
            </Button>
        </div>
    );
};

ItemInput.propTypes = {
    classes: PropTypes.object.isRequired,
    textLabel: PropTypes.string.isRequired,
    buttonLabel: PropTypes.string.isRequired
};

export default compose(
    withStyles(styles)
)(ItemInput);