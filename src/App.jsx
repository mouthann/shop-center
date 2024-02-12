
import './App.css'
import { Nav } from './components/nav';
import { ShowDetails } from './components/showDetails';



export function App() {
  return (
    <div className="p-10 xl:px-24 ">

      <Nav />
      <ShowDetails />
    </div>
  )
}
