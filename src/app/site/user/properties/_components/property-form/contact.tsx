import React from "react";
import { PropertiesFormStepProps } from ".";
import { Button } from "@/components/ui/button";

export const Contact = ({
  currentStep,
  setCurrentStep,
  finalValues,
  setFinalValues,
}: PropertiesFormStepProps) => {
  return (
    <div>
      <span>Contact</span>
      <div className=" flex justify-end gap-5 mt-7"></div>
    </div>
  );
};
