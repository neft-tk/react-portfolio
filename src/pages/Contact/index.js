import React, {useState} from "react";
import "./style.css"

export default function Contact(props) {
    const [contactFormName, setFormName] = useState("")
    const [contactFormEmail, setFormEmail] = useState("")
    const [contactFormMessage, setFormMessage] = useState("")
    const handleFormSubmit = e => {
        e.preventDefault();
        const newContact = {
            name: contactFormName,
            email: contactFormEmail,
            message: contactFormMessage,
        }
        props.editContact(props.index,newContact)
    }

    return (
        <>
        <div className="Contact">
            <h1>Contact Me!</h1>
            <form onSubmit={handleFormSubmit}>
                <h2>Name:</h2>
                <input name="contactFormName" value={contactFormName} onChange={e=>setFormName(e.target.value)}/>
                <h2>Email:</h2>
                <input name="contactFormEmail" value={contactFormEmail} onChange={e=>setFormEmail(e.target.value)}/>
                <h2>Message:</h2>
                <input name="contactFormMessage" value={contactFormMessage} onChange={e=>setFormMessage(e.target.value)}/>
                <button>Submit</button>
            </form>
        </div>
        </>
    )
}