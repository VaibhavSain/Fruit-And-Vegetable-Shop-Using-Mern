import './App.css';
import Filter from './components/Filter';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='h-[20rem] flex  flex-col items-center w-full'>
        <Hero />
        <Filter />
      </div>
      <Products />
    </div>
  );
}

export default App;
