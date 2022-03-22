import { useAppContext } from '../context';
import {CircularProgress ,Box} from '@mui/material'
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js';
  
import { Line } from 'react-chartjs-2';
  
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


  const LineChart = () => {
    const {dataWeather, loading} = useAppContext()


    const labels = dataWeather?.hour?.map((item, index) => parseInt(index) )
    const tempture = dataWeather?.hour?.map((temp) => temp.temp_f )
    const humidity = dataWeather?.hour?.map((hum) =>  hum.humidity )

    const data = {
        labels,
        datasets: [{
            label: 'Temperature(clickable)',
            data: tempture,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Humidity(clickable)',
            data: humidity,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },]
      };
    
      const options = {
        maintainAspectRatio: false,
        scales: {
        },
        legend: {
          labels: {
            fontSize: 25,
          },
        },
      }
      if (loading) {
        return (
        <Box >
          <CircularProgress />
        </Box>
        )
      }
      return (
        <div className='line_container'>
            <Line data={data} height={400} options={options} />
        </div>
      )
  }

export default LineChart