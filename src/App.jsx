import { useLoaderData } from 'react-router';
import './App.css';
import CoffeeCard from './components/CoffeeCard';
import Banner from './components/Banner';
function App() {
  const coffees = useLoaderData();
  return (
    <>
      <Banner/>
      <div className="max-w-7xl mx-auto m-20">
        <h1 className="text-6xl text-red-500 font-bold text-center mt-5">
          Hot Hot Could Coffee: {coffees.length}
        </h1>
        <div className='grid md:grid-cols-2 gap-2 px-20'>
          {coffees.map(coffee => (
            <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
