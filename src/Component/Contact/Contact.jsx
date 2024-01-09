import React,{useState} from 'react'
import emailjs from '@emailjs/browser'
import '../Contact/Contact.css'

const Contact = () => {

  const[name,setName] = useState('')
  const[email,setEmail] = useState('')
  const[message,setMessage] = useState('')
  const[subject,setSubject] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault();
    const serviceId = 'service_o4u02cd'
    const publicKey = 'e6GKMI9oIn7vPZSEP'
    const templateId = 'template_iof3p9c'


    const templateParams = {
      fname : name ,
      femail : email ,
      fsubject : subject,
      fmessage : message,
      to_name : 'Prisans',
    }

    emailjs.send(serviceId,templateId,templateParams,publicKey)
    .then((res)=>{
      console.log('connection build' , res);
      setName('');
      setEmail('');
      setMessage('');
      setSubject('')
    })
    .catch((err)=>{
      console.log('error occured' , err)
    })

    

  }

  return (
    <div className="contact-container">

      <div className="contact-heading">
        <h2>Contact <span>Me</span></h2>
        <p><span>Keep</span> In Touch</p>
      </div>

      <div className="contact-section">
        <p className="contact-msg">Message Me</p>
        <form onSubmit={handleSubmit} className='contact-form' >
        <input type="text" placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)} required/>
        <input type="text" placeholder='Field or Subject' value={subject} onChange={(e)=>setSubject (e.target.value)} required/>
        <input type="text" placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
        <textarea placeholder='Your Message' cols="30" rows="10" value={message} onChange={(e)=>setMessage(e.target.value)} required></textarea>
        <button className='btn submit-btn' >Submit</button>
       
        </form>
      </div>
    </div>
  )
}

export default Contact
