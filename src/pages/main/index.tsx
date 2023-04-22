import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

import { Layout } from '../../layout/Layout'
import Statistics from './Statistics'
import TerrainsGrid from './TerrainsGrid'

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export function MainPage() {
  return (
    <Layout>
      {/* <Toolbar /> */}
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Recent Orders */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 700 }}>
              <TerrainsGrid />
            </Paper>
          </Grid>
          {/* Recent Deposits */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 700,
              }}
            >
              <Statistics />
            </Paper>
          </Grid>
        </Grid>
        <Copyright sx={{ pt: 4 }} />
      </Container>
    </Layout>
  )
}
