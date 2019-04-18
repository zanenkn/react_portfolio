import React, { Component } from "react"

// const Contact = () => {
//     return (

//         <div className="contact-box">
//             <form name="contact" method="post">
//               <input type="hidden" name="form-name" value="contact" />
//               <p>
//                 <label>Your Name: <input type="text" name="name"/></label>
//               </p>
//               <p>
//                 <label>Your Email: <input type="email" name="email"/></label>
//               </p>
//               <p>
//                 <label>Message: <textarea name="message"></textarea></label>
//               </p>
//               <p>
//                 <button type="submit">Send</button>
//               </p>
//             </form>
//             <span id="thankyou_message"></span> 


            
//         </div>      
//     )                
// }

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

class ContactForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { name: "", email: "", message: "" };
    }

    handleSubmit = e => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state })
      })
        .then(() => alert("Success!"))
        .catch(error => alert(error));

      e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
      const { name, email, message } = this.state;
      return (
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>
              Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message" value={message} onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      );
    }
  }

  ReactDOM.render(<ContactForm />, document.getElementById("root"));

</script>

export default Contact