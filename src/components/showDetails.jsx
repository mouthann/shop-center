
import nike1 from "../assets/n1.png";
import { QTY, SIZE } from "./constant";
import { Select } from "./select";
export function ShowDetails() {
  return (
    
      <div className="flex h-screen flex-col gap-3 lg:flex-row-reverse">
        <div className="flex-1 ">
          {/* SHOW  image */}
          <div className="h-full lg:-mt-32 pt-28 bg-gradient-to-br from-[#f637cf] from-15% via-[#E3D876] via-40% to-[#4dd4c6]">
          <img className="anim relative" src={nike1} alt="" />
          </div>
          
        </div>
        <div className="flex-1 space-y-4">
          <div className="text-5xl font-black md:text-9xl">Nike Air Max 270</div>
        {/* SHOW  details */}
        <div className="font-medium md:text-3xl">
          {
            "The Nike Air Max 270 is a lifestyle shoe that's sure to turn heads with its vibrant color gradient."
          }
        </div>
        <div className="flex space-x-6 items-center text-gray-800 dark:text-white">
        <h1 className="text-2xl font-extrabold md:text-5xl">$160.00</h1>  

        <Select title={"QTY"} options ={QTY}/>
        <Select title={"SIZE"} options ={SIZE}/>

        


        </div>
        <div className="space-x-4">
        <button className="bg-black h-14 w-44 text-white hover:bg-gray-800 rounded mt-4 active:scale-75 transition active:bg-gray-700">Add to Cart</button>
        <a href="#" className="text-lg font-bold underline underline-offset-4">View details</a>
        </div>
      
        </div>

    </div>
    
    

  )
}
