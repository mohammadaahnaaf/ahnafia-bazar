import { makeStyles } from "@material-ui/core";
import image from '../../assests/images/image.jpg';

const styles = makeStyles(() => ({

    root: {
        flexGrow: 1,
        backgroundImage: `url(${image})`,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: 'auto',
        // background: 'black',
        backdropFilter: `blur(${50})`,
        paddingTop: '8%',


    },
    header: {
        color: 'green',
        textAlign: 'center',
        // fontSize: '60px',
        fontFamily: ['Julius Sans One', 'sans-serif']
    },
    offer: {
        color: 'yellow',
        textAlign: 'center',
        // fontSize: '80px',
        fontFamily: ['Julius Sans One', 'sans-serif']
    }
}));

export default styles;