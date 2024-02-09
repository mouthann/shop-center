
function Navbar() {
  return (
    <nav className=" relative flex flex-wrap items-center justify-between bg-yellow-800">    

<a href="#">
            <svg viewBox="0 0 24 24" width="100" height="100"  xmlns="http://www.w3.org/2000/svg">
              <title>logo</title>
              <path d="M24 7.8L6.442 15.276c-1.456.616-2.679.925-3.668.925-1.12 0-1.933-.392-2.437-1.177-.317-.504-.41-1.143-.28-1.918.13-.775.476-1.6 1.036-2.478.467-.71 1.232-1.643 2.297-2.8a6.122 6.122 0 00-.784 1.848c-.28 1.195-.028 2.072.756 2.632.373.261.886.392 1.54.392.522 0 1.11-.084 1.764-.252L24 7.8z"/>
              </svg>
            </a>



          



             <div className="hidden w-full lg:block lg:w-auto">
              <ul className="flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 text-lg lg:flex-row lg:space-x-8 lg:border-none lg:bg-transparent lg:dark:text-white">
                < li className="cursor-pointer rounded px-3 py-2 lg:hover:bg-transparent lg:hover:textblue-500 bg-blue-500 text-white lg:bg-transparent lg:text-blue-800 false"><a href="#">Home</a></li>
                < li className="cursor-pointer rounded px-3 py-2 lg:hover:bg-transparent lg:hover:textblue-500 bg-blue-500 text-white lg:bg-transparent lg:text-blue-800 false"><a href="#">About</a></li>
                < li className="cursor-pointer rounded px-3 py-2 lg:hover:bg-transparent lg:hover:textblue-500 bg-blue-500 text-white lg:bg-transparent lg:text-blue-800 false"><a href="#">Services</a></li>
                < li className="cursor-pointer rounded px-3 py-2 lg:hover:bg-transparent lg:hover:textblue-500 bg-blue-500 text-white lg:bg-transparent lg:text-blue-800 false"><a href="#">Pricing</a></li>
                < li className="cursor-pointer rounded px-3 py-2 lg:hover:bg-transparent lg:hover:textblue-500 bg-blue-500 text-white lg:bg-transparent lg:text-blue-800 false"><a href="#">Contact</a></li>
              </ul>
              <button type="button" className="rounded-lg p-2 hover:bg-gray-100 dark:text-gray-400 lg-hidden dark:hover:bg-gray-700 focus:ring-gray-200" aria-controls="mobile-menu" aria-expanded="false">
        
        <svg  fill="none" viewBox="0 0 15 15" stroke-width="0" stroke="currentColor" height="25" width="25">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        
      </button>
            </div>

            
            <div className="btn-press-anim fixed bottom-4 left-4 lg-static lg:mr-8">
              <div className="flex-center h-12 w-12 cursor-pointer rounded-full bg-white shadow-md">
              <a href="#">
          
  <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 1 12c0 .5-.5 1-1 1H6a1 1 0 0 1-1-1L6 8h12Z"/>
  </svg>
              </a>
            </div>
            </div>
</nav>
  )
}

export default Navbar