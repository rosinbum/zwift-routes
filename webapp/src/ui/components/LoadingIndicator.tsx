import React, { useState } from 'react';
import { orange } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import WarningIcon from '@material-ui/icons/Warning';

/**
 * Properties that you can use with the LoadingIndicator
 */
export interface LoadingIndicatorProps {
  /**
   * If there is an app error, then this is the error
   */
  error?: Error;

  /**
   * If the app is loading, then this is set to true
   */
  isLoading?: boolean;

  /**
   * If you want to acknowledge the error, then set the onClick handler
   */
  onClick?: () => void;
}

/**
 * Shows a loading indicator and error handler.
 * 
 * @param props
 * @param props.error the app error
 * @param props.isLoading show loading indicator?
 * @param props.onClick provides a click handler for the button 
 */
const LoadingIndicator: React.SFC<LoadingIndicatorProps> = (
  { error, isLoading, onClick }: LoadingIndicatorProps
) => {
  const [ dialogIsOpen, setOpenDialog ] = useState(false);

  /** Handler for opening the error dialog */
  const openDialogHandler = (): void => {
    setOpenDialog(true);
  };

  /** Handler for closing the error dialog */
  const closeDialogHandler = (): void => {
    if (onClick) onClick();
    setOpenDialog(false);
  };

  // Check for error first
  if (error) {
    return (
      <>
        <IconButton onClick={openDialogHandler}>
          <WarningIcon data-testid="warning-icon" fontSize="large" style={{ color: orange[500] }} />
        </IconButton>
        <Dialog onClose={closeDialogHandler} open={dialogIsOpen}>
          <DialogTitle data-testid="dialog-title">Error</DialogTitle>
          <DialogContent dividers style={{ minWidth: '300px' }}>
            <Typography gutterBottom>{error?.message}</Typography>
          </DialogContent>
          <DialogActions>
            <Button autoFocus data-testid="ok-button" onClick={closeDialogHandler} color="secondary">
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }

  // Loading, no error
  if (isLoading) {
    return (
      <CircularProgress data-testid="progress-bar" color="inherit" />
    );
  }

  // No error and not loading
  return (<div data-testid="disabled-icon" />);
};

export default LoadingIndicator;
