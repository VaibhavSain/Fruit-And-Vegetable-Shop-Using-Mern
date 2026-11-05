import { useEffect, useState } from 'react';
import './App.css';
import Filter from './components/Filter';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import axios from "axios";


function App() {

  const [product, setProduct] = useState([]);
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/products");
      setProduct(response.data);
      console.log("data is loaded");
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Header product={product} setProduct={setProduct} />
      <div className='h-[20rem] flex  flex-col items-center w-full'>
        <Hero />
        <Filter setProduct={setProduct} product={product} />
      </div>
      <Products product={product} />
    </div>
  );
}

export default App;
