import React, { useState, useEffect } from 'react';
import "./ContactMePage.css"
import { SiMinutemailer } from "react-icons/si";
import { RiMailAddLine } from "react-icons/ri";
import CloseButton from '../CloseButton/CloseButton';

const ContactMePage = ({ setcontactPage }) => {
    const [top, settop] = useState("none");
    const [nameSpanStyle, setnameSpanStyle] = useState({});
    const [emailSpanStyle, setemailSpanStyle] = useState({});
    const [descriptionSpanStyle, setdescriptionSpanStyle] = useState({});

    const setValue = (value) => {
        settop("-50%")
        setTimeout(() => {
            setcontactPage(value)
        }, 300)
    }

    const escapeHandler = (event) => {
        if(event.keyCode === 27) {
            setValue(false)
        }
    }
    useEffect(() => {
        document.addEventListener("keyup", escapeHandler);
        return () => {
            document.removeEventListener("keyup", escapeHandler);
        };
    });


    let boxShadow = "none"
    if (top === "none") {
        boxShadow = "40px 20px 1px var(--mainColor)"
    }

    const onSubmit = (event) => {
        event.preventDefault();
    }

    const onFocus = (event) => {
        if (event.target.className === "name-class") {
            setnameSpanStyle({
                top: "10px",
                fontSize: "30px",
                fontWeight: "800"
            })
        } else if (event.target.className === "email-class") {
            setemailSpanStyle({
                top: "10px",
                fontSize: "30px",
                fontWeight: "800"
            })
        } else if (event.target.className === "description") {
            setdescriptionSpanStyle({
                top: "10px",
                fontSize: "30px",
                fontWeight: "800"
            })
        }
    }

    const onBlur = (event) => {
        if (event.target.className === "name-class") {
            if (event.target.value !== "") {
                setnameSpanStyle({ top: "35px" })
            } else {
                setnameSpanStyle({})
            }
        } else if (event.target.className === "email-class") {
            if (event.target.value !== "") {
                setemailSpanStyle({ top: "35px" })
            } else {
                setemailSpanStyle({})
            }
        } else if (event.target.className === "description") {
            if (event.target.value !== "") {
                setdescriptionSpanStyle({ top: "35px" })
            } else {
                setdescriptionSpanStyle({})
            }
        }
    }

    return (


        <div className='contact-me-div' style={{ top: top, boxShadow: boxShadow }}>
            <div className='form-heading'>
                <div> <RiMailAddLine style={{ top: "6px", position: "relative" }} /> CONTACT ME</div>
                <CloseButton setcontactPage={setValue} />
            </div>
            <form onSubmit={onSubmit} className='contact-me-form'>
                <div id='name-input'>
                    <span className='name-span' style={nameSpanStyle} >NAME</span>
                    <input spellCheck="false" className='name-class' onFocus={onFocus} onBlur={onBlur} />
                </div>
                <div id='email-input'>
                    <span style={emailSpanStyle}>E-MAIL</span>
                    <input spellCheck="false" className='email-class' onFocus={onFocus} onBlur={onBlur} />
                </div>
                <div id='send-message-input'>
                    <span style={descriptionSpanStyle}>Type your message...</span>
                    <textarea className='description' onFocus={onFocus} onBlur={onBlur} />
                </div>
                <div className='submit'>
                    <button>
                        <SiMinutemailer size='25px' style={{ position: "absolute", left: "39px", top: "17px" }} />
                        SEND
                        <span className='btn-span'></span>
                    </button>
                </div>
            </form>
        </div>
    )
};

export default ContactMePage;

//SiMinutemailer
//RiMailAddLine
