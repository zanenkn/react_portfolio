import React from "react"
import NetlifyForm from 'react-netlify-form'

const Contact = () => {
    return (
    <NetlifyForm name='Contact Form'>
        {({ error, success }) => (
            <div>
                {error &&
                    <div>Your information was not sent. Please try again later.</div>
                }
                {success &&
                    <div>Thank you for your message!</div>
                }
                {!success &&
                    <div>
                    <input type='text' name='Name' required />
                    <input type='text' name='email' required />
                    <textarea name='Message' required />
                    <button>Submit</button>
                    </div>
                }
            </div>
        )}
    </NetlifyForm>
    )
}


export default Contact