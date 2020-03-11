import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import BackIcon from '@material-ui/icons/ArrowBack';
import IconButton, { IconButtonProps } from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useStyles from './stylesheet';

export interface ApplicationBarProps {
  /**
   * The left icon to display
   */
  leftIcon?: "menu" | "back",

  /**
   * The event handler to call when the left icon is pressed
   */
  onLeftIconPressed?: () => void,

  /**
   * The title on the application bar
   */
  title: string
}

/**
 * The top Application Bar
 * @param props component properties
 */
const ApplicationBar: React.SFC<ApplicationBarProps> = (props) => {
  const style = useStyles();

  let leftIconComponent = <div className={style.emptyIcon}/>;
  if (props.leftIcon) {
    const leftIconProps: IconButtonProps = {
      'aria-label': props.leftIcon,
      className: style.leftIconButton,
      color: 'inherit',
      edge: 'start',
      onClick: () => { props.onLeftIconPressed && props.onLeftIconPressed(); }
    };
    leftIconComponent = (
      <IconButton {...leftIconProps}>
        {props.leftIcon === "menu" ? <MenuIcon /> : <BackIcon />}
      </IconButton>
    );
  }

  return (
    <AppBar position="relative">
      <Toolbar>
        {leftIconComponent}
        <Typography variant="h6" className={style.title}>
          {props.title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default ApplicationBar;