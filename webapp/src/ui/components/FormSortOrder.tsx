import React, { ChangeEvent } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { SortOrder } from 'src/models';

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

interface FormSortOrderProps {
  sortOrder: SortOrder;
  onUpdate: (sortOrder: SortOrder) => void;
}

const FormSortOrder: React.SFC<FormSortOrderProps> = 
  ({ onUpdate, sortOrder }: FormSortOrderProps) => {
    const style = useStyles();

    const updateSortField = (event: ChangeEvent<any>): void => {
      onUpdate({ ...sortOrder, sortField: event.target.value });
    };

    const updateSortDirection = (event: ChangeEvent<any>): void => {
      onUpdate({ ...sortOrder, sortDirection: event.target.value });
    };

   return (
      <FormGroup className={style.formGroup}>
        <FormControl className={style.formControl}>
          <InputLabel htmlFor="sort-field">Sort Field</InputLabel>
          <Select value={sortOrder.sortField.toString()} onChange={updateSortField}>
            <MenuItem key="difficulty" value="difficulty">Difficulty</MenuItem>
            <MenuItem key="difficulty" value="name">Name</MenuItem>
            <MenuItem key="difficulty" value="routeDistance">Route Distance</MenuItem>
            <MenuItem key="difficulty" value="routeElevationGain">Route Elevation Gain</MenuItem>
            <MenuItem key="difficulty" value="totalDistance">Total Distance</MenuItem>
            <MenuItem key="difficulty" value="totalElevationGain">Total Elevation Gain</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={style.formControl}>
          <InputLabel htmlFor="sort-direction">Direction</InputLabel>
          <Select value={sortOrder.sortDirection.toString()} onChange={updateSortDirection}>
            <MenuItem key="ascending" value="ascending">Ascending</MenuItem>
            <MenuItem key="descending" value="descending">Descending</MenuItem>
          </Select>
        </FormControl>
      </FormGroup>
    );
  };

export default FormSortOrder;
