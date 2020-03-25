import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import RoutesIcon from '@material-ui/icons/Directions';
import StatisticsIcon from '@material-ui/icons/EmojiEvents';
import SettingsIcon from '@material-ui/icons/Settings';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => createStyles({
  drawerPaper: {
    width: drawerWidth
  },
  drawer: theme.mixins.toolbar
}));

export interface MobileSideMenuProps {
  onSelect: (route: string) => void;
  onClose: () => void;
  open: boolean;
}

const MobileSideMenu: React.SFC<MobileSideMenuProps> = 
  ({ onClose, onSelect, open }: MobileSideMenuProps) => {
    const styles = useStyles();
    const dc = {
      paper: styles.drawerPaper
    };

    return (
      <Drawer classes={dc} anchor="left" open={open} onClose={onClose}>
        <div className={styles.drawer}>
          <List>
            <ListItem button onClick={() => onSelect('/')} key="menu1">
              <ListItemIcon><RoutesIcon /></ListItemIcon>
              <ListItemText>Routes</ListItemText>
            </ListItem>
            <ListItem button onClick={() => onSelect('/stats')} key="menu1">
              <ListItemIcon><StatisticsIcon /></ListItemIcon>
              <ListItemText>Statistics</ListItemText>
            </ListItem>
            <ListItem button onClick={() => onSelect('/settings')} key="menu1">
              <ListItemIcon><SettingsIcon /></ListItemIcon>
              <ListItemText>Settings</ListItemText>
            </ListItem>
          </List>
        </div>
      </Drawer>
    );
  };

export default MobileSideMenu;
