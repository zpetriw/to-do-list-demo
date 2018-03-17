import React from 'react';
import {connect} from 'react-redux';
import {createItem} from '../../actions/itemActions';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { withStyles } from 'material-ui/styles';
import ItemInput from './ItemInput';
//import ReactDOM from 'react-dom';
// Try adding a focus on the text field after Save is clicked.

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
        //this.focusInput = this.focusInput.bind(this);
    }

    // This runs every time the user types a character in the input box. 
    onTitleChange(event) {
        const item = this.state.item;
        item.title = event.target.value;
        this.setState({item: item});
    }

    onClickSave() {
        this.props.createItem(this.state.item);
        this.setState({item: {title: ""}});
        //this.focusInput(this.component);
    }

    itemRow(item, index) {
        return <div key={index}>{item.title}</div>;
    }

    // focusInput(component) {
    //     console.log(component);
    //     if (component) {
    //         ReactDOM.findDOMNode(component).focus(); 
    //     }
    // }

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
                    buttonLabel="Save"
                    inputRef={this.focusInput}
                    />
            </div>
        );
    }
}

ItemsPage.propTypes = {
    items: PropTypes.array.isRequired,
    createItem: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    // This part assigns 'state.items' to 'props.items' for this 'ItemsPage' class.
    return {
        items: state.items
    };
}

// function mapDispatchToProps(dispatch) {
//     return {
//         actions: bindActionCreators(itemActions, dispatch)
//     }
// }

// Note: 'mapStateToProps' is what assigns 'state.items' to 'props.items' for this 'ItemsPage' class.
// Without this method the state might still contains state.items, but props will never get a reference to it.
export default compose(
    withStyles(styles),
    connect(mapStateToProps, {createItem})
)(ItemsPage);

// export default compose(
//     withStyles(styles),
//     connect(mapStateToProps, {mapDispatchToProps})
// )(ItemsPage);