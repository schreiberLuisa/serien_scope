import React from 'react';
import useWatchlistStore from "../store/WatchlistStore";
import {AppBar, Box, Button, Grid, Toolbar } from "@mui/material";
import SerienCard from "../components/SerienCard";

function Watchlist() {
    const {elements, removeElement, removeAll} = useWatchlistStore();
    return (
        <div>

            <Button onClick={() => removeAll}>Remove all</Button>
            <Grid container justifyContent="space-between" alignItems="stretch">
                {elements.map((serie, index) => (
                    <SerienCard key={index} data={serie}/>
                ))}
            </Grid>
        </div>
    );
}

export default Watchlist;