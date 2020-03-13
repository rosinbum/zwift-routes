import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';

const ErrorDialog = ({ error, onClose }) => {
  if (!error) {
    return '';
  }

  return (
    <Dialog open={error} onClose={onClose}>
      <DialogTitle>
        <Typography variant="h5" style={{ color: 'red' }}>
          Error!
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {error.message}
        </DialogContentText>
        <DialogActions>
          <Button onClick={onClose} color="primary">OK</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

ErrorDialog.propTypes = {
  error: PropTypes.instanceOf(Error),
  onClose: PropTypes.func.isRequired
};

ErrorDialog.defaultProps = {
  error: null
};

export default ErrorDialog;
