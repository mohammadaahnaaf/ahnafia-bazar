import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(() => ({
  footer: {
    display:'flex',
    alignItems:'center',
    textAlign: "center",
    justifyContent:'center',
    color: "yellow",
    background: "black",
  },
  text: {
    fontFamily: ["Julius Sans One", "sans-serif"],
    fontSize: "15px",
    color: "yellow",
  },
}));

export default styles;
