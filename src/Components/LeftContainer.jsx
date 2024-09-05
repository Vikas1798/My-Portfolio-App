import React, { useState } from 'react';
import { Smartphone, Mail, Github, Linkedin, MapPin, MessageCircleMore, PhoneOutgoing, Copy, ArrowDownToLine, ChevronDown, ChevronUp } from 'lucide-react';
import myImage from '../Assets/Image/myImage.png'

const LeftContainer = () => {
    const [state, setState] = useState({
        viewMessage: false,
        openDetails: false
    })

    const info = [
        {
            label: "Phone",
            value: "+91 7204185789",
            icon: Smartphone
        },
        {
            label: "Email",
            value: "vikas17.hk@gmail.com",
            icon: Mail
        },
        {
            label: "GitHub",
            value: "https://github.com/Vikas1798/",
            icon: Github
        },
        {
            label: "LinkedIn",
            value: "https://www.linkedin.com/in/vikas-hk-frontend/",
            icon: Linkedin
        },
        {
            label: "Location",
            value: "Bangalore, India",
            icon: MapPin
        }
    ]

    const handleCopyEmail = () => {
        setState((prev) => {
            return {
                ...prev,
                viewMessage: true
            }
        })
        navigator.clipboard.writeText("vikas17.hk@gmail.com");
        // alert("Email Copied.");
        setInterval(() => {
            setState((prev) => {
                return {
                    ...prev,
                    viewMessage: false
                }
            })
        }, 3000);
    }

    const openResume = () => {
        window.open('https://drive.google.com/file/d/1Upq63wbUyHSnzh5EHAtmjTxUxTPiOsMO/view', "_blank")
    }

    const showDetails = (key) => {
        setState((prev) => {
            return {
                ...prev,
                openDetails: key
            }
        })
    }

    return (
        <>
            {/* Web UI */}
            <div className='p-5 relative hidden xl:block'>
                <div className='absolute bg-[#45a368] right-2 top-2 cursor-pointer px-2 py-1 rounded-lg flex items-center' title='Download Resume' onClick={openResume}>
                    <p className='text-[10px] text-seventh '>Resume</p>
                    <ArrowDownToLine size={14} strokeWidth={2} className='text-seventh ms-1' />
                </div>
                <img src={myImage} alt="" className='h-[150px] w-fit mx-auto bg-[#3d3c3e] my-10 rounded-2xl' />
                <h1 className='text-eight text-2xl flex items-center justify-center font-[500]'>VIKAS H K</h1>
                <p className='bg-forth text-sixth text-sm my-1 mx-auto px-4 py-1 rounded-md w-fit'>Frontend Engineer</p>
                <div className='h-[1px] w-full bg-forth my-6'></div>
                {
                    info?.map((d, i) => (
                        <div className='flex items-center mb-4 last:mb-0 gap-3 w-full ' key={i}>
                            <div className='p-2 bg-forth rounded-lg'>
                                <d.icon size={20} strokeWidth={2} className='text-eight rounded-lg' />
                            </div>
                            <div className='text-start w-full overflow-hidden'>
                                <p className='text-[12px] text-fifth'>{d?.label}</p>
                                <h2 className='text-[14px] text-seventh whitespace-nowrap truncate' title={d?.value}>{d?.value}</h2>
                            </div>
                        </div>
                    ))
                }
                <div className='mx-auto grid grid-cols-3 gap-2 w-[40%] mt-5'>
                    <Linkedin title='LinkedIn' onClick={() => window.open('https://www.linkedin.com/in/vikas-hk-frontend/', "_blank")} size={20} strokeWidth={2} className='mx-auto flex items-center justify-center text-sixth cursor-pointer hover:text-eight' />
                    <Github title='GitHub' onClick={() => window.open('https://github.com/Vikas1798/', "_blank")} size={20} strokeWidth={2} className='mx-auto flex items-center justify-center text-sixth cursor-pointer hover:text-eight' />
                    <MessageCircleMore onClick={() => window.open('https://api.whatsapp.com/send?phone=7204185789', "_blank")} size={20} strokeWidth={2} className='mx-auto flex items-center justify-center text-sixth cursor-pointer hover:text-eight' />
                </div>
                <div className='grid grid-cols-2 gap-2 mt-5'>
                    <button className='flex items-center bg-eight p-2 rounded-lg justify-center gap-2 w-full'>
                        <PhoneOutgoing size={16} strokeWidth={2} className='text-seventh' />
                        <a
                            href={"tel:+91 7204185789"}
                            data-rel="external"
                            className='text-sm whitespace-nowrap text-seventh'
                        >
                            Let's Talk
                        </a>
                    </button>
                    <div className='relative'>
                        {
                            state?.viewMessage ? <div className='absolute bg-forth text-seventh -top-[25px] text-xs px-2 py-[2px] flex items-center justify-center w-full rounded-sm modal-animate-slide-up'>Mail ID Copied</div> : null
                        }
                        <button
                            onClick={handleCopyEmail}
                            className='flex items-center  p-2 rounded-lg border-[1px] border-eight justify-center gap-2 bg-forth w-full' >
                            <Copy size={16} strokeWidth={2} className='text-eight' />
                            <p className='text-sm whitespace-nowrap text-eight'>Copy Email</p>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile UI */}
            <div className='block xl:hidden p-5 relative'>
                <div onClick={() => showDetails(state?.openDetails ? false : true)}
                    className='text-eight text-xs hidden sm:block absolute bg-[#2b2b2cbf] right-0 top-0 border-b-[1px] border-l-[1px] border-secondary rounded-bl-2xl rounded-tr-2xl  px-3 py-[4px] cursor-pointer'>
                    {state?.openDetails ? 'Close' : 'Show Contacts'}
                </div>
                <div onClick={() => showDetails(state?.openDetails ? false : true)}
                    className='text-eight text-xs sm:hidden block absolute bg-[#2b2b2cbf] right-0 top-0 border-b-[1px] border-l-[1px] border-secondary rounded-bl-2xl rounded-tr-2xl  px-2 py-[4px] cursor-pointer'>
                    {state?.openDetails ? <ChevronUp size={14} strokeWidth={2} /> : <ChevronDown size={14} strokeWidth={2} />}
                </div>
                <div className='flex items-center'>
                    <img src={myImage} alt="" className='h-[80px] w-[80px] bg-[#3d3c3e]  rounded-2xl' />
                    <div className='ms-3'>
                        <h1 className='text-eight text-2xl flex items-center text-start font-[500]'>VIKAS H K</h1>
                        <p className='bg-forth text-sixth text-sm mx-auto px-4 py-1 rounded-md w-fit my-2 line-clamp-1'>Frontend Engineer</p>
                    </div>
                </div>

                <div className={`transition-all duration-[1500ms] ease-in-out ${state?.openDetails ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                    <div className='h-[1px] w-full bg-forth my-6'></div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                        {
                            info?.map((d, i) => (
                                <div className='flex items-center mb-4 last:mb-0 gap-3 w-full ' key={i}>
                                    <div className='p-2 bg-forth rounded-lg'>
                                        <d.icon size={20} strokeWidth={2} className='text-eight rounded-lg' />
                                    </div>
                                    <div className='text-start w-full overflow-hidden'>
                                        <p className='text-[12px] text-fifth'>{d?.label}</p>
                                        <h2 className='text-[14px] text-seventh whitespace-nowrap truncate' title={d?.value}>{d?.value}</h2>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='h-[1px] w-full bg-forth my-6'></div>
                    <div className='grid grid-cols-4 gap-2  w-full  mx-auto'>
                        <Linkedin title='LinkedIn' onClick={() => window.open('https://www.linkedin.com/in/vikas-hk-frontend/', "_blank")} size={20} strokeWidth={2} className='mx-auto flex items-center justify-center text-sixth cursor-pointer hover:text-eight ' />
                        <Github title='GitHub' onClick={() => window.open('https://github.com/Vikas1798/', "_blank")} size={20} strokeWidth={2} className='mx-auto flex items-center justify-center text-sixth cursor-pointer hover:text-eight ' />
                        <MessageCircleMore onClick={() => window.open('https://api.whatsapp.com/send?phone=7204185789', "_blank")} size={20} strokeWidth={2} className='mx-auto flex items-center justify-center text-sixth cursor-pointer hover:text-eight ' />
                        <ArrowDownToLine onClick={openResume} size={20} strokeWidth={2} className='mx-auto flex items-center justify-center text-sixth cursor-pointer hover:text-eight ' />
                    </div>
                    <div className='h-[1px] w-full bg-forth my-6'></div>
                    <div className='grid sm:grid-cols-2 gap-2 mt-5 w-full sm:w-[70%] mx-auto'>
                        <button className='flex items-center bg-eight p-2 rounded-lg justify-center gap-2 w-full  mx-auto'>
                            <PhoneOutgoing size={16} strokeWidth={2} className='text-seventh' />
                            <a
                                href={"tel:+91 7204185789"}
                                data-rel="external"
                                className='text-sm whitespace-nowrap text-seventh'
                            >
                                Let's Talk
                            </a>
                        </button>
                        <div className='relative'>
                            {
                                state?.viewMessage ? <div className='absolute bg-forth text-seventh -top-[25px] text-xs px-2 py-[2px] flex items-center justify-center w-full rounded-sm modal-animate-slide-up'>Mail ID Copied</div> : null
                            }
                            <button
                                onClick={handleCopyEmail}
                                className='flex items-center  p-2 rounded-lg border-[1px] border-eight justify-center gap-2  w-full  mx-auto' >
                                <Copy size={16} strokeWidth={2} className='text-eight' />
                                <p className='text-sm whitespace-nowrap text-eight'>Copy Email</p>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default LeftContainer;
