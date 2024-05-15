import React from 'react';
import { useQuery } from 'react-query'

const fetchUser = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return res.json();
}

function App() {
  const { data, error, isLoading } = useQuery('userData', fetchUser);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log('data', data);

  return (
    <div className="App">
      {/* Render your UI components here using the fetched data */}
    </div>
  );
}

export default App;
