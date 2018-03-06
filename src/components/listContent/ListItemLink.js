import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

class ListItemLink extends React.Component {
    renderLink = itemProps => <Link to={this.props.to} {...itemProps} />;
  
    render() {
      const { icon, primary, secondary} = this.props;
      return (
        <li>
          <ListItem button component={this.renderLink}>
            {icon && <ListItemIcon>{icon}</ListItemIcon>}
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

export default ListItemLink;