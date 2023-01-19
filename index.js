import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import moment from 'moment';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        'https://api.coinmarketcap.com/v1/ticker/',
      );

      setData(result.data);
    }

    fetchData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Last Updated</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.price_usd}</td>
            <td>{moment.unix(item.last_updated).format('MM/DD/YYYY h:mm A')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
