
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(() => ({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {

    display: 'flex',
    justifyContent: 'space-between',
  },
  font: {
    fontFamily: ['Julius Sans One', 'sans-serif'],
    fontSize: '20px',
    marginLeft: '10px'
  },
  fonts: {
    fontFamily: ['Julius Sans One', 'sans-serif'],
  }
}));

export default styles;

