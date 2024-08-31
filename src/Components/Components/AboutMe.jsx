import React from 'react'
import SegmentHeading from '../Common/SegmentHeading'

const AboutMe = () => {
    return (
        <>
            <SegmentHeading heading='About me' />
            <p
                style={{
                    // pointerEvents: false ? "auto" : "none",
                    // clipPath: "inset(10% 50% 90% 50% round 10px)",
                }}
                className='text-sm  text-fifth mt-5 leading-6'>
                I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.
            </p>
            <p className='text-sm  text-fifth mt-5 leading-6'>
                My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.
            </p>
        </>
    )
}

export default AboutMe