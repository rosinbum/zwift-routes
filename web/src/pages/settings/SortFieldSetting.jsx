import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import useStyles from './stylesheet';
import { supportedSortFields } from './sortFields';

const SortFieldSetting = ({ onSettingsChanged, value }) => {
  const style = useStyles();

  const onChange = (event) => {
    onSettingsChanged(event.target.value);
  };

  return (
    <FormControl className={style.formControl}>
      <InputLabel htmlFor="zwift-sort-field">Sort Field</InputLabel>
      <Select value={value} onChange={onChange}>
        {Object.keys(supportedSortFields).map((key) => (
          <MenuItem key={key} value={key}>
            {supportedSortFields[key].title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

SortFieldSetting.propTypes = {
  onSettingsChanged: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default SortFieldSetting;
