import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  checkControl: {
    paddingLeft: theme.spacing(1)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  formGroup: {
    margin: theme.spacing(1)
  },
  root: {
    minWidth: '15rem'
  },
  title: {
    color: theme.palette.primary.contrastText,
    paddingLeft: theme.spacing(0.5)
  }
}));

export default useStyles;
