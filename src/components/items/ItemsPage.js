import React from 'react';
import {connect} from 'react-redux';
import * as itemActions from '../../actions/itemActions';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { withStyles } from 'material-ui/styles';
import ItemInput from './ItemInput';
import {bindActionCreators} from 'redux';

const styles = theme => ({
    root: {
      textAlign: "center"
    }
});

export class ItemsPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        
        this.state = { 
            item: { title: "" }
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    // This runs every time the user types a character in the input box. 
    onTitleChange(event) {
        const item = this.state.item;
        item.title = event.target.value;
        this.setState({item: item});
    }

    onClickSave() {
        this.props.actions.createItem(this.state.item);
    }

    itemRow(item, index) {
        return <div key={index}>{item.title}</div>;
    }

    render() {
        return (
            <div className={this.props.classes.root}>
                <h1>Items</h1>
                <div id="items">
                    {this.props.items.map(this.itemRow)}
                </div>
                <h2>Add Item</h2>
                <ItemInput 
                    onClick={this.onClickSave} 
                    onChange={this.onTitleChange} 
                    textValue={this.state.item.title} 
                    textLabel="Title" 
                    buttonLabel="Save"/>
            </div>
        );
    }
}

ItemsPage.propTypes = {
    items: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    // This part assigns 'state.items' to 'props.items' for this 'ItemsPage' class.
    return {
        items: state.items
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(itemActions, dispatch)
    }
}

// Note: 'mapStateToProps' is what assigns 'state.items' to 'props.items' for this 'ItemsPage' class.
// Without this method the state might still contains state.items, but props will never get a reference to it.
export default compose(
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps)
)(ItemsPage);