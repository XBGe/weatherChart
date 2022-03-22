import {CssBaseline, Box, Container} from '@mui/material'
import Detail from './components/Detail'
import Form from './components/Form'
import LineChart from './components/LineChart'

const app = () => {
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: 'fff', height: '100vh' }} >
          <Detail />
          <Form />
         <LineChart /> 
         </Box>
      </Container>
      
    </div>
  )
}

export default app