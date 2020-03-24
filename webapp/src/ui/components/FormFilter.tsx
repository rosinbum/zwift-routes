import React, { ChangeEvent } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { RouteFilter, ZwiftRoute } from 'src/models';
import uniq from 'lodash/uniq';

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

interface FormFilterProps {
  filter: RouteFilter;
  onUpdate: (filter: RouteFilter) => void;
  routes: ZwiftRoute[];
}

const FormFilter: React.SFC<FormFilterProps> = 
  ({ filter, onUpdate, routes }: FormFilterProps) => {
    const style = useStyles();
    const worlds = uniq(routes.map((r) => r.zwiftWorld));

    const updateZwiftWorld = (event: ChangeEvent<any>): void => {
      onUpdate({ ...filter, world: event.target.value });
    };

    const updateZwiftSport = (event: ChangeEvent<any>): void => {
      onUpdate({ ...filter, sport: event.target.value });
    };

    const updateDefaultRoutes = (event: ChangeEvent<{}>, checked: boolean): void => {
      onUpdate({ ...filter, includeDefaultWorld: checked });
    };

    const updateCompletedRoutes = (event: ChangeEvent<{}>, checked: boolean): void => {
      onUpdate({ ...filter, includeCompletedRoutes: checked });
    };

    const updateEventOnlyRoutes = (event: ChangeEvent<{}>, checked: boolean): void => {
      onUpdate({ ...filter, includeEventOnlyRoutes: checked });
    };

    return (
      <FormGroup className={style.formGroup}>
        <FormControl className={style.formControl}>
          <InputLabel htmlFor="zwift-world">World</InputLabel>
          <Select value={filter.world || '*'} onChange={updateZwiftWorld}>
            <MenuItem key="all" value="*">All worlds</MenuItem>
            {worlds.map((world) => (<MenuItem key={world} value={world}>{world}</MenuItem>))}
          </Select>
        </FormControl>

        <FormControlLabel 
          className={style.checkControl}
          control={<Checkbox color="primary" />}
          label={`Include Watopia routes`}
          onChange={updateDefaultRoutes}
          checked={filter.includeDefaultWorld}
        />

        <FormControlLabel 
          className={style.checkControl}
          control={<Checkbox color="primary" />}
          label={`Include completed routes`}
          onChange={updateCompletedRoutes}
          checked={filter.includeCompletedRoutes}
        />

        <FormControlLabel 
          className={style.checkControl}
          control={<Checkbox color="primary" />}
          label={`Include event only routes`}
          onChange={updateEventOnlyRoutes}
          checked={filter.includeEventOnlyRoutes}
        />

        <FormControl className={style.formControl}>
          <InputLabel htmlFor="zwift-sport">World</InputLabel>
          <Select value={filter.sport || '*'} onChange={updateZwiftSport}>
            <MenuItem key="all" value="*">All sports</MenuItem>
            <MenuItem key="cycling" value="cycling">Cycling</MenuItem>
            <MenuItem key="running" value="running">Cycling</MenuItem>
          </Select>
        </FormControl>
      </FormGroup>
    );
  };

export default FormFilter;
