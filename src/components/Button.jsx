import React from 'react';

const Button = ({ children, onClick, isActive }) => {
  return (
    <button
      onClick={onClick}
      className={`relative flex justify-center items-center lg:px-6 py-3 w-full text-[12px] lg:text-[16px] mx-auto overflow-hidden font-medium transition-all outline-none rounded-2xl group ${isActive ? 'bg-active-bg-ash text-white shadow-[0_-5px_50px_0_rgba(255,255,255,0.15),0_5px_5px_0_rgba(1,1,1,0.9)]' : 'bg-black-theme text-gray-400 hover:text-white shadow-2xl'
        }`}
    >
      
      <span className={`absolute top-0 right-0 w-4 h-4 transition-all duration-500 ease-in-out rounded ${!isActive ? 'group-hover:-mr-4 group-hover:-mt-4' : ''}`}>
        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2" />
      </span>
      <span className={`absolute bottom-0 rotate-180 left-0 w-4 h-4 transition-all duration-500 ease-in-out rounded ${!isActive ? 'group-hover:-ml-4 group-hover:-mb-4' : ''}`}>
        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2" />
      </span>
      <span className={`absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 rounded-md ${!isActive ? 'group-hover:translate-x-0 -translate-x-full bg-[#1b1f21]' : ''}`} />
      <span className="relative text-center text-white">{children}</span>
    </button>
  );
};

export default Button;

