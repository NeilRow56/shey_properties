import { z } from 'zod'

export const PropertySchema = z.object({
  id: z.string(),
  name: z.string().min(2, { message: 'Name must be at least 2 characters' })
  .max(45, { message: 'Name must be less than 45 characters' }),
  description: z.string().min(1, { message: 'Please input a description!' }),
  type: z.string().min(1, { message: 'Please input property type!' }),
  status: z.string().min(1, { message: 'Please input status!' }),
  price: z
  .number()
  .positive({ message: "Value must be positive" })
  .int({ message: "Value must be an integer" })
  .or(z.string())
  .pipe(
    z.coerce
      .number()
      .positive({ message: "Value must be positive" })
      .int({ message: "Value must be an integer" })
  ),
  
})

export const CreatePropertySchema = PropertySchema.omit({ id: true })
export const UpdatePropertySchema = PropertySchema
export const DeletePropertySchema = PropertySchema.pick({ id: true })

export type CreatePropertyValues = z.infer<typeof CreatePropertySchema>
export type UpdatePropertyValues = z.infer<typeof UpdatePropertySchema>
export type DeletePropertyValues = z.infer<typeof DeletePropertySchema>

//    <input
// {...register('numberInput', {
//   setValueAs: (value) => Number(value),
// })}
// type="number"
// />