import emailjs from "@emailjs/browser";
import React from 'react';
import Button from "../../styles/GlobalComponents/Button";
import { Input, Textarea } from "./ContactFormStyles";


const ContactForm = () => {

   

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_wgys3yj','template_hbe2i8a', e.target, 'user_31vqZ2DJWkqas3vvGR8Cm'
    )
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        <div>
            <div className="container">
            <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <Input type="text" className="form-control" placeholder="Your name" name="name"/>
                        </div>
                        <br/>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <Input type="email" className="form-control" placeholder="Your Email" name="email"/>
                        </div>
                        <br/>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <Input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <br/>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <Textarea className="form-control"  cols="30" rows="8" placeholder= "Message" name="message"></Textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <br/>
                            <div> <Button type="submit">Send Message</Button></div>
                           
                           </div>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default ContactForm;