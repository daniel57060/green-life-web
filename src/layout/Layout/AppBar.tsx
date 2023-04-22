import NotificationsIcon from '@mui/icons-material/Notifications'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Badge from '@mui/material/Badge'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

export default function MainAppBar() {
  return (
    <Box component="header" zIndex={1} width="100%">
      <Toolbar
        sx={{
          pr: '24px', // keep right padding when drawer closed
        }}
      >
        <Typography component="h2" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          Welcome Lorena Kasper
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Box pr={2} />
        <IconButton color="inherit">
          <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" sx={{ width: 56, height: 56 }} />
        </IconButton>
      </Toolbar>
    </Box>
  )
}
