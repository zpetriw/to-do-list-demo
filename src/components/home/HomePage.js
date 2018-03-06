import React from 'react';
import {Link} from 'react-router-dom';
import Button from 'material-ui/Button';

const MyLink = props => <Link to="/about" {...props} />

class HomePage extends React.Component{
    
    render() {
        return (
            <div className="jumbotron">
                <h1>To Do List Demo</h1>
                <p>This is a to-do list demo application.</p>        
                <Button component={MyLink} variant="raised" color="primary">About</Button>
            </div>
        )
    }
}

export default HomePage;