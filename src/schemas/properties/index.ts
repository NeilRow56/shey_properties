import { z } from 'zod'

export const PropertySchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  type: z.string(),
  status: z.string(),
  price: z.number(),
  
})

export const CreatePropertySchema = PropertySchema.omit({ id: true })
export const UpdatePropertySchema = PropertySchema
export const DeletePropertySchema = PropertySchema.pick({ id: true })

export type CreatePropertyValues = z.infer<typeof CreatePropertySchema>
export type UpdatePropertyValues = z.infer<typeof UpdatePropertySchema>
export type DeletePropertyValues = z.infer<typeof DeletePropertySchema>