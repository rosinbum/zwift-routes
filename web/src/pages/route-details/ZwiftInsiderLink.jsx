import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ZwiftInsiderIcon from '../../assets/zwiftinsider.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline',
    position: 'absolute',
    left: 0,
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(1)
  },
  icon: {
    height: '3rem',
    width: '3rem'
  }
}));

const ZwiftInsiderLink = ({ link }) => {
  const style = useStyles();

  return (
    <div className={style.root}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img className={style.icon} src={ZwiftInsiderIcon} alt="Zwift Insider" />
      </a>
    </div>
  );
};

ZwiftInsiderLink.propTypes = {
  link: PropTypes.string.isRequired
};

export default ZwiftInsiderLink;
