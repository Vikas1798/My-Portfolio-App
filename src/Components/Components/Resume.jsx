import React from 'react'
import SegmentHeading from '../Common/SegmentHeading';
import { education, experience } from '../../Database/db';
import { BookOpen, ChevronRight, Computer, Dot } from 'lucide-react';

const Resume = () => {
    return (
        <>
            <SegmentHeading heading='Resume' subhead="My education has been a transformative journey, fueling my growth and shaping my skills as a developer with 3 years of experience in Static Timing Analysis and front-end development, specializing in React.js and dynamic UI integration." />

            <div className="mt-5">
                <div className='flex items-center gap-2'>
                    <div className='p-2 bg-forth rounded-lg'>
                        <Computer size={20} strokeWidth={2} className='text-eight rounded-lg' />
                    </div>
                    <h1 className='text-seventh text-xl flex items-center font-semibold'>Experience</h1>
                    <div className='h-[1px] w-full bg-[#2b2b2cbf]'></div>
                </div>

                <div className='mt-5'>
                    {experience.map((item, index) => (
                        <div key={index} className="mt-3 bg-forth p-3 rounded-md ">
                            <div className='flex items-center h-full'>
                                <img src={item?.logo} alt="" className=' w-[130px] h-full cursor-pointer bg-[#202022] p-2 rounded-lg' onClick={() => window.open(item?.link, "_blank")} />
                                <div className='text-start ms-4'>
                                    <h6 className="text-md font-semibold text-seventh">{item.Company}</h6>
                                    <p className="text-sm text-eight">{item.duration}</p>
                                    <h6 className="text-sm font-semibold text-seventh">{item.jobProfile}</h6>
                                </div>
                            </div>
                            <div className='flex flex-wrap gap-2 mt-3'>
                                {
                                    item?.skills?.map((s, i) => (
                                        <p key={i} className='text-xs text-seventh  bg-[#202022]  px-4 py-2 rounded-full font-semibold'>
                                            {s}
                                        </p>
                                    ))
                                }
                            </div>
                            <div className=' mt-4'>
                                {
                                    item?.about?.map((d, i) => (
                                        <div className='flex items-start mb-4 last:mb-0 gap-3 w-full ' key={i}>
                                            {/* <div className='p-[2px] bg-[#202022]  rounded-md'> */}
                                            <Dot size={20} strokeWidth={3} className='text-seventh rounded-lg' />
                                            {/* </div> */}
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
            <div className="mt-5">
                <div className='flex items-center gap-2'>
                    <div className='p-2 bg-forth rounded-lg'>
                        <BookOpen size={20} strokeWidth={2} className='text-eight rounded-lg' />
                    </div>
                    <h1 className='text-seventh text-xl flex items-center font-semibold'>Education</h1>
                    <div className='h-[1px] w-full bg-[#2b2b2cbf]'></div>
                </div>
                <div className='mt-5'>
                    {education.map((item, index) => (
                        <div key={index} className="mt-3 grid grid-cols-8 gap-5 items-center">
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
        </>
    )
}

export default Resume;