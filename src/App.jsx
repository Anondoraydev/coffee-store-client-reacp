import { Link, useLoaderData } from 'react-router';
import './App.css';
import CoffeeCard from './components/CoffeeCard';
import { GiCoffeeCup } from "react-icons/gi";
import Banner from './components/Banner';
import Glaray from './components/Glaray';
function App() {
  const coffees = useLoaderData();
  return (
    <>
      <Banner />
      <div className="max-w-7xl mx-auto m-20">
        <div className='text-center pb-5'>
          <p className='text-[#1B1A1A] text-center font-[Rancho]'>--- Sip & Savor ---</p>
          <h1 className="text-6xl text-red-500 font-bold text-center mt-5 font-[Rancho]">
            Hot Hot Could Coffee: {coffees.length}
          </h1>
          <Link  to={'/addCoffee'}>
            <button className='btn bg-[#E3B577] text-white mt-6 font-[Rancho]'>Add Coffee <GiCoffeeCup className='text-xl ' /></button>
          </Link>
        </div>
        <div className='grid md:grid-cols-2 gap-2 px-20'>
          {coffees.map(coffee => (
            <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
          ))}
        </div>
      </div>
      <Glaray/>
    </>
  );
}

export default App;
