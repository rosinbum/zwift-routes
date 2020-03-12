import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import useStyles from './stylesheet';

const ZwiftWorldFilter = ({ onSettingsChanged, value, worlds }) => {
  const style = useStyles();

  const onChange = (event) => {
    onSettingsChanged(event.target.value);
  };

  return (
    <FormControl className={style.formControl}>
      <InputLabel htmlFor="zwift-world">World</InputLabel>
      <Select value={value} onChange={onChange}>
        <MenuItem value="*">All</MenuItem>
        {worlds.map((world) => (
          <MenuItem key={world} value={world}>{world}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

ZwiftWorldFilter.propTypes = {
  onSettingsChanged: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  worlds: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ZwiftWorldFilter;
