import Box from '@mui/material/Box'
import React from 'react'

import FancyContainer from '../../components/FacyContainer'
import MainDrawer, { ItemId } from './Drawer'
import MainAppBar from './AppBar'

export function Layout({ children }: React.PropsWithChildren<{}>) {
  const [activeItem, setActiveItem] = React.useState<ItemId>('home')
  const [open, setOpen] = React.useState(true)
  const toggleDrawer = () => setOpen((it) => !it)

  return (
    <Box sx={{ display: 'flex' }}>
      <MainDrawer
        open={open}
        toggleDrawer={toggleDrawer}
        activeItem={activeItem}
        onClickItem={(item) => setActiveItem(item)}
      />
      <FancyContainer
        component="main"
        sx={{
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <MainAppBar />
        {children}
      </FancyContainer>
    </Box>
  )
}
