
import React, { useState } from "react";
import menu from '../assets/menu.svg';
import Button from './Button';
import { CircleQuestionMark } from "lucide-react";

export default function Tabs() {
  const [active, setActive] = useState("About Me");

  const tabs = ["About Me", "Experiences", "Recommended"];

  const content = {
    "About Me": [
      "Hello! I'm Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.",
      "I am deeply passionate about learning and continuously improving my skills, both in sales and personal development.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "In my free time, I enjoy reading books, attending webinars, and exploring new technologies to stay ahead in my field.",
      "Another paragraph here for more details.",
      "I believe that curiosity and a growth mindset are key to success in any career, and I love sharing knowledge with my colleagues.",

    ],
    "Experiences": [
      "I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters - Emma and Ella.",
      "Both of them are just starting school, so my calendar is usually blocked between 9–10 AM.",
      "This is a wonderful time in my life balancing work and family!"
    ],
    "Recommended": [
      "I highly recommend checking out Salesforce’s learning programs and team activities.",
      "They’re great for both personal and professional growth!"
    ]
  };


  return (
    <div className="flex flex-col items-center gap-4 w-full md:text-sm">


      <div className="bg-secondary-ash md:pl-3 lg:px-5 py-6 rounded-2xl shadow-2xl w-full md:w-[95%] max-w-2xl mx-auto flex flex-col md:flex-row justify-start gap-4">
        <div className="left_icons flex flex-row md:flex-col items-center mt-2 gap-4 md:gap-0">
          <CircleQuestionMark />
          <img src={menu} alt="Grid" width={20} className="mt-0 md:mt-20" />
        </div>
        <div className="about-sec w-full">

          <div className="capitalize flex flex-wrap md:flex-nowrap flex-col sm:flex-row justify-center md:justify-evenly items-center md:gap-2 lg:gap-4 mb-4 p-2 rounded-2xl bg-black-theme w-full">
            {tabs.map((tab) => (
              <Button
                key={tab}
                onClick={() => setActive(tab)}
                isActive={active === tab}
              >
                {tab}
              </Button>
            ))}
          </div>

          <div className="relative h-34 overflow-y-auto pr-2 custom-scrollbar w-[90%] lg:w-full ">
            <div className="leading-relaxed text-[16px] text-text-ash">
              {content[active].map((para, index) => (
                <p key={index} className="mb-2">{para}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
