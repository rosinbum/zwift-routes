import React from 'react';
import NotCompletedIcon from '@material-ui/icons/CancelOutlined';
import CompletedIcon from '@material-ui/icons/CheckCircleOutline';
import { green, grey } from '@material-ui/core/colors';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ZwiftRoute from 'models/ZwiftRoute';

interface RouteListItemProps {
  /**
   * Event handler called when an item in the list is clicked
   */
  onClick: () => void,

  /**
   * The route to display in this list item
   */
  route: ZwiftRoute
}

/**
 * Displays a single row in the list of routes.
 * 
 * @param props component props
 */
const RouteListItem: React.SFC<RouteListItemProps> = (props) => {
  // Works out the correct icon to display on the left side of the paper
  const completionIcon = props.route.isCompleted
    ? <CompletedIcon fontSize="large" style={{ color: green[500] }} />
    : <NotCompletedIcon fontSize="large" style={{ color: grey[500] }} />;

    return (
      <ListItem button divider onClick={props.onClick}>
        <ListItemAvatar>{completionIcon}</ListItemAvatar>
        <ListItemText primary={props.route.name} />
      </ListItem>
    );
};

export default RouteListItem;
