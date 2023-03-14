import React from 'react'
import './Contact.css'
import {MdEmail} from 'react-icons/md'
import {BsFillTelephoneFill} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id ='contact'>
      <h2>Contact me </h2>
      
    <div className='container contact_container'>
      <div className='contact_options'>
        <article className='contact_option'>
        <MdEmail/>
        <h4>Email</h4>
        <h5>wendyvasr99@hotmail.com</h5>
        <a href='mailto:wendyvasr99@hotmail.com' target='_blank'> send a message </a>
        </article>
        <article className='contact_option'>
        <BsFillTelephoneFill/>
        <h4>Telephone</h4>
        <h5>+123456789</h5>
        </article>
      </div>

    {/*   {/* form */}
      <form action=''>
        <input type='text' name='name' placeholder='your fullName' required/>
        <input type='email' name='email' placeholder='your email' required/>
        <textarea name='message' rows='7' placeholder= 'your message' required></textarea>
       */}
      </form>
    </div>
    </section>

    )
}

export default Contact
