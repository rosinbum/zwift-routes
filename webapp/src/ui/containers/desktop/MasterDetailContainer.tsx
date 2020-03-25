import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => createStyles({
  container: {
    display: 'flex',
    flexFlow: 'row nowrap',
    height: '100%'
  },
  detail: {
    flexGrow: 1,
    height: '94vh',
    overflowY: 'auto',
    backgroundColor: '#F0F0F0'
  },
  master: {
    width: '600px',
    maxWidth: '50%',
    height: '94vh',
    overflowY: 'auto'
  }
}));

export interface MasterDetailContainerProps {
  children: React.ReactNode;
  master: React.ReactNode;
}

const MasterDetailContainer: React.SFC<MasterDetailContainerProps> =
  ({ children, master}: MasterDetailContainerProps) => {
    const styles = useStyles();

    return (
      <div className={styles.container}>
        <div className={styles.master}>
          {master}
        </div>
        <div className={styles.detail}>
          {children}
        </div>
      </div>
    );
  };

export default MasterDetailContainer;
