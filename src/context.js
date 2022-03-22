import React, {useState, useContext, useEffect} from "react"
import axios from "axios"


const API_ENDPOINT = 'http://api.weatherapi.com/v1/forecast.json?'


const AppContext = React.createContext()

const AppProvider = ({children}) => {
  const [dataWeather, setDataWeather] = useState([])
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState('sydney')


  const fetchData = async (url) => {
    setLoading(true)
    const response = await axios(url).catch((error) => console.log(error))
    const data = response.data
    setDataWeather(data.forecast.forecastday[0])
    setLoading(false)
    
  }
  const handleChange = (e) => {
    setQuery(e.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
  }
  useEffect(() => {
    fetchData(`${API_ENDPOINT}key=${process.env.REACT_APP_API_KEY}&q=${query}&days=1&aqi=no&alerts=no`)
  }, [query])
 

 
  return (
    <AppContext.Provider value={{loading, dataWeather, query, handleChange, handleSubmit}}>
    {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }