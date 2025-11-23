import {Button, Card, CardActions, CardContent, CardMedia, Chip, Stack, Typography, Box} from "@mui/material";
import type ISerie from "../interface/ISerie";
import useWatchlistStore from "../store/WatchlistStore";

interface ISerienCard {
    data: ISerie;
}

const SerienCard = ({data}: ISerienCard) =>{
    const {elements, addElement, removeElement} = useWatchlistStore();
    const isInWatchlist = elements.some(item => item.id === data.id);

    return(
        <Card sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '550px'  // Feste Mindesthöhe für alle Cards
        }}>
            <Box sx={{
                height: 350,
                overflow: 'hidden',
                backgroundColor: '#f5f5f5'
            }}>
                <CardMedia
                    component="img"
                    image={data.image?.medium || data.image?.original || ""}
                    title={data.name}
                    sx={{
                        height: '100%',
                        width: '100%',
                        objectFit: "cover"
                    }}
                />
            </Box>
            <CardContent sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                gap: 1.5,
                p: 2
            }}>
                <Typography variant="h6" component="div" sx={{
                    minHeight: '3.5rem',
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical'
                }}>
                    {data.name}
                </Typography>

                <Stack direction="row" spacing={1}>
                    <Chip
                        label={new Date(data.premiered).getFullYear() || "Unknown"}
                        variant="filled"
                        size="small"
                    />
                    <Chip
                        label={data.rating?.average ? `⭐ ${data.rating.average}` : "No rating"}
                        color="success"
                        variant="filled"
                        size="small"
                    />
                </Stack>

                {data.genres && data.genres.length > 0 && (
                    <Box sx={{
                        minHeight: '60px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 0.5
                    }}>
                        {data.genres.slice(0, 3).map((genre : string) => (
                            <Chip
                                key={genre}
                                label={genre}
                                variant="outlined"
                                size="small"
                            />
                        ))}
                    </Box>
                )}
            </CardContent>
            <CardActions sx={{ mt: 'auto', p: 2, pt: 0 }}>
                <Button
                    fullWidth
                    variant="contained"
                    color="success"
                    onClick={() => {
                        if (isInWatchlist) {
                            removeElement(data.id);
                        } else {
                            addElement(data);
                        }
                    }}
                >
                    {isInWatchlist ? "REMOVE FROM WATCHLIST" : "ADD TO WATCHLIST"}
                </Button>
            </CardActions>
        </Card>
    )
}

export default SerienCard;