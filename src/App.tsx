import { Box, Container, Typography } from '@mui/material'
import Copyright from './Copyright'
import ProTip from './ProTip'

// https://github.com/mui/material-ui/blob/master/examples/material-vite/src/App.jsx
export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Material UI Vite.js example
        </Typography>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  )
}
