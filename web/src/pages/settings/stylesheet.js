import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  checkControl: {
    paddingLeft: theme.spacing(1)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  root: {
    minWidth: '15rem'
  },
  secondTitle: {
    marginTop: theme.spacing(1)
  },
  title: {
    color: theme.palette.primary.contrastText,
    paddingLeft: theme.spacing(0.5)
  }
}));

export default useStyles;
