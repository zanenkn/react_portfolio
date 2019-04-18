import React from "react"
import NetlifyForm from 'react-netlify-form'

const Contact = () => {
    return (
    <NetlifyForm name='contact'>
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
                    <input type='text' name='name' required />
                    <input type='email' name='email' required />
                    <textarea name='message' required />
                    <button>Submit</button>
                    </div>
                }

            </div>
        )}
    </NetlifyForm>
    )
}


export default Contact