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
 FormDescription,
 FormField,
 FormItem,
 FormLabel,
 FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { PropertySchema } from "@/schemas/properties";
import { Textarea } from "@/components/ui/textarea";
import { propertyStatuses, propertyTypes } from "@/constants";

type Input = z.infer<typeof PropertySchema>;

export const Basic = ({currentStep, setCurrentStep, finalValues, setFinalValues}: PropertiesFormStepProps) => {
  
  const [isPending, startTransition] = useTransition()
  
  const form = useForm<Input>({
    resolver: zodResolver(PropertySchema),
    defaultValues: {
      name: '',
      description: '',
      type: "",
      status: "",
      price: 0
    },
    
  })

  function onFinish(data: Input) {
    setFinalValues({ ...finalValues, basic: data });
    setCurrentStep(currentStep + 1);
    alert(JSON.stringify(data, null, 4));
    console.log(data);
  }
 
  
  return (
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onFinish)} >
        <div className="grid grid-cols-1 lg:grid-cols-3 text-[#1B4242] space-y-8 ">
      <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="col-span-1 lg:col-span-3 mt-8">
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
                <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="col-span-1 lg:col-span-3">
                  <FormLabel className="">Description</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      disabled={isPending}
                      placeholder="Description"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="col-span-1 mr-3">
              <FormLabel>Type</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                value={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a property type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {propertyTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <FormMessage />
            </FormItem>
          )}
        />
            <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem className="col-span-1 mr-2">
              <FormLabel>Status</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                value={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Please input status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {propertyStatuses.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
  control={form.control}
  name="price"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Price</FormLabel>
      <Input type="number" step="1.00" placeholder="Please enter price" {...field} /> 
      
      <FormMessage />
    </FormItem>
  )}
/>
        
      </div>
<div className=" flex justify-end gap-5 mt-7">
<Button className="bg-slate-400 hover:bg-slate-400/80 text-slate-50 font-semibold" disabled={currentStep === 0} onClick={() => setCurrentStep(currentStep - 1)}>Back</Button>
<Button type="submit" className="bg-[#1B4242] hover:bg-[#1B4242]/80" >Next</Button>
  </div>
  </form>
  </Form >
  )
};
