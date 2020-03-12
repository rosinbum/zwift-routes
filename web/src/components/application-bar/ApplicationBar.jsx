import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import BackIcon from '@material-ui/icons/ArrowBackIosOutlined';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useStyles from './stylesheet';

/**
 * Pure component for a reactive application bar.  Applies the corporate standard style.
 *
 * @param {Object} props the component props.
 * @param {string} props.leftIcon the name of the icon on the left-hand side.
 * @param {function} props.onLeftIconPressed event handler when the leftIcon is pressed.
 * @param {string} props.title the application bar title
 */
const ApplicationBar = ({ leftIcon, onLeftIconPressed, title }) => {
  const style = useStyles();

  const leftProps = {
    'aria-label': leftIcon,
    className: style.leftIconButton,
    color: 'inherit',
    edge: 'start',
    onClick: onLeftIconPressed
  };
  let leftComponent = <div className={style.emptyIcon} />;
  if (leftIcon !== 'none') {
    leftComponent = (
      <IconButton {...leftProps}>
        {leftIcon === 'menu' ? <MenuIcon /> : <BackIcon />}
      </IconButton>
    );
  }

  return (
    <AppBar position="relative">
      <Toolbar>
        {leftComponent}
        <Typography variant="h6" className={style.title}>{title}</Typography>
      </Toolbar>
    </AppBar>
  );
};

ApplicationBar.propTypes = {
  leftIcon: PropTypes.oneOf(['back', 'menu', 'none']),
  onLeftIconPressed: PropTypes.func,
  title: PropTypes.string.isRequired
};

ApplicationBar.defaultProps = {
  leftIcon: 'none',
  onLeftIconPressed: () => { /* Do nothing */ }
};

export default ApplicationBar;
