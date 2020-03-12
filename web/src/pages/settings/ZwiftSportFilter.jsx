import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import useStyles from './stylesheet';

const ZwiftSportFilter = ({ onSettingsChanged, value }) => {
  const style = useStyles();

  const onChange = (event) => {
    onSettingsChanged(event.target.value);
  };

  return (
    <FormControl className={style.formControl}>
      <InputLabel htmlFor="zwift-sport">Sport</InputLabel>
      <Select value={value} onChange={onChange}>
        <MenuItem value="all">All sports</MenuItem>
        <MenuItem value="cycling">Cycling</MenuItem>
        <MenuItem value="running">Running</MenuItem>
      </Select>
    </FormControl>
  );
};

ZwiftSportFilter.propTypes = {
  onSettingsChanged: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default ZwiftSportFilter;
