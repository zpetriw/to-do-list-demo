import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ItemCounterDisplay from './ItemCounterDisplay';

// Note: do not do props={this.props} because it will not even pass the props to the child component
// and consequently the child component will NOT re-render.
// You need to explode the props and pass it as {...props}

const ItemCounter = props => {
    return (
        <ItemCounterDisplay {...props}/>
    );
};

ItemCounter.propTypes = {
    itemCount: PropTypes.number.isRequired,
};


function mapStateToProps(state) {
    // This part assigns 'state.items' to 'props.items' for this 'ItemsPage' class.
    return {
        itemCount: state.items.length
    };
}

export default connect(mapStateToProps)(ItemCounter);