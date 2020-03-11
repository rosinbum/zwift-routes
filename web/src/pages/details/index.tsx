import React from 'react';
import ApplicationBar, { ApplicationBarProps} from 'components/appbar';
import useStyles from './stylesheet';

const DetailedRoutePage = () => {
  const style = useStyles();

  const onLeftIconPressed = () => {
    console.log('Back icon pressed');
  };

  const applicationBarProps: ApplicationBarProps = {
    leftIcon: "back",
    onLeftIconPressed,
    title: "Zwift Route"
  };

  return (
    <div className={style.root}>
      <ApplicationBar {...applicationBarProps} />
      <div className={style.content}>
        <p>Detailed Route content</p>
      </div>
    </div>
  );
};

export default DetailedRoutePage;
