import { QueryClient } from '@tanstack/react-query'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'
import WeatherCard from "./components/weather-card";

const forecast = [
  { day: "Monday", high: "68°F", low: "55°F", condition: "Cloudy" },
  { day: "Tuesday", high: "70°F", low: "56°F", condition: "Partly Cloudy" },
  { day: "Wednesday", high: "75°F", low: "60°F", condition: "Sunny" },
  { day: "Thursday", high: "73°F", low: "58°F", condition: "Rainy" },
  { day: "Friday", high: "71°F", low: "57°F", condition: "Windy" },
];

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        gcTime: 1000 * 60 * 60 * 24, // 24 hours
      },
    },
  })

  const persister = createSyncStoragePersister({
    storage: window.localStorage,
  })

  return (
    <PersistQueryClientProvider
    client={queryClient}
    persistOptions={{ persister }}
  >
  <div className="bg-gray-900 text-white min-h-screen p-4">
    <h1 className="text-4xl font-bold text-center mb-6">Local Weather App</h1>
    <p className="text-center mb-8">Here is the weather for your location</p>
    <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-8">
    <h2 className="text-2xl font-semibold mb-4">Current Weather</h2>
    <p>Temperature: 72°F</p>
    <p>Condition: Sunny</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {forecast.map((weather) => (
        <WeatherCard key={weather.day} {...weather} />
      ))}
    </div>
  </div>
  </PersistQueryClientProvider>
  )
}

export default App
