
import nike1 from "../assets/nike1.png";
export function ShowDetails() {
  return (
    
      <div className="flex flex-col  lg:flex-row-reverse">
        <div className="flex-1 ">
          {/* SHOW  image */}
          <div className="bg-gradient-to-br from-[#f637cf] from-15% via-[#E3D876] via-40% to-[#4dd4c6]">
          <img src={nike1} alt="" />
          </div>
          
        </div>
        <div className="flex-1 space-y-6">
          <div className="text-5xl font-black md:text-9xl">Nike Air Max 270</div>
        {/* SHOW  details */}
        <div className="font-medium md:text-3xl">
          {
            "The Nike Air Max 270 is a lifestyle shoe that's sure to turn heads with its vibrant color gradient."
          }
        </div>
        <div className="text-3xl font-extrabold md:text-6xl">$160.00</div>
        <div className="space-x-5">
        <button className="bg-black h-14 w-44 text-white hover:bg-gray-800 rounded mt-4  avtive:bg-gray-700">Add to Cart</button>
        <a href="#" className="text-lg font-bold underline underline-offset-4">View details</a>
        </div>
      
        </div>

    </div>
    
    

  )
}
