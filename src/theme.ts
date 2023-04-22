import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: '#05A66B',
      dark: '#02734A',
    },
    error: {
      main: red.A400,
    },
  },
})

export default theme
