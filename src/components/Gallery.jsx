
import React, { useState, useCallback, useRef } from "react";
import CustomButton from "./CustomButton";
import { ArrowLeft, ArrowRight, CircleQuestionMark } from "lucide-react";
import menu from '../assets/menu.svg';
import img_1 from '../assets/3.jpg';
import img_2 from '../assets/2.jpg';
import img_3 from '../assets/1.jpg';
import img_4 from '../assets/4.jpg';

export default function Gallery() {
    const [images, setImages] = useState([
        img_1,
        img_2,
        img_3,
        img_4,
    ]);
    const [startIndex, setStartIndex] = useState(0);
    const inputRef = useRef(null);
    const handleAddImage = useCallback((e) => {
        const file = e.target.files[0];
        if (file) {
            const newImage = URL.createObjectURL(file);
            setImages((prev) => [newImage, ...prev]);
        }
        e.target.value = null;
    }, []);

    const handlePrev = () => {
        setStartIndex((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const handleNext = () => {
        setStartIndex((prev) => (prev < images.length - 3 ? prev + 1 : prev));
    };

    const visibleImages = images.slice(startIndex, startIndex + 3);

    return (
        <div className="flex flex-col items-center gap-4 w-full ">
            <div className="bg-secondary-ash w-[95%] px-4 py-6 rounded-2xl shadow-lg flex justify-start gap-4 ">
                <div className="left_icons flex flex-col items-center  mt-2">
                    <CircleQuestionMark />
                    <img src={menu} alt="Grid" width={20} className="mt-20" />
                </div>
                <div className="gallery-sec w-[90%] ">


                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold bg-black-theme py-2 px-8 rounded-2xl text-white text-[12px] lg:text-[16px]">
                            Gallery
                        </h2>
                        <div className="flex items-center gap-3">
                            <label className="cursor-pointer">
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleAddImage}
                                />
                                <CustomButton
                                    label="+ ADD IMAGE"
                                    onClick={() => inputRef.current?.click()}
                                />
                                <input
                                    ref={inputRef}
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleAddImage}
                                />
                            </label>
                            <CustomButton icon={ArrowLeft} shape="circle" onClick={handlePrev} />
                            <CustomButton icon={ArrowRight} shape="circle" onClick={handleNext} />
                        </div>
                    </div>


                    <div className="overflow-hidden mt-8 flex justify-center">
                        <div className="w-xl overflow-hidden">
                            <div
                                className="flex gap-4 transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${startIndex * (176 + 16)}px)` }}
                            >
                                {images.map((img, idx) => (
                                    <div key={idx} className="shrink-0">
                                        <img
                                            src={img}
                                            alt="gallery"
                                            className="w-41 h-35 rounded-3xl object-cover grayscale hover:grayscale-0 hover:scale-105 hover:-rotate-8 transition-all duration-300 ease-in-out"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-box h-1 w-[520px] bg-secondary-ash  ml-8 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.1),0_0_20px_rgba(1,1,1,0.9)]">
                {/* Decorative underline */}
            </div>
        </div>

    );
}

