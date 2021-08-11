import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(() => ({
  media: {
    height: 260,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    direction: 'row'
  },
  font: {
    fontFamily: ['Julius Sans One', 'sans-serif'],
  }

}));

export default styles;