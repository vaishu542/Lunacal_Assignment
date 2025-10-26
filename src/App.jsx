import { useState } from 'react'
import Tabs from "./components/Tabs";
import Gallery from "./components/Gallery";
function App() {

  return (


    <div className="min-h-screen  bg-primary-ash text-text-ash pr-12 flex text-sm justify-end items-center font-montserrat ">
      <div className="flex flex-col gap-4 w-[49%] max-w-4xl items-center ">
        <Tabs />
        <div className="border-box h-1 w-[520px] bg-secondary-ash  ml-8 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.1),0_0_20px_rgba(1,1,1,0.9)]">
          {/* Decorative underline */}
        </div>
        <Gallery />
      </div>
    </div>

  )
}

export default App

