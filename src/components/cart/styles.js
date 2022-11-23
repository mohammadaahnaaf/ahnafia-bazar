import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({

  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '5%',
    fontFamily: ['Julius Sans One', 'sans-serif'],
    paddingTop: '1%',
    textAlign: 'center'
  },
  font: {
    fontFamily: ['Julius Sans One', 'sans-serif'],
  },
  emptyButton: {
    minWidth: '150px',
    fontFamily: ['Julius Sans One', 'sans-serif'],
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
    fontFamily: ['Julius Sans One', 'sans-serif'],
  },
  link: {
    textDecoration: 'none',
    fontFamily: ['Julius Sans One', 'sans-serif'],
    color: 'white'
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
  },
  emptyCart: {
    height: '100vh'
  }
}));

export default styles;