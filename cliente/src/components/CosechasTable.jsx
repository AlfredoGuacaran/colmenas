import React, { useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, Paper, LinearProgress } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { selectCosechas } from '../redux/cosechas/cosechas.slice';
import { fetchCosechas } from '../redux/cosechas/cosechas.asycn.actions';

export default function BasicTable() {
  const dispatch = useDispatch();
  const { cosechas, fetchStatus } = useSelector(selectCosechas);

  useEffect(() => {
    dispatch(fetchCosechas());
  }, [dispatch]);

  return (
    <TableContainer component={Paper}>
      {fetchStatus === 'loading' && (
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      )}
      <Table aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Apicultor</TableCell>
            <TableCell align='right'>Colmena</TableCell>
            <TableCell align='right'>Gramos de miel</TableCell>
            <TableCell align='right'>Ultima cosecha</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cosechas?.map((cosecha) => (
            <TableRow key={cosecha._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component='th' scope='row'>
                {cosecha.apicultor}
              </TableCell>
              <TableCell align='right'>{cosecha.colmena}</TableCell>
              <TableCell align='right'>{cosecha.gramosMiel}</TableCell>
              <TableCell align='right'>{cosecha.fechaUltimaCosecha}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
