import * as React from "react";
import { useContext } from "react";
import { styled} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Input from '@mui/material/Input';
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";


import { ColorModeContext } from "../../themes/toggleColorMode";
import Banner from "../Banner/Banner";
import { mainListItems } from "../ListItems/ListItems";
import GameCard from "../Card/GameCard";
import GameCardSmall from "../GameCardSmall/GameCardSmall";

const drawerWidth = 200;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));


const cards = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
];

const games = {
  game: {
    title:'Fortnite',
    subtitle:'Time to choose side!',
    image:'https://images5.alphacoders.com/690/thumb-1920-690653.png'
  },
  game: {
    title:'Fortnite',
    subtitle:'Time to choose side!',
    image:'https://images5.alphacoders.com/690/thumb-1920-690653.png'
  }
}


function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const toggleDrawer = () => {
    setOpen(!open);
  };
  

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="absolute" open={open}>
        <Toolbar
          sx={{
            pr: "24px", color: "#fff"
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Free Games

          </Typography>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            <Input placeholder="Pesquisar" />

          </Typography>
          <IconButton
              color="inherit"
              sx={{ ml: 1}}
              onClick={colorMode.toggleColorMode}
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7 />
              ) : (
                <Brightness4 />
              )}
            </IconButton>
          <IconButton color="inherit"></IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          {mainListItems}
          <Divider sx={{ my: 1 }} />
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3} >
            <Grid item xs={12} >
              <Banner />   
            </Grid>

            <Grid item xs={12} sx={{ display: "flex", flexDirection: "row", alignItems: "center" }} >
              
                <GameCard 
                title={'Fortnite'}
                subtitle={'Time to choose side!'}
                image={
                  'https://progameguides.com/wp-content/uploads/2019/10/fortnite-outfit-scratch.jpg'
                }
                />
                <GameCard 
                title={'Overwatch'}
                subtitle={'What are you waiting?'}
                image={'https://images5.alphacoders.com/690/thumb-1920-690653.png'}
                />
                <GameCard 
                title={'Overwatch'}
                subtitle={'What are you waiting?'}
                image={'https://images5.alphacoders.com/690/thumb-1920-690653.png'}
                />
             
            </Grid>

            <Grid container spacing={4}>
                {cards.map((games)=>(
                  <Grid item key={games} xs={12} sm={6} md={4}>
                    <GameCard 
                    title={games.title}
                    image = {"https://progameguides.com/wp-content/uploads/2019/10/fortnite-outfit-scratch.jpg"}>
                    </GameCard>
                  </Grid>
                ))}
            </Grid>
            
          </Grid>

          <Grid item xs={12} sx={{display: "flex", flexDirection: "row", flexWrap: "wrap"}} >
                  <Grid item xs={12}>
                  <GameCardSmall
                  title={'Overwatch'}
                  subtitle={'What are you waiting?'}
                  image={'https://images5.alphacoders.com/690/thumb-1920-690653.png'}
                  />
                  </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
