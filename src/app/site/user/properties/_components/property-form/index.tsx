"use client";
import React, { useState } from "react";
import { Basic } from "./basic";
import { Location } from "./location";
import { Amenities } from "./amenities";
import { Media } from "./media";
import { Contact } from "./contact";
import { Steps } from "antd";

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
  const [currentStep = 0, setCurrentStep] = useState(0);

  const commonPropsForSteps: any = {
    currentStep,
    setCurrentStep,
    finalValues,
    setFinalValues,
  };

  const steps = [
    {
      title: "Basic",
      content: <Basic {...commonPropsForSteps} />,
    },
    {
      title: "Location",
      content: <Location {...commonPropsForSteps} />,
    },
    {
      title: "Amenities",
      content: <Amenities {...commonPropsForSteps} />,
    },
    {
      title: "Media",
      content: <Media {...commonPropsForSteps} />,
    },
    {
      title: "Contact",
      content: <Contact {...commonPropsForSteps} />,
    },
  ];
  return (
    <div>
      {/* steps */}

      <Steps className="text-sm" current={currentStep} items={steps} />

      <div className="mt-8">{steps[currentStep].content}</div>
    </div>
  );
};
