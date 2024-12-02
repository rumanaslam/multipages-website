import React from 'react'

const Contact = () => {
  return (
    <div>
      <section className='contact'>
        <h2 className='fade-in'> Contact Us </h2>
        <br />
        <form>
            <input type="text" placeholder='Full Name' required />
            <input type="email" placeholder='Email Address' required/>
            <input type="text" placeholder='Phone Number' />
            <textarea placeholder='Your Message' rows={5} required></textarea>
            <button type='submit'> Send Message</button>

        </form>
      </section>
    </div>
  )
}

export default Contact
