import { AppBar,Toolbar,makeStyles } from "@material-ui/core";
import {NavLink} from "react-router-dom";

const useStyle = makeStyles ({
    tabs:{
        color: '#FFFFFF',
        textDecoration : 'none',
        marginRight : 20,
        fontSize : 20

    }
})


const NavBar = ()=>{
    const classes = useStyle();
        return(
        <AppBar  position="static">
            <Toolbar>
            <NavLink className={classes.tabs} to="/" exact>All Customer</NavLink>
            <NavLink className={classes.tabs} to="/add" exact>Add Customer</NavLink>

            </Toolbar>
        </AppBar>
    )
}
export default NavBar