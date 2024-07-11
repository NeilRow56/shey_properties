"use client"

import React, { useTransition } from "react";
import { PropertiesFormStepProps } from ".";
import { Button } from "@/components/ui/button";
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Input } from '@/components/ui/input'
import {
 Form,
 FormControl,
 FormField,
 FormItem,
 FormLabel,
 FormMessage,
} from '@/components/ui/form'
import { PropertySchema } from "@/schemas/properties";

export const Basic = ({currentStep, setCurrentStep, finalValues, setFinalValues}: PropertiesFormStepProps) => {
  
  const [isPending, startTransition] = useTransition()
  
  const form = useForm<z.infer<typeof PropertySchema>>({
    resolver: zodResolver(PropertySchema),
    defaultValues: {
      name: '',
      description: '',
      type: "",
      status: "",
      price: undefined
    },
    
  })

  const onFinish = (values: any) => {
    setFinalValues({...finalValues, basic: values})
    setCurrentStep(currentStep + 1)
  }
 
  
  return (
    <Form {...form}>
      <form action="">
        <div className="grid grid-cols-1 lg:grid-cols-3">
      <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="col-span-1 lg:col-span-3">
                      <FormLabel htmlFor="name">Property Name</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          id="name"
                          placeholder="Please input property name"
                          {...field}
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
      </div>
<div className=" flex justify-end gap-5 mt-7">
<Button className="bg-slate-400 hover:bg-slate-400/80 text-slate-50 font-semibold" disabled={currentStep === 0} onClick={() => setCurrentStep(currentStep - 1)}>Back</Button>
<Button className="bg-[#1B4242] hover:bg-[#1B4242]/80" onClick={() => setCurrentStep(currentStep + 1)}>Next</Button>
  </div>
  </form>
  </Form >
  )
};
