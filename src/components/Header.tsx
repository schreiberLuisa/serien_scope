import {useNavigate} from "react-router-dom";

import {AppBar, Button, Toolbar} from "@mui/material";

const Header = () => {
    const navigate = useNavigate();


    return (
        <nav>
            <AppBar position="fixed"
                    sx={{backgroundColor: 'rgba(0,51,0,0.55)'}}>
                <Toolbar>
                    <Button color={"inherit"} onClick={() => navigate("/")}>Serienübersicht</Button>
                    <Button color={"inherit"} onClick={() => navigate("watchlist")}>Watchlist</Button>
                </Toolbar>
            </AppBar>

        </nav>
    );
}

export default Header;