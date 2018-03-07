import React from 'react';
import {Link} from 'react-router-dom';
import Button from 'material-ui/Button';
import {connect} from 'react-redux';

class ItemsPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        
        this.state = { 
            course: { title: "" }
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    // This runs every time the user types a character in the input box. 
    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    }

    onClickSave() {
        alert(`Saving ${this.state.course.title}`);
    }

    render() {
        return (
            <div>
                <h1>Items</h1>
                <h2>Add Item</h2>
                <input
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title} />

                <input
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave} />
            </div>
        );
    }
}

export default ItemsPage;