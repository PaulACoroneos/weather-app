import useGetNavigatorLocation from "../hooks/use-get-navigator-location";
import { useGetWeatherForecast } from "../hooks/use-get-weather-forecast";

type WeatherCardProps = {
  day: string;
  high: string;
  low: string;
  condition: string;
};

const WeatherCard: React.FC<WeatherCardProps> = ({ day, high, low, condition }) => {
  const { latitude, longitude} = useGetNavigatorLocation();
  const {data, isLoading} = useGetWeatherForecast({latitude: 32.776665 ,longitude: -96.796989});
  console.log('data',data, latitude,longitude)
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2">{day}</h3>
      <p>High: {high}</p>
      <p>Low: {low}</p> 
      <p>Condition: {condition}</p>
    </div>
  );
};

export default WeatherCard;