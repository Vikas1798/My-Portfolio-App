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
                I'm a Frontend Engineer from Bangalore, India, specializing in creating dynamic and responsive web applications. I thrive on transforming complex challenges into sleek, efficient, and user-friendly solutions.
            </p>
            <p className='text-sm  text-fifth mt-5 leading-6'>
                My focus is on building applications that are not only functional and intuitive but also visually appealing and engaging. I bring a personal touch to every project, ensuring your web app is both high-performing and uniquely tailored to your needs. My goal is to deliver your brand’s message through seamless and innovative web experiences. I have developed web solutions for renowned brands, enhancing their online presence with cutting-edge technologies.
            </p>
        </>
    )
}

export default AboutMe