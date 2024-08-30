import React, { useState } from 'react';

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
            name: 'Portfolio',
            slug: 'portfolio'
        },
        {
            name: 'Work',
            slug: 'work'
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
                            <p key={i} onClick={() => updateTab(d?.slug)} className={`px-3 text-sm font-semibold flex items-center justify-center cursor-pointer ${state.segment === d.slug ? ' text-eight' : ' text-fifth hover:text-eight'}`}>
                                {d?.name}
                            </p>
                        ))
                    }
                </div>
            </div>
            {
                state.segment === 'about' &&
                <>
                    <h1 className='text-seventh text-3xl flex items-center  font-semibold'>About me</h1>
                    <div className='w-[60px] bg-eight mt-3 h-[5px] rounded-xl'></div>
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
            }
            {
                state.segment === 'portfolio' &&
                <>
                    <h1 className='text-seventh text-3xl flex items-center  font-semibold'>Portfolio</h1>
                    <div className='w-[60px] bg-eight mt-3 h-[5px] rounded-xl'></div>
                </>
            }
            {
                state.segment === 'work' &&
                <>
                    <h1 className='text-seventh text-3xl flex items-center  font-semibold'>Work</h1>
                    <div className='w-[60px] bg-eight mt-3 h-[5px] rounded-xl'></div>
                    <p className='text-sm  text-fifth mt-5 leading-6'>
                        I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.
                    </p>
                </>
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