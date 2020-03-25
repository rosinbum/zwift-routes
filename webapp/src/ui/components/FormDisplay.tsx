import React, { ChangeEvent } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { DisplaySettings } from 'src/models';

const useStyles = makeStyles((theme: Theme) => createStyles({
  checkControl: {
    paddingLeft: theme.spacing(1)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200
  },
  formGroup: {
    margin: theme.spacing(1)
  }
}));

interface FormDisplayProps {
  displaySettings: DisplaySettings;
  onUpdate: (sortOrder: DisplaySettings) => void;
}

const FormDisplay: React.SFC<FormDisplayProps> = 
  ({ onUpdate, displaySettings }: FormDisplayProps) => {
    const style = useStyles();

    const updateDisplayUnits = (event: ChangeEvent<any>): void => {
      onUpdate({ ...displaySettings, units: event.target.value });
    };

   return (
      <FormGroup className={style.formGroup}>
        <FormControl className={style.formControl}>
          <InputLabel htmlFor="display-units">Display Units</InputLabel>
          <Select value={displaySettings.units.toString()} onChange={updateDisplayUnits}>
            <MenuItem key="imperial" value="imperial">Imperial (miles/feet)</MenuItem>
            <MenuItem key="metric" value="metric">Metric (kilometers/meters)</MenuItem>
          </Select>
        </FormControl>
      </FormGroup>
    );
  };

export default FormDisplay;
