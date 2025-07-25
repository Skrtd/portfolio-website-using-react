import { Linkedin, Mail, MapPin, Phone, Github, Send } from 'lucide-react'
import React, { use, useState } from 'react'
import { cn } from '@/lib/utils'
import { useToast } from '@/hooks/use-toast'

const ContactSection = () => {

  const {toast} = useToast();
  const {isSubmitting, setIsSubmitting} = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out! I'll get back to you soon.",
        variant: "default",
      });
       setIsSubmitting(false);
    }, 1000);

   

  }

  return (
    <section id='contact' className='py-24 px-4 relative bg-secondary/30'>

        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                Get In <span className='text-primary'>Touch</span>
            </h2>

            <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
                Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out!
            </p>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
        <div className='space-y-8'>
            <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>

            <div className='space-y-6 justify-center'>
              <div className='flex items-start space-x-4'>
                <div className='p-3 rounded-full bg-primary/10 '>
                  <Mail className='h-6 w-6 text-primary'/>
                </div>
                <div>
                  <h4 className='font-medium'>Email</h4>
                  <a href="mailto:rathodsudha193@gmail.com" className='text-muted-foreground hover:text-primary transition-colors'>
                    rathodsudha193@gmail.com
                  </a>
                </div>
              </div>

              <div className='flex items-start space-x-4'>
                <div className='p-3 rounded-full bg-primary/10 '>
                  <Phone className='h-6 w-6 text-primary'/>
                </div>
                <div>
                  <h4 className='font-medium'>Phone</h4>
                  <a href="tel:+917041576642" className='text-muted-foreground hover:text-primary transition-colors'>
                    +91 7041576642
                  </a>
                </div>
              </div>
              
              <div className='flex items-start space-x-4'>
                <div className='p-3 rounded-full bg-primary/10 '>
                  <MapPin className='h-6 w-6 text-primary'/>
                </div>
                <div>
                  <h4 className='font-medium'>Location</h4>
                  <a className='text-muted-foreground hover:text-primary transition-colors'>
                    Anand, Gujarat
                  </a>
                </div>
              </div>
            </div>

            <div className='pt-8'>
              <h4 className='font-medium mb-4'>Connect With Me</h4>
              <div className='flex space-x-4 justify-center'>
                <a href="https://www.linkedin.com/in/sudha-rathod-b9a121253 " target='_blank' className='text-muted-foreground hover:text-primary transition-colors'>
                  <Linkedin />
                </a>
                <a href="https://github.com/Skrtd" target='_blank' className='text-muted-foreground hover:text-primary transition-colors'>
                  <Github />
                </a>
              </div>
            </div>
        </div>

                  <div className='bg-card p-8 rounded-lg shadow-xs' onSubmit={handleSubmit} >
              <h3 className='text-2xl font-semibold mb-4' >Send a Message</h3>
              <form className='space-y-6'>
                <div>
                  <label htmlFor="name" className='block text-sm font-medium mb-2'>Your Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    required 
                    className='w-full px-4 py-3 border border-input rounded-md bg-background focus:outline-hidden focus:ring-2 focus:ring-primary' 
                    placeholder='Enter your name' />
                </div>
                <div>
                  <label htmlFor="email" className='block text-sm font-medium mb-2'>Your Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    required 
                    className='w-full px-4 py-3 border border-input rounded-md bg-background focus:outline-hidden focus:ring-2 focus:ring-primary' 
                    placeholder='Enter your email' />
                </div>
                <div>
                  <label htmlFor="message" className='block text-sm font-medium mb-2'>Your Message</label>
                  <textarea 
                    name="message" 
                    id="message" 
                    required 
                    className='w-full px-4 py-3 border border-input rounded-md bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none' 
                    placeholder='Enter your message' />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "cosmic-button w-full flex display-flex items-center justify-center gap-2"

                  )}>
                  {isSubmitting? "Sending..." : "Send Message"}
                  <Send size={16} />
                </button>
                
              </form>
            </div>

      </div>
    </div>
    </section>
  )
}

export default ContactSection;
