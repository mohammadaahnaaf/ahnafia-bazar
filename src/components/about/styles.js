import { makeStyles } from "@material-ui/core";

const styles = makeStyles(() => ({
    root: {
        display: 'flex',
        height: '100vh',
        width: '100%',
        paddingTop: '3%',
        backgroundColor: 'white'
    },
    title: {
        textAlign: 'center',
        fontFamily: ['Julius Sans One', 'sans-serif']
    },
    des: {
        fontFamily: ['Julius Sans One', 'sans-serif'],
        fontSize: '20px'
    }
}));

export default styles;