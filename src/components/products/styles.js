import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: '#e0f7fa',
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
}));

export default styles;