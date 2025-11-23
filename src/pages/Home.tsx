import React, { useMemo } from "react";
import useSerienData from "../hooks/UseSerienData.tsx";
import Serienübersicht from "../components/Serienübersicht";
import useUIStore from "../store/UIStore.tsx";

// MUI
import { Box, TextField, MenuItem, Button, FormControl, Select, InputLabel, Stack } from "@mui/material";

const Home = () => {
    const { data: shows } = useSerienData("https://api.tvmaze.com/shows");

    const { searchQuery, onChangeQuery, genre, onGenreChange, sort, onSortChange, reset } = useUIStore();

    const filteredShows = useMemo(() => {
        if (!shows) return [];
        let result = [...shows];

        if (searchQuery) {
            result = result.filter((s) => s.name.toLowerCase().includes(searchQuery.toLowerCase()));
        }

        if (genre !== "All") {
            result = result.filter((s) => s.genres.includes(genre));
        }

        if (sort === "title") {
            result.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sort === "rating") {
            result.sort((a, b) => (b.rating?.average || 0) - (a.rating?.average || 0));
        }

        return result;
    }, [shows, searchQuery, genre, sort]);

    return (
        <Box sx={{ pt: 12 }}>
            {/* Filter-Bar - linksbündig und kompakt */}
            <Box sx={{ px: 4, mb: 3 }}>
                <Stack direction="row" spacing={2} alignItems="center" sx={{ width: 'fit-content' }}>
                    {/* Search */}
                    <TextField
                        label="Search title"
                        variant="outlined"
                        value={searchQuery}
                        onChange={(e) => onChangeQuery(e.target.value)}
                        size="small"
                        color="success"
                        sx={{ width: 200 }}
                    />

                    {/* Genre */}
                    <FormControl size="small" sx={{ width: 140 }} color="success">
                        <InputLabel>Genre</InputLabel>
                        <Select value={genre} label="Genre" onChange={(e) => onGenreChange(e.target.value)}>
                            <MenuItem value="All">All</MenuItem>
                            <MenuItem value="Drama">Drama</MenuItem>
                            <MenuItem value="Comedy">Comedy</MenuItem>
                            <MenuItem value="Action">Action</MenuItem>
                            <MenuItem value="Thriller">Thriller</MenuItem>
                        </Select>
                    </FormControl>

                    {/* Sort */}
                    <FormControl size="small" sx={{ width: 140 }} color="success">
                        <InputLabel>Sort</InputLabel>
                        <Select value={sort} label="Sort" onChange={(e) => onSortChange(e.target.value)}>
                            <MenuItem value="title">Title (A-Z)</MenuItem>
                            <MenuItem value="rating">Rating</MenuItem>
                        </Select>
                    </FormControl>

                    {/* Reset */}
                    <Button variant="outlined" size="small" color="success" onClick={reset}>
                        RESET
                    </Button>
                </Stack>
            </Box>

            {/* Serien mittig */}
            <Serienübersicht serien={filteredShows} />
        </Box>
    );
};

export default Home;