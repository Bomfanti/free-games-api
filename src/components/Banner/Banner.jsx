import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@material-ui/core/Box';
import {Container, StyledCard, StyledCardContent, StyledCardMedia,} from './styles';


export default function GameCard() {
  return (
		<Container >
			<StyledCard>
				<StyledCardMedia
					media='picture'
					alt="lol"
					image="https://4.bp.blogspot.com/-b3tAEysEikg/XILpTep43TI/AAAAAAAADms/JadYkLEfmU4XavK_-hRVeRHv9SKYZextgCKgBGAs/w0/fuzz-fizz-splash-art-prestige-edition-splash-art-lol-uhdpaper.com-4K-52.jpg"
				/>
				<Box padding='20px'>
					<StyledCardContent>
						<Typography variant='h5' gutterBottom>
							Fizz
						</Typography>
						<Typography variant='body2'>The Tidal Trickster</Typography>
					</StyledCardContent>
				</Box>
			</StyledCard>
		</Container>
	);
};