import { makeStyles } from "@material-ui/core";
import image from '../../assests/images/image.jpg';

const styles = makeStyles(() => ({

    root: {
     
        flexGrow: 1,
        backgroundImage: `url(${image})`,
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh',
        // background: 'black',
        backdropFilter: "blur(9px)",
        paddingTop: '8%',
        
        
    },
    header: {
        color: 'green',
        textAlign: 'center',
        fontSize: '60px',
        fontFamily: ['Julius Sans One', 'sans-serif']
    },
    offer: {
        color: 'yellow',
        textAlign: 'center',
        fontSize: '80px',
        fontFamily: ['Julius Sans One', 'sans-serif']
    }
}));

export default styles;