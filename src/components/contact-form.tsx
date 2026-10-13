import { useState, type FormEvent } from 'react'
import { useServerFn } from '@tanstack/react-start'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { contactSchema } from '@/lib/contact-schema'
import { submitContact } from '@/lib/contact.functions'

export function ContactForm() {
  const send = useServerFn(submitContact)
  const [busy,setBusy] = useState(false)
  const [error,setError] = useState('')
  const [success,setSuccess] = useState(false)
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();setError('')
    const parsed = contactSchema.safeParse(Object.fromEntries(new FormData(event.currentTarget)))
    if (!parsed.success) {setError(parsed.error.issues[0]?.message ?? 'Please check your details.');return}
    setBusy(true)
    try { const result=await send({data:parsed.data}); if(result.ok) setSuccess(true); else setError(result.message) }
    catch {setError('Your enquiry could not be saved. Please try again or call 0863-2233703.')}
    finally {setBusy(false)}
  }
  if(success) return <div className="form-success" role="status"><CheckCircle2 size={38}/><h3>Thank you for reaching out.</h3><p>Your enquiry has been received by Guntur Club.</p><Button variant="outline" onClick={()=>setSuccess(false)}>Send another enquiry</Button></div>
  return <form onSubmit={submit} className="contact-form">
    <div className="form-grid"><label>Full name<input name="name" autoComplete="name" placeholder="Your name" required minLength={2} maxLength={100}/></label><label>Phone number<input name="phone" type="tel" autoComplete="tel" placeholder="Your phone number" required minLength={7} maxLength={25}/></label></div>
    <label>Email address<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={255}/></label>
    <label>I'm interested in<select name="interest" defaultValue="General enquiry">{['General enquiry','Membership','Sports & leisure','Dining','Stay & celebrations'].map(x=><option key={x}>{x}</option>)}</select></label>
    <label>Your message<textarea name="message" placeholder="How can we help you?" rows={3} required minLength={5} maxLength={2000}/></label>
    <input className="honeypot" name="website" tabIndex={-1} aria-hidden="true" autoComplete="off"/>
    {error && <p className="form-error" role="alert">{error}</p>}
    <Button type="submit" size="lg" disabled={busy} className="submit-button">{busy?'Sending enquiry…':'Send enquiry'}<ArrowUpRight/></Button>
  </form>
}