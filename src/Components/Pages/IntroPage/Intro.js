import React, { useRef, useEffect } from 'react'
import './intro.css'
import { gsap } from 'gsap'

const Intro = () => {

    const tl = gsap.timeline({ defaults: { ease: "power1.out" } })

    const introRef1 = useRef()
    const introRef2 = useRef()
    const introPageRef = useRef();

    useEffect(() => {

        const introRefs = [
            introRef1.current,
            introRef2.current
        ]
        tl.to(introRefs,{y:"0%",stagger:1, duration:1})
        tl.to(introPageRef.current, {y:"-100%", duration:1, delay:0.5})
    })


    return (
        <div className='intro-section' ref={introPageRef}>
            <div className="intro-text">
                <h1 className="hide">
                    <span className="text" ref={introRef1} >Hello There...</span>
                </h1>
                <h1 className="hide">
                    <span className="text" ref={introRef2}>Making Things Ready...</span>
                </h1>
            </div>
        </div>
    )
}

export default Intro