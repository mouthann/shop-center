
import './App.css'
import { Card } from './components/card';
import { Shoes } from './components/constant';

import { Nav } from './components/nav';
import { ShowDetails } from './components/showDetails';


export function App() {
  return (
    <div className="p-10 xl:px-24 ">

      <Nav />
      <ShowDetails />
      <Card items ={Shoes}/>
    </div>
  )
}
