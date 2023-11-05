import { useState } from 'react';
import './App.css';
import axios from 'axios'

function App() {
  const [data, setData] = useState(null)

  const fetchData = () => {
    axios.get('http://localhost:1000/hello')
    .then((response) => {
      console.log(response)
      setData(response.data.result)
    })
    .catch((error) => {
      console.error(error)
      setData("An error occurred")
    })
  }

  return (
    <div className="App">
      <h1>Press button for data</h1>
      <button onClick={fetchData}>Fetch</button>
      <h2>{data}</h2>
    </div>
  );
}

export default App;
