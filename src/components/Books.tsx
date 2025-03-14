import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Box, Grid2 as Grid } from '@mui/material';

const books = [1, 2, 4, 5, 6, 7, 8, 9, 10];
const handleBookClick = () => {
    alert("book clicked");
}
export default function Books() {
    return (
        <Grid container spacing={8} p={4}>
            {
                books.map((book) => (
                    <Grid size={4} key={book} display={'flex'} justifyContent={'center'}>
                        <Card sx={{ width: '200px', height: '250px' }}>
                            <CardMedia
                                sx={{ objectFit: 'fill' }}
                                onClick={handleBookClick}
                                component="img"
                                image="https://picsum.photos/200/300"
                                alt="green iguana"
                            />
                        </Card>
                    </Grid>
                ))
            }
        </Grid>

    );
}
