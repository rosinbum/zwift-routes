import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const CompleteRideDialog = ({ open, onClose }) => (
  <Dialog open={open} onClose={() => onClose(open)}>
    <DialogTitle>Complete Ride</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Did you complete this ride and receive a badge for it within Zwift?
      </DialogContentText>
      <DialogActions>
        <Button onClick={() => onClose(true)} color="primary" variant="contained">Yes</Button>
        <Button onClick={() => onClose(false)} variant="contained">No</Button>
      </DialogActions>
    </DialogContent>
  </Dialog>
);

CompleteRideDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default CompleteRideDialog;
