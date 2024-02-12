import { CgShoppingCart } from "react-icons/cg"; 
import Nikelogo from "../assets/nikelogo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
const ROUTES = [
  "Home",
  "About",
  "Services",
  "Pricing",
  "Contact"
]
export function Nav() {
const [mobileMenuShow, setMobileMenuShow]=useState(false);
  return (
    <nav className="z-10 relative flex flex-wrap items-center justify-between">
      <a href="">
        <Nikelogo className="w-20  h-20"/>

      </a>
      <button onClick={() => setMobileMenuShow(!mobileMenuShow)} className="lg:hidden rounded-lg p-2 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200">
        <RxHamburgerMenu size={25}/>

      </button >

      <div className={`${mobileMenuShow=== false && "hidden"} w-full lg:w-auto lg:block`}>

      <ul className="lg:space-x-8 lg:bg-transparent lg:border-none lg:flex-row flex flex-col rounded-lg border-gray-100 bg-gray-50 text-lg ">
   {ROUTES.map((route, index) => {
    return(<li className={`cursor-pointer rounded px-3 py-2 ${index===0 ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500" : index<3? "text-gray-800 hover:text-blue-400":"text-white hover:text-blue-400"   }`} key={route} >{route}</li>)
   })}
      </ul>
      </div>
      {/* card button */}
      <div className="fixed bottom-4 left-4 mr-14  ml-14 lg:static cursor-pointer">
        <div className="bg-slate-300 w-10 h-10 flex-center rounded-full border-slate-500 border-2 hover:bg-transparent">
        <CgShoppingCart />
        </div>
      
      </div>
      
    </nav>
  )
}

