import './App.css';
import Filter from './components/Filter';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='h-[20rem] flex flex-col items-center w-full'>
        <Hero />
        <Filter />

      </div>
    </div>
  );
}

export default App;
