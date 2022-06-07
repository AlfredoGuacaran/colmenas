import colmenaLogo from './colmena.png';
import './App.css';
import { Typography, Grid } from '@mui/material';
import FormNewCosecha from './components/FormNewCosecha';
import CosechasTable from './components/CosechasTable';

function App() {
  return (
    <div className='App'>
      <Grid sx={{ p: 2 }} container direction='row' justifyContent='center' alignItems='center' spacing={2}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <header className='App-header'>
            <img src={colmenaLogo} className='App-logo' alt='logo' />
            <Typography variant='h5' gutterBottom component='div'>
              Registro de cosechas
            </Typography>
          </header>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6}>
          <FormNewCosecha />
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <CosechasTable />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
