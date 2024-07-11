"use client"
import React, { useState } from "react";
import { Basic } from "./basic";
import { Location } from "./location";
import { Amenities } from "./amenities";
import { Media } from "./media";
import { Contact } from "./contact";
import { cn } from "@/lib/utils";

export interface PropertiesFormStepProps {
  currentStep: number;
  setCurrentStep: (currentStep: number) => void;
  finalValues: any;
  setFinalValues: (finalValues: any) => void;
  
}

export const PropertyForm = () => {

  const [finalValues, setFinalValues] = useState({
    basic: {},
    location: {},
    amenities: {},
    media: {},
    contact: {},
  });

  const [ currentStep, setCurrentStep] = useState(0) 

  const commonPropsForSteps = {
    currentStep,
    setCurrentStep,
    finalValues,
    setFinalValues
    
  };

  const steps = [
    {
      id: '1',
      title: "Basic",
      
      
    },
    {
      id: '2',
      title: "Location",
      
     
    },
    {
      id: '3',
      title: "Amenities",
      
      
    },
    {
      id: '4',
      title: "Media",
      
      
    },
    {
      id: '5',
      title: "Contact",
      
      
    },
  ]
  return <div>
     {/* steps */}
     <nav aria-label='Progress'>
        <ol role='list' className='space-y-4 md:flex md:space-x-8 md:space-y-0'>
          {steps.map((step, index) => (
            <li key={step.title} className='md:flex-1'>
              {currentStep > index ? (
                <div className='group flex w-full items-center gap-3 border-l-4 border-[#1B4242] py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4'>
                  <span className="bg-[#1B4242] w-[33px] h-[33px] rounded-full items-center justify-center text-slate-200 border-slate-100">
                    <div className="text-center pt-1">{step.id}</div>
                  </span>
                  <span className='text-sm font-medium'>{step.title}</span>
                </div>
              ) : currentStep === index ? (
                <div
                  className='flex w-full items-center gap-3 border-l-4 border-[#1B4242] py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4'
                  aria-current='step'
                >
                  <span className="bg-[#1B4242]  w-[33px] h-[33px] rounded-full items-center justify-center text-slate-200 border-slate-100">
                    <div className="text-center pt-1">{step.id}</div>
                  </span>
                  <span className='text-sm font-medium'>{step.title}</span>
                </div>
              ) : (
                <div className='group flex w-full items-center gap-3 border-l-4 border-gray-200 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4'>
                  <span className="bg-slate-200 w-[33px] h-[33px] rounded-full items-center justify-center text-red-500] border-slate-100">
                    <div className="text-center pt-1">{step.id}</div>
                  </span>
                  <span className='text-sm font-medium'>{step.title}</span>
                </div>
              )}
            </li>
          ))}
        </ol>
      </nav>

      
     <div className="mt-8">
      {currentStep === 0 && (
          
          <Basic {...commonPropsForSteps} />
          
        )}
      {currentStep === 1 && (
          
          <Location  {...commonPropsForSteps}/>
          
        )}
      {currentStep === 2 && (
          
          <Amenities  {...commonPropsForSteps}/>
          
        )}
      {currentStep === 3 && (
          
          <Media {...commonPropsForSteps}/>
          
        )}
      {currentStep === 4 && (
          
          <Contact  {...commonPropsForSteps}/>
          
        )}
      </div>
  </div>;
};
