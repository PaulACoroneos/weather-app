import { useQuery } from '@tanstack/react-query';

export const useGetWeatherForecast = ({latitude,longitude}:{latitude?: number, longitude?: number}) => {
  const fetchWeatherForecast = async (latitude?: number, longitude?: number) => {
    if(!latitude || !longitude) return;

    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch weather forecast');
    }

    return response.json();
  };

    return useQuery({
      queryKey: ['forecast', latitude, longitude],
      queryFn: () => fetchWeatherForecast(latitude, longitude),
      enabled: !!latitude && !!longitude,
    });
};
