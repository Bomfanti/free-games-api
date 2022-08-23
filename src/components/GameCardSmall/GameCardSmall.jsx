import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



export default function GameCardSmall({ classes, image, title, subtitle }) {
  return (
    <Card sx={{margin:3, marginTop:10}}>
      <CardMedia component="img"
        height="128"
        image={image}
        sx={{minWidth: 128}}
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {subtitle}
        </Typography>
      </CardContent>
    </Card>
  );
}