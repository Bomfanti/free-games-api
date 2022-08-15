import { createTheme } from '@mui/material/styles';


const darkBlueTheme = createTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#37474f',
      },
      secondary: {
        main: '#f48fb1',
      },
      background: {
        default: '#102027',
        paper: '#424242',
      },
      text: {
        primary: '#f3f2f2',
      },
    },
  })

  export default darkBlueTheme;