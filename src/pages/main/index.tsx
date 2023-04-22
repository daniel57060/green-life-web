import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ConstructionIcon from '@mui/icons-material/Construction'
import GrassIcon from '@mui/icons-material/Grass'
import HomeIcon from '@mui/icons-material/Home'
import LayersIcon from '@mui/icons-material/Layers'
import MenuIcon from '@mui/icons-material/Menu'
import NotificationsIcon from '@mui/icons-material/Notifications'
import PeopleIcon from '@mui/icons-material/People'
import ShoppingCartIcon from '@mui/icons-material/Shop'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import MuiDrawer from '@mui/material/Drawer'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import List, { ListProps } from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import IconListItem from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import React from 'react'

import logo from '../../assets/images/logo.png'
import Chart from './Chart'
import Deposits from './Deposits'
import Orders from './Orders'

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

const drawerWidthClose: number = 64
const drawerWidthOpen: number = 240

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) =>
  open
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
      },
)

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    boxSizing: 'border-box',
    overflowX: 'hidden',
    ...(!open
      ? {
          width: drawerWidthClose,
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }
      : {
          width: drawerWidthOpen,
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }),
  },
}))

function MainContent() {
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
              }}
            >
              <Chart />
            </Paper>
          </Grid>
          {/* Recent Deposits */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
              }}
            >
              <Deposits />
            </Paper>
          </Grid>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Orders />
            </Paper>
          </Grid>
        </Grid>
        <Copyright sx={{ pt: 4 }} />
      </Container>
    </Box>
  )
}

const NavDrawerList = (props: ListProps) => <List component="nav" {...props} />
const DrawerList = styled(NavDrawerList)<ListProps>(({ theme }) => ({
  'color': 'white',
  '& .MuiListItemButton-root': {
    padding: theme.spacing(2),
  },
  '& svg': {
    color: 'white',
  },
  '& .active:hover': {
    backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[900],
  },
  '& .active': {
    backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
    color: '#014023',
  },
  '& .active svg': {
    color: theme.palette.primary.dark,
  },
}))

type ItemId = 'home' | 'merchants' | 'users' | 'terrain-manager' | 'tools' | 'seeds'

type MainDrawerProps = {
  open: boolean
  toggleDrawer: () => void
  activeItem: ItemId
  onClickItem: (item: ItemId) => void
}

function MainDrawer({ open, toggleDrawer, activeItem, onClickItem }: MainDrawerProps) {
  const buttonProps = (itemId: ItemId) => ({
    className: activeItem === itemId ? 'active' : '',
    onClick: () => onClickItem(itemId),
  })
  return (
    <Drawer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
          height: '80px',
        }}
      >
        {open ? (
          <>
            <Box py={0.5}>
              <img src={logo} alt="Green Life logo" style={{ width: '60px' }} />
            </Box>
            <Typography component="h1" fontSize="22px" mr="auto" fontWeight="semi-bold">
              Overview
            </Typography>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon sx={{ color: 'white' }} />
            </IconButton>
          </>
        ) : (
          <Box mx="auto">
            <IconButton color="inherit" aria-label="open drawer" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          </Box>
        )}
      </Toolbar>
      <Divider />
      <DrawerList>
        <ListItemButton {...buttonProps('home')}>
          <IconListItem>
            <HomeIcon />
          </IconListItem>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton {...buttonProps('merchants')}>
          <IconListItem>
            <ShoppingCartIcon />
          </IconListItem>
          <ListItemText primary="Comerciantes" />
        </ListItemButton>
        <ListItemButton {...buttonProps('users')}>
          <IconListItem>
            <PeopleIcon />
          </IconListItem>
          <ListItemText primary="Usuários" />
        </ListItemButton>
        <ListItemButton {...buttonProps('terrain-manager')}>
          <IconListItem>
            <LayersIcon />
          </IconListItem>
          <ListItemText primary="Gestão de Terrenos" />
        </ListItemButton>
        <ListItemButton {...buttonProps('tools')}>
          <IconListItem>
            <ConstructionIcon />
          </IconListItem>
          <ListItemText primary="Ferramentas" />
        </ListItemButton>
        <ListItemButton {...buttonProps('seeds')}>
          <IconListItem>
            <GrassIcon />
          </IconListItem>
          <ListItemText primary="Sementes" />
        </ListItemButton>
      </DrawerList>
    </Drawer>
  )
}

function MainAppBar({ open }: { open: boolean }) {
  return (
    <AppBar position="absolute" open={open}>
      <Toolbar
        sx={{
          pr: '24px', // keep right padding when drawer closed
        }}
      >
        <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export function MainPage() {
  const [activeItem, setActiveItem] = React.useState<ItemId>('home')
  const [open, setOpen] = React.useState(true)
  const toggleDrawer = () => setOpen((it) => !it)

  return (
    <Box sx={{ display: 'flex' }}>
      <MainAppBar open={open} />
      <MainDrawer
        open={open}
        toggleDrawer={toggleDrawer}
        activeItem={activeItem}
        onClickItem={(item) => setActiveItem(item)}
      />
      <MainContent />
    </Box>
  )
}
