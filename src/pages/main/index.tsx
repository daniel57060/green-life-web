import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import MenuIcon from '@mui/icons-material/Menu'
import NotificationsIcon from '@mui/icons-material/Notifications'
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
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import React from 'react'

import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import HomeIcon from '@mui/icons-material/Home'
import ShoppingCartIcon from '@mui/icons-material/Shop'
import PeopleIcon from '@mui/icons-material/People'
import ConstructionIcon from '@mui/icons-material/Construction'
import GrassIcon from '@mui/icons-material/Grass'
import Layers2Icon from '@mui/icons-material/Psychology'

import Chart from './Chart'
import Deposits from './Deposits'
import Orders from './Orders'

import logo from '../../assets/images/logo.png'

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

const drawerWidth: number = 240

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
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
  ['& svg']: {
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
        }}
      >
        <Box py={0.5}>
          <img src={logo} alt="Green Life logo" style={{ width: '60px' }} />
        </Box>
        <Typography component="h1" fontSize="22px" mr="auto" fontWeight="semi-bold">
          Overview
        </Typography>
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon sx={{ color: 'white' }} />
        </IconButton>
      </Toolbar>
      <Divider />
      <DrawerList>
        <ListItemButton {...buttonProps('home')}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton {...buttonProps('merchants')}>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Comerciantes" />
        </ListItemButton>
        <ListItemButton {...buttonProps('users')}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Usuários" />
        </ListItemButton>
        <ListItemButton {...buttonProps('terrain-manager')}>
          <ListItemIcon>
            <Layers2Icon />
          </ListItemIcon>
          <ListItemText primary="Gestão de Terrenos" />
        </ListItemButton>
        <ListItemButton {...buttonProps('tools')}>
          <ListItemIcon>
            <ConstructionIcon />
          </ListItemIcon>
          <ListItemText primary="Ferramentas" />
        </ListItemButton>
        <ListItemButton {...buttonProps('seeds')}>
          <ListItemIcon>
            <GrassIcon />
          </ListItemIcon>
          <ListItemText primary="Sementes" />
        </ListItemButton>
      </DrawerList>
    </Drawer>
  )
}

function MainAppBar({ open, toggleDrawer }: { open: boolean; toggleDrawer: () => void }) {
  return (
    <AppBar position="absolute" open={open}>
      <Toolbar
        sx={{
          pr: '24px', // keep right padding when drawer closed
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            marginRight: '36px',
            ...(open && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
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
      <MainAppBar open={open} toggleDrawer={toggleDrawer} />
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
