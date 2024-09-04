import React, { useState } from 'react';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Resume from './Components/Resume';

const RightContainer = (props) => {
    return (
        <div className='relative p-5'>
            <div className='xl:flex hidden absolute bg-[#2b2b2cbf] right-0 top-0 border-b-[1px] border-l-[1px] border-secondary rounded-bl-2xl rounded-tr-2xl  '>
                <div className='grid grid-cols-4 gap-3 px-4 py-3'>
                    {
                        props?.allSegment?.map((d, i) => (
                            <p key={i} onClick={() => props?.updateTab(d?.slug)} className={`px-3 text-sm font-semibold flex items-center justify-center cursor-pointer ${props.segment === d.slug ? ' text-eight' : ' text-sixth hover:text-fifth'}`}>
                                {d?.name}
                            </p>
                        ))
                    }
                </div>
            </div>
            {
                props.segment === 'about' && <AboutMe />
            }
            {
                props.segment === 'resume' && <Resume />
            }
            {
                props.segment === 'projects' && <Projects />
            }
            {
                props.segment === 'contact' && <Contact />
            }
        </div>
    )
}

export default RightContainer