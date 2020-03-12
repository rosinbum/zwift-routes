import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import useStyles from './stylesheet';

const DisplayUnitsSetting = ({ onSettingsChanged, value }) => {
  const style = useStyles();

  const onChange = (event) => {
    onSettingsChanged(event.target.value);
  };

  return (
    <FormControl className={style.formControl}>
      <InputLabel htmlFor="zwift-display-units">Display Units</InputLabel>
      <Select value={value} onChange={onChange}>
        <MenuItem value="imperial">Imperial</MenuItem>
        <MenuItem value="metric">Metric</MenuItem>
      </Select>
    </FormControl>
  );
};

DisplayUnitsSetting.propTypes = {
  onSettingsChanged: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default DisplayUnitsSetting;
