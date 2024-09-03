import React from 'react'
import SegmentHeading from '../Common/SegmentHeading';
import { education, experience } from '../../Database/db';
import { ChevronRight, Dot } from 'lucide-react';


const Resume = () => {
    return (
        <>
            <SegmentHeading heading='Resume' subhead="My education has been a transformative journey, fueling my growth and shaping my skills as a developer with 3 years of experience in Static Timing Analysis and front-end development, specializing in React.js and dynamic UI integration." />
            <div className="mt-4">
                <h1 className='text-seventh text-xl flex items-center font-semibold'>Education</h1>
                <div className='mt-3'>
                    {education.map((item, index) => (
                        <div key={index} className="mt-3 grid grid-cols-8 gap-5 items-center ">
                            <img src={item?.icon} alt="" className=' object-contain col-span-1 w-full h-fit rounded-md' />
                            <div className='col-span-7 bg-forth p-3 rounded-md '>
                                <h6 className="text-[15px] font-semibold text-seventh">{item.name}</h6>
                                <p className="text-[15px] text-eight">{item.duration}</p>
                                <p className="text-[15px] text-fifth">{item.about}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-4">
                <h1 className='text-seventh text-xl flex items-center font-semibold'>Experience</h1>
                <div className='mt-3'>
                    {experience.map((item, index) => (
                        <div key={index} className="mt-3 bg-forth p-3 rounded-md ">
                            <div className='flex items-center'>
                                <img src={item?.logo} alt="" className=' w-[100px] h-fit cursor-pointer' onClick={() => window.open(item?.link, "_blank")} />
                                <div className='text-start ms-4'>
                                    <h6 className="text-[18px] font-semibold text-seventh">{item.Company}</h6>
                                    <p className="text-[15px] text-eight">{item.duration}</p>
                                    <h6 className="text-[15px] font-semibold text-seventh">{item.jobProfile}</h6>
                                </div>
                            </div>
                            <div className='flex flex-wrap gap-2 mt-3'>
                                {
                                    item?.skills?.map((s, i) => (
                                        <p key={i} className='text-sm   text-seventh  bg-[#202022]  px-4 py-2 rounded-full font-semibold'>
                                            {s}
                                        </p>
                                    ))
                                }
                            </div>
                            <div className=' mt-4'>
                                {
                                    item?.about?.map((d, i) => (
                                        <div className='flex items-start mb-4 last:mb-0 gap-3 w-full ' key={i}>
                                            <div className='p-[2px] bg-[#202022]  rounded-md'>
                                                <ChevronRight size={20} strokeWidth={2} className='text-seventh rounded-lg' />
                                            </div>
                                            <div className='text-start w-full overflow-hidden'>
                                                <h2 className='text-[15px] text-fifth' dangerouslySetInnerHTML={{ __html: d }}></h2>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Resume;