// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Timeline from './Timeline';
import Summary from './Summary';

const App = () => {
    // State to store fetched data
    const [data, setData] = useState([]);

    // Function to fetch data from API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/data'); // Example API endpoint
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <Timeline data={data} />
            <Summary data={data} />
        </div>
    );
};

export default App;
