import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import {TotalArea, Content, Title, Subtitle} from './styles';

export default function GameCard({image, title, subtitle }) {
  return (
    <Card sx={{margin:2}}>
      <CardMedia component="img"
        height="140"
        image={image}
        sx={{minWidth: 400}}
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>

      </CardContent>
    </Card>
  );
}