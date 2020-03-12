import React from 'react';
import uniq from 'lodash/uniq';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import FormGroup from '@material-ui/core/FormGroup';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IncludeFilter from './IncludeFilter';
import ZwiftWorldFilter from './ZwiftWorldFilter';
import useStyles from './stylesheet';
import { updateSettings } from '../../app-state/actions';
import ZwiftSportFilter from './ZwiftSportFilter';
import SortFieldSetting from './SortFieldSetting';

const SettingsForm = () => {
  const style = useStyles();
  const dispatch = useDispatch();
  const settings = useSelector((state) => state.settings);
  const routes = useSelector((state) => state.routes);
  const worlds = uniq(routes.map((r) => r.zwiftWorld)).sort();

  const changeSettings = (changes) => {
    dispatch(updateSettings(changes));
  };

  return (
    <div className={style.root}>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" className={style.title}>Filters</Typography>
        </Toolbar>
      </AppBar>
      <FormGroup>
        <ZwiftWorldFilter
          onSettingsChanged={(v) => changeSettings({ filter_world: v })}
          value={settings.filter_world}
          worlds={worlds}
        />
        <IncludeFilter
          fieldName="Watopia rides"
          onSettingsChanged={(v) => changeSettings({ include_watopia: v })}
          value={settings.include_watopia}
        />
        <IncludeFilter
          fieldName="completed rides"
          onSettingsChanged={(v) => changeSettings({ include_completed: v })}
          value={settings.include_completed}
        />
        <IncludeFilter
          fieldName="'Event Only' rides"
          onSettingsChanged={(v) => changeSettings({ include_eventonly: v })}
          value={settings.include_eventonly}
        />
        <ZwiftSportFilter
          onSettingsChanged={(v) => changeSettings({ filter_sport: v })}
          value={settings.filter_sport}
        />
      </FormGroup>
      <AppBar position="relative" className={style.secondTitle}>
        <Toolbar>
          <Typography variant="h6" className={style.title}>Settings</Typography>
        </Toolbar>
      </AppBar>
      <FormGroup>
        <SortFieldSetting
          onSettingsChanged={(v) => changeSettings({ sort_field: v })}
          value={settings.sort_field}
        />
      </FormGroup>
    </div>
  );
};

export default SettingsForm;
