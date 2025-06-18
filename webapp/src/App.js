import React, { useEffect, useState } from 'react';
import apiClient from './api';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    apiClient.get('/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('API fetch error:', error));
  }, []);

  return (
    <div className="App">
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
