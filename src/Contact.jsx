import React from "react"
import NetlifyForm from 'react-netlify-form'

const Contact = () => {
    return (
    <NetlifyForm name='contact'>
        {({ error, success }) => (
            <>
                {error &&
                    <div>Your information was not sent. Please try again later.</div>
                }
                {success &&
                    <div>Thank you for your message!</div>
                }
                {!success &&
                    <>
                    <h1 className="content-header">Contact me</h1>

                    <p className="content-text">Fill in this form to send me a message. I will get back to you as soon as I read it!</p>
                    
                    <div className="w-1/2 mt-12">
                        <input className="input-field-sm" type='text' placeholder="Your name" name='name' required />
                        <input className="input-field-sm" type='email' placeholder="Your email address" name='email' required />
                        <textarea className="input-field" placeholder="Your message" name='message' required />
                        <button className="button">Send</button>
                    </div>
                    </>
                }
            </>
        )}
    </NetlifyForm>
    )
}

export default Contact