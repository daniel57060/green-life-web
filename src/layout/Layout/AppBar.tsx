import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import NotificationsIcon from '@mui/icons-material/Notifications'
import Avatar from '@mui/material/Avatar'
import Box, { BoxProps } from '@mui/material/Box'
import Badge from '@mui/material/Badge'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import { drawerWidthClose, drawerWidthOpen } from './Drawer'

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

const AppBarHeader = (props: BoxProps) => <Box component="header" {...props} />
const AppBar = styled(AppBarHeader, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  ...(open
    ? {
        marginLeft: drawerWidthOpen,
        width: `calc(100% - ${drawerWidthOpen}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }
    : {
        marginLeft: drawerWidthClose,
        width: `calc(100% - ${drawerWidthClose}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      }),
}))

type MainAppBarProps = {
  open: boolean
}

export default function MainAppBar({ open }: MainAppBarProps) {
  return (
    <AppBar position="absolute" open={open}>
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
    </AppBar>
  )
}
