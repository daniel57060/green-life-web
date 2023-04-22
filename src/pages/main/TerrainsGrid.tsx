import Link from '@mui/material/Link'
import Table from '@mui/material/Table'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React from 'react'
import { Box } from '@mui/material'

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Nome', width: 250 },
  { field: 'teamCount', headerName: 'Pessoas', width: 130 },
  { field: 'description', headerName: 'Descrição', minWidth: 350, maxWidth: 500 },
]

const rows = Array.from({ length: 10 }, (_, index) => ({
  id: `terrain-${index}`,
  name: `Terreno ${index + 1} 4x4`,
  teamCount: 10,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
}))

function preventDefault(event: React.MouseEvent) {
  event.preventDefault()
}

export default function TerrainsGrid() {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      checkboxSelection={false}
      pagination
      paginationMode="client"
      pageSizeOptions={[10, 20, 50, 100]}
    />
  )
  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Quant. de Pessoas</TableCell>
            <TableCell>Descrição</TableCell>
            <TableCell align="right">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={`terrain-${index}`}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.teamCount}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell align="right">
                <Box display="flex" gap={2}>
                  <Link color="primary" href="#" onClick={preventDefault}>
                    Editar
                  </Link>
                  <Link href="#" onClick={preventDefault}>
                    Excluir
                  </Link>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  )
}
