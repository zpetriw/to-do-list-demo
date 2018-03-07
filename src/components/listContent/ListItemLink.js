import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { withStyles } from 'material-ui/styles';
import { withTheme } from 'material-ui/styles';

// Question: How do we show which link we are currently on (using Material UI)? See hint below?... 

const styles = theme => ({
    content: {
        backgroundColor: "#3F51B5"
    }
});

class ListItemLink extends React.Component {
    renderLink = itemProps => <NavLink exact to={this.props.to} {...itemProps} />;
  
    render() {
      const { theme, classes, icon, primary, secondary} = this.props;

      console.log(classes.content.backgroundColor);
      return (
        <li>
          <ListItem button component={this.renderLink} activeStyle={{backgroundColor: "#C5CAE9"}}>
            {<ListItemIcon>{icon}</ListItemIcon>}
            <ListItemText inset primary={primary} secondary={secondary} />
          </ListItem>
        </li>
      );
    }
}

ListItemLink.propTypes = {
    icon: PropTypes.node.isRequired,
    primary: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired
}

export default withStyles(styles)(ListItemLink);

// <li><NavLink to="/about" activeStyle={{ color:'red' }}>About</NavLink><li>

// @withStyles({
//     active: {
//       backgroundColor: 'rgba(255, 255, 255, 0.12)',
//     },
//   })
//   export default class ListItemLink extends PureComponent {
//     render() {
//       const { classes, icon, title, to } = this.props;
  
//       return (
//         <ListItem button component={NavLink} to={to} activeClassName={classes.active}>
//           <ListItemIcon>{icon}</ListItemIcon>
//           <ListItemText primary={title} />
//         </ListItem>
//       );
//     }
//   }

// import {withRouter} from 'react-router-dom';
// ...

// const SomeComponent = withRouter(props => <MyComponent {...props}/>);

// class MyComponent extends React.Component {
//     ...
//     SomeMethod () {
//       const {pathname} = this.props.location;
//       ...
//     }
//     ...

// }