import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { Link, useLocation } from '@tanstack/react-router'
import { Menu, X, ArrowUpRight, Phone, Mail, MapPin, Download, Crown } from 'lucide-react'
import * as Dialog from '@radix-ui/react-dialog'
import { Button } from '@/components/ui/button'
import { ContactForm } from './contact-form'
import { photos, address, brochureUrl } from '@/lib/club'
const ContactContext = createContext(()=>{})
export const useContact = ()=>useContext(ContactContext)
const navigation = [{to:'/',label:'Home'},{to:'/heritage',label:'Our Heritage'},{to:'/amenities',label:'Amenities'},{to:'/stay-celebrate',label:'Stay & Celebrate'},{to:'/affiliations',label:'Affiliations'},{to:'/contact',label:'Contact'}] as const
export function ClubShell({children}:{children:ReactNode}) {
  const [open,setOpen]=useState(false)
  const [menu,setMenu]=useState(false)
  const location=useLocation()
  useEffect(()=>{const timer=setTimeout(()=>setOpen(true),900);return ()=>clearTimeout(timer)},[])
  useEffect(()=>setMenu(false),[location.pathname])
  return <ContactContext.Provider value={()=>setOpen(true)}>
    <div className="topline"><span>A LEGACY OF PRESTIGE, SINCE 1929</span><a href="tel:08632233703"><Phone size={12}/>0863 2233 703</a></div>
    <header className="site-header"><Link to="/" className="brand"><span className="brand-seal"><Crown size={22}/><span>GC</span></span><span className="brand-name">Guntur Club<small>ESTABLISHED 1929</small></span></Link>
    <nav className={menu?'main-nav is-open':'main-nav'} aria-label="Main navigation">{navigation.map(item=><Link key={item.to} to={item.to} activeOptions={{exact:true}} activeProps={{className:'active'}}>{item.label}</Link>)}</nav>
    <Button onClick={()=>setOpen(true)} className="header-contact">Get in touch<ArrowUpRight/></Button><Button variant="ghost" size="icon" className="mobile-menu" aria-label={menu?'Close navigation':'Open navigation'} onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</Button></header>
    <main>{children}</main>
    <section className="contact-band"><div><p className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</p><h2>Make yourself part of the legacy.</h2></div><Button onClick={()=>setOpen(true)} size="lg">Connect with us<ArrowUpRight/></Button></section>
    <footer className="site-footer"><div className="footer-top"><div><Link to="/" className="footer-brand">Guntur Club</Link><p>Prestige. Fellowship. A way of life.</p><a className="brochure-link" href={brochureUrl} target="_blank" rel="noreferrer"><Download size={15}/>Club brochure 2026</a></div><div><h4>Explore the club</h4>{navigation.slice(1,5).map(x=><Link key={x.to} to={x.to}>{x.label}</Link>)}</div><div className="footer-contact"><h4>We'd love to hear from you</h4><a href="https://www.google.com/maps/search/?api=1&query=Guntur+Club+Palakaluru+Road" target="_blank" rel="noreferrer"><MapPin size={16}/>{address}</a><a href="tel:08632233703"><Phone size={16}/>0863 2233 703 · 0863 2355 241</a><a href="mailto:info@gunturclub.com"><Mail size={16}/>info@gunturclub.com</a></div></div><div className="footer-bottom"><span>© 2026 Guntur Club. All rights reserved.</span><span>GUNTUR, ANDHRA PRADESH · INDIA</span></div></footer>
    <Button className="floating-contact" onClick={()=>setOpen(true)} aria-label="Open contact form"><Mail/>Contact us</Button>
    <Dialog.Root open={open} onOpenChange={setOpen}><Dialog.Portal><Dialog.Overlay className="contact-overlay"/><Dialog.Content className="contact-dialog"><div className="dialog-photo"><img src={photos.club} alt="Guntur Club at sunset"/><div><Crown size={28}/><span>Guntur Club</span><p>A tradition of warm welcomes.<br/>Since 1929.</p></div></div><div className="dialog-body"><Dialog.Close asChild><Button variant="ghost" size="icon" className="dialog-close" aria-label="Close contact form"><X/></Button></Dialog.Close><p className="eyebrow">WELCOME TO GUNTUR CLUB</p><Dialog.Title className="dialog-title">Let's connect.</Dialog.Title><Dialog.Description className="dialog-description">Membership, a memorable stay or a special celebration — we'd love to hear from you.</Dialog.Description><ContactForm/><a className="dialog-phone" href="tel:08632233703"><Phone size={14}/>Prefer a conversation? 0863 2233 703</a></div></Dialog.Content></Dialog.Portal></Dialog.Root>
  </ContactContext.Provider>
}