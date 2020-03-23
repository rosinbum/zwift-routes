import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/MenuOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { LoadingIndicator } from 'src/ui/components';

const useStyles = makeStyles((theme: Theme) => createStyles({
  iconButton: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    color: theme.palette.primary.contrastText
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(1)
  }
}));

export interface TABProps {
  error?: Error;
  isBusy: boolean;
  onAcknowledgeError: () => void;
  onOpenMenu: () => void;
  onOpenSettings: () => void;
}

const TopApplicationBar: React.SFC<TABProps> = 
  ({ error, isBusy, onAcknowledgeError, onOpenMenu, onOpenSettings }: TABProps) => {
    const styles = useStyles();

    return (
      <AppBar position="relative">
        <Toolbar>
          <IconButton edge="start" className={styles.iconButton} onClick={onOpenMenu}>
            <MenuIcon data-testid="menu-icon" />
          </IconButton>
          <Typography variant="h6" className={styles.title}>
            Zwift Routes
          </Typography>
          <LoadingIndicator
            error={error}
            isLoading={isBusy}
            onClick={onAcknowledgeError} 
          />
          <IconButton className={styles.iconButton} onClick={onOpenSettings}>
            <SettingsIcon data-testid="settings-icon" />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  };

export default TopApplicationBar;
