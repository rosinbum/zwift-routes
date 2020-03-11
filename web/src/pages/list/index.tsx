import React from 'react';
import ApplicationBar, { ApplicationBarProps} from 'components/appbar';
import useStyles from './stylesheet';

const ListRoutesPage = () => {
  const style = useStyles();

  const onLeftIconPressed = () => {
    console.log('Menu icon pressed');
  };

  const applicationBarProps: ApplicationBarProps = {
    leftIcon: "menu",
    onLeftIconPressed,
    title: "Zwift Routes"
  };

  return (
    <div className={style.root}>
      <ApplicationBar {...applicationBarProps} />
      <div className={style.content}>
        <p>List Routes content</p>
      </div>
    </div>
  );
};

export default ListRoutesPage;
