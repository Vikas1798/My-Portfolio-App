import React from 'react'
import SegmentHeading from '../Common/SegmentHeading'
import { skills } from '../../Database/db'
import { BrainCircuit, Computer } from 'lucide-react'

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
            <div className='mt-5'>
                <div className='flex items-center gap-2'>
                    <div className='p-2 bg-forth rounded-lg'>
                        <BrainCircuit size={20} strokeWidth={2} className='text-eight rounded-lg' />
                    </div>
                    <h1 className='text-seventh text-xl flex items-center font-semibold whitespace-nowrap'>My Expert Area</h1>
                    <div className='h-[1px] w-full bg-[#2b2b2cbf]'></div>
                </div>
                <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {
                        skills?.map((d, i) => (
                            <div key={i} className='flex items-center bg-forth p-2 rounded-md group'>
                                <img src={d?.icons} alt="" className='w-[30px] h-[30px] flex items-center object-contain' />
                                <p className='text-sm   text-fifth ms-2 group-hover:text-eight'>{d.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

        </>
    )
}

export default AboutMe;