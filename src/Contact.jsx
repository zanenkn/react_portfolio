import React from "react"
import NetlifyForm from 'react-netlify-form'
import { UndrawMailSent } from 'react-undraw-illustrations';

const Contact = () => {
    return (
    <NetlifyForm name='contact'>
        {({ error, success }) => (
            <>
                
                {!success &&
                    <>
                    <h1 className="content-header">Contact me</h1>

                    <p className="content-text">Fill in this form to send me a message. I will get back to you as soon as I read it!</p>
                    
                    <div className="contact-form-wrapper">
                        <input className="input-field-sm" type='text' placeholder="Your name" name='name' required />
                        <input className="input-field-sm" type='email' placeholder="Your email address" name='email' required />
                        <textarea className="input-field" placeholder="Your message" name='message' required />
                        <button className="button">Send</button>
                    </div>
                    </>
                }
                {error &&
                    <div className="mt-8 text-red">Your information was not sent. Please try again later.</div>
                }
                {success &&
                    <>
                    <h1 className="content-header">Thank you for your message!</h1>
        
                    <UndrawMailSent
                        primaryColor='#019ebd'
                        height= '250px'
                        />
                    </>
                }

            </>
        )}
    </NetlifyForm>
    )
}

export default Contact