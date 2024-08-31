import React, { useState } from 'react';
import Resume from './Components/Resume';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';

const RightContainer = () => {
    const [state, setState] = useState({
        segment: 'about'
    })

    let segment = [
        {
            name: 'About',
            slug: 'about'
        },
        {
            name: 'Resume',
            slug: 'resume'
        },
        {
            name: 'Projects',
            slug: 'projects'
        },
        {
            name: 'Contact',
            slug: 'contact'
        }
    ]

    const updateTab = (d) => {
        setState((prev) => {
            return {
                ...prev,
                segment: d
            }
        })
    }
    return (
        <div className='relative p-5'>
            <div className='absolute bg-[#2b2b2cbf] right-0 top-0 border-b-[1px] border-l-[1px] border-secondary rounded-bl-2xl rounded-tr-2xl  '>
                <div className='grid grid-cols-4 gap-3 px-4 py-3'>
                    {
                        segment?.map((d, i) => (
                            <p key={i} onClick={() => updateTab(d?.slug)} className={`px-3 text-sm font-semibold flex items-center justify-center cursor-pointer ${state.segment === d.slug ? ' text-eight' : ' text-sixth hover:text-fifth'}`}>
                                {d?.name}
                            </p>
                        ))
                    }
                </div>
            </div>
            {
                state.segment === 'about' && <AboutMe />

            }
            {
                state.segment === 'resume' && <Resume />
            }
            {
                state.segment === 'projects' && <Projects />
            }
            {
                state.segment === 'contact' &&
                <>
                    <h1 className='text-seventh text-3xl flex items-center  font-semibold'>Contact</h1>
                    <div className='w-[60px] bg-eight mt-3 h-[5px] rounded-xl'></div>
                </>
            }
        </div>
    )
}

export default RightContainer