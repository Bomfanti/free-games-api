import { Box, Card, CardContent, CardMedia, styled } from '@mui/material';

export const TotalArea = styled(Card)(({  }) => ({
	marginBottom: '10px',
	display: 'flex',
	justifyContent: 'center',
	height: '400px',
	textDecoration: 'none',
    borderRadius: 16,
    transition: '0.2s',
    '&:hover': {
      transform: 'scale(1.1)'
    }
}));

export const Content = styled(Box)(({  }) => ({
	width: '100%',
	display: 'flex',
	justifyContent: 'flex-end',
	flexDirection: 'column',
	position: 'relative',
}));

export const Title = styled(CardMedia)(({  }) => ({
	position: 'absolute',
	top: 0,
	right: 0,
	height: '100%',
	width: '100%',
	backgroundColor: 'rgba(0,0,0,0.575)',
	backgroundBlendMode: 'darken',
}));

export const Subtitle = styled(CardContent)(({ theme }) => ({
	color: '#fff',
	width: '40%',
	[theme.breakpoints.down('sm')]: {
		width: '100%',
	},
	position: 'relative',
	backgroundColor: 'transparent',
}));