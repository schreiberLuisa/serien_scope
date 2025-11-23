import {Grid, Box} from "@mui/material";
import SerienCard from "../components/SerienCard"
import type ISerie from "../interface/ISerie";

interface ISerienProps{
    serien: ISerie[]
}

const Serienübersicht = ({serien}:ISerienProps) =>{
    return(
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            px: 2
        }}>
            <Box sx={{ maxWidth: 1200, width: '100%' }}>
                <Grid container spacing={3}>
                    {serien.map((serie, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={index}>
                            <SerienCard data={serie}/>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    )
}

export default Serienübersicht;