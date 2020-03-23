import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/MenuOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) => createStyles({
  appBar: {
    display: 'block'
  },
  content: {
    display: 'flex',
    flex: 'row nowrap',
    flexGrow: 1,
  },
  detailsSection: {
    flexGrow: 1,
    border: '1px solid green'
  },
  listSection: {
    display: 'block',
    maxWidth: '600px',
    width: '40%',
    border: '1px solid red',
  },
  menuButton: {
    marginLeft: theme.spacing(2)
  },
  root: {
    display: 'flex',
    flex: 'column nowrap',
    height: '100%',
    left: 0,
    margin: 0,
    padding: 0,
    position: 'absolute',
    top: 0,
    width: '100%'
  },
  settingsButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(1)
  }
}));

const DesktopApplication: React.SFC<{}> = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div className={styles.appBar}>
        <AppBar>
          <Toolbar>
            <IconButton edge="start" className={styles.menuButton} color="inherit">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={styles.title}>
              Zwift Routes
            </Typography>
            <IconButton className={styles.settingsButton} color="inherit">
              <SettingsIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
      <Container className={styles.content} maxWidth="lg">
        <div className={styles.listSection}>

        </div>
        <div className={styles.detailsSection}>

        </div>
      </Container>
    </div>
  );
};

export default DesktopApplication;
