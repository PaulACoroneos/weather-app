import { useState, useEffect } from 'react';

const useGetNavigatorLocation = () => {
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.');
      return;
    }

    const handleSuccess = (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords;
      console.log('position',position)
      setLocation({ latitude, longitude });
    };

    const handleError = (error: GeolocationPositionError) => {
      console.log("we failed",error)
      setError(error.message);
    };

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);

  return { latitude: location?.latitude, longitude: location?.longitude, error };
};

export default useGetNavigatorLocation;