import { makeStyles, alpha } from "@material-ui/core/styles";

const drawerWidth = 0;

const styles = makeStyles((theme) => ({
  
  appBar: {
    boxShadow: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    
  },
  title: {
    flexGrow: 0.2,
    alignItems: 'center',
    display: 'flex',
    fontFamily: ['Julius Sans One', 'sans-serif'],
    textDecoration: 'none',
  },
  about: {
    flexGrow: 0.2,
    fontFamily: ['Julius Sans One', 'sans-serif'],
    color: 'red',
    textDecoration: 'none',
    // fontSize: '15px'
  },
  image: {
    marginRight: '10px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  grow: {
    flexGrow: 1,
  },
  inputRoot: {
    color: 'inherit',
  },
  
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: 'grey',
      
    },
    
    marginLeft: 0,
    marginRight: '10%',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },

  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputInput: {
    fontFamily: ['Julius Sans One', 'sans-serif'],
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  }
}));

export default styles;