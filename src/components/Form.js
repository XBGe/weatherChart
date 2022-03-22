import {Box, InputLabel, MenuItem, FormControl, Select} from '@mui/material';
import { useAppContext } from '../context';


const Form = () => {
  const { query, handleChange, handleSubmit} = useAppContext()

 
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl  fullWidth onSubmit={handleSubmit}>
        <InputLabel id="demo-simple-select-label">City</InputLabel>
        <Select
          value={query}
          label="City"
          onChange={handleChange}
        >
          <MenuItem value='warsaw'>Warsaw</MenuItem>
          <MenuItem value='sydney'>Sydney</MenuItem>
          <MenuItem value='hongkong'>HongKong</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default Form