import { Typography } from '@mui/material'


const Detail = () => {
  return (
    <div className='container'>
      <Typography className='title' variant='h2'>Weather-Forecaset</Typography>
      <div className='underline'></div>
      <Typography className='title' variant='h5'>(Temperature is using Fahrenheit (°F))</Typography>
    </div>
  )
}

export default Detail