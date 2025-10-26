
import React from "react";

const CustomButton = ({ label, icon: Icon, shape = "rounded", onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`flex items-center justify-center gap-2 text-[12px] lg:text-[16px] font-medium text-white bg-secondary-ash transition-all duration-300 rounded-full outline-none ${shape === "circle" ? "w-8 h-8 lg:w-9  lg:h-9" : "px-2 lg:px-5 py-2 lg:py-2.5"
                } shadow-[0_0_10px_rgba(255,255,255,0.4),0_0_20px_rgba(255,255,255,0.1)] hover:bg-[#3a3d42] active:scale-95`}
        >
            {Icon && <Icon size={16} />}
            {label && <span>{label}</span>}
        </button>
    );
};


export default CustomButton;

