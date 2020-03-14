import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState, UserSettings, ZwiftRoute } from 'models';

const ListRoutesContainer = () => {
  const dispatch = useDispatch();
  const zwiftRoutes: ZwiftRoute[] = useSelector((state: AppState) => state.zwiftRoutes);
  const userSettings: UserSettings = useSelector((state: AppState) => state.userSettings);

  return (
    <div className="listRoutesContainer">
      <h1>List Routes</h1>
    </div>
  );
};

export default ListRoutesContainer;
