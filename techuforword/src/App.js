
import axios from 'axios';
import './App.css';
import Table from './Components/page2/Table';
import Form from './Components/page1/Form';
import { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(); 
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/getAllFormData'); 
      setData(response.data); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <Form />
      <Table data={data} /> 
    </div>
  );
};


export default App;
