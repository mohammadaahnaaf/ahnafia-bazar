import { makeStyles } from "@material-ui/core";
import image from '../../assests/images/image.jpg';

const styles = makeStyles(() => ({

    root: {
        flexGrow: 1,
        backgroundImage: `url(${image})`,
        justifyContent: 'center',
        // backgroundSize: '100%',
        alignItems: 'center',
        height: '100vh',
        width: 'auto',
        // background: 'black',
        backdropFilter: `blur(${10})`,
        paddingTop: '8%',


    },
    header: {
        color: 'green',
        textAlign: 'center',
        // fontSize: { xs: '20px', md: '60px' },
        fontFamily: ['Julius Sans One', 'sans-serif']
    },
    offer: {
        color: 'yellow',
        textAlign: 'center',
        // fontSize: '10px',
        fontFamily: ['Julius Sans One', 'sans-serif']
    },
    small: {
        paddingTop: '10%'
    }
}));

export default styles;