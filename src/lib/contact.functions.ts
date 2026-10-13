import { createServerFn } from '@tanstack/react-start'
import { contactSchema } from './contact-schema'
export const submitContact = createServerFn({method:'POST'})
  .inputValidator(contactSchema)
  .handler(async ({data}) => {
    const {supabaseAdmin} = await import('@/integrations/supabase/client.server')
    const {website: _honeypot, ...submission} = data
    const {error} = await supabaseAdmin.from('contact_submissions').insert(submission)
    if (error) return {ok:false, message:'Your enquiry could not be saved. Please try again or call the club.'}
    return {ok:true, message:'Thank you. Your enquiry has been received by Guntur Club.'}
  })