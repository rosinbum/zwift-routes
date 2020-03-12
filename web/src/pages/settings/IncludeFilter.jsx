import React from 'react';
import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import useStyles from './stylesheet';

const IncludeFilter = ({ fieldName, onSettingsChanged, value }) => {
  const style = useStyles();

  const onChange = (event) => {
    onSettingsChanged(event.target.checked);
  };

  return (
    <FormControlLabel
      className={style.checkControl}
      control={<Checkbox color="primary" />}
      label={`Include ${fieldName}`}
      onChange={onChange}
      checked={value}
    />
  );
};

IncludeFilter.propTypes = {
  fieldName: PropTypes.string.isRequired,
  onSettingsChanged: PropTypes.func.isRequired,
  value: PropTypes.bool.isRequired
};

export default IncludeFilter;
