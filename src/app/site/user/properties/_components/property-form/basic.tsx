import React from "react";
import { PropertiesFormStepProps } from ".";
import { Button } from "@/components/ui/button";

export const Basic = ({currentStep, setCurrentStep}: PropertiesFormStepProps) => {
  return (
    <div>
      <span>Basic</span>
<div className=" flex justify-end gap-5 mt-7">
<Button className="bg-slate-400 hover:bg-slate-400/80 text-slate-50 font-semibold" disabled={currentStep === 0} onClick={() => setCurrentStep(currentStep - 1)}>Back</Button>
<Button className="bg-[#1B4242] hover:bg-[#1B4242]/80" onClick={() => setCurrentStep(currentStep + 1)}>Next</Button>
  </div>
  </div>
  )
};
