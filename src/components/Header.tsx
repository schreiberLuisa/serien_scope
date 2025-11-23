import {useNavigate} from "react-router-dom";

import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import {translations} from "../locales/translation";
import {useLanguage} from "../context/LanguageContext.tsx";


const Header = () => {
    const navigate = useNavigate();

    const {language, setLanguage} = useLanguage();
    return (
        <nav>
            <AppBar position="absolute"  sx={{backgroundColor: 'rgba(0,51,0,0.55)'}}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
                        {translations[language].title}
                    </Typography>
                    <Button color="inherit" onClick={() => navigate("/")}>{translations[language].title}</Button>
                    <Button color="inherit" onClick={() => navigate("watchlist")}>Watchlist</Button>
                    <Button color="inherit" onClick={() => setLanguage(language === "en" ? "de" : "en")}>

                        {language === "en" ? "DE" : "EN" }
                    </Button>
                </Toolbar>
            </AppBar>

        </nav>
    );
}

export default Header;