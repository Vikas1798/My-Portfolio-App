import React, { useState } from 'react';
import { Smartphone, Mail, Github, Linkedin, MapPin, MessageCircleMore, PhoneOutgoing, Copy, ArrowDownToLine } from 'lucide-react';
import myImage from '../Assets/Image/myImage.png'

const LeftContainer = () => {
    const [state, setState] = useState({
        viewMessage: false
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

    return (
        <div className='p-5 relative'>
            <div className='absolute text-green-400 right-2 top-2 cursor-pointer' title='Download Resume' onClick={openResume}>
                <ArrowDownToLine size={20} strokeWidth={2.5} className='text-[#45a368]' />
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
    )
}

export default LeftContainer