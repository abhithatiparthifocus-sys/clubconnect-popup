import { z } from 'zod'
export const contactSchema = z.object({
  name:z.string().trim().min(2,'Please enter your name.').max(100),
  email:z.string().trim().email('Please enter a valid email.').max(255),
  phone:z.string().trim().min(7,'Please enter a phone number.').max(25).regex(/^[+\d\s()-]+$/,'Please enter a valid phone number.'),
  interest:z.enum(['General enquiry','Membership','Sports & leisure','Dining','Stay & celebrations']),
  message:z.string().trim().min(5,'Please add a short message.').max(2000),
  website:z.string().max(0).optional(),
})