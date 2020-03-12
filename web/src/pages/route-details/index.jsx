import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { ApplicationBar } from '../../components';
import useStyles from './stylesheet';

const RouteDetailsPage = () => {
  const style = useStyles();
  const history = useHistory();
  const { id } = useParams();

  return (
    <div className={style.root}>
      <ApplicationBar
        leftIcon="back"
        onLeftIconPressed={() => history.goBack()}
        title="Route Details"
      />
      <div className={style.content}>
        <p>{`Detailed route content for ${id}`}</p>
      </div>
    </div>
  );
};

export default RouteDetailsPage;
