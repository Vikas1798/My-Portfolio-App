import React from 'react';
import { Smartphone, Mail, Github, Linkedin, MapPin, MessageCircleMore } from 'lucide-react';
import myImage from '../Assets/Image/myImage.png'

const LeftContainer = () => {

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

    return (
        <div className='p-5'>
            <img src={myImage} alt="" className='h-[150px] w-fit mx-auto bg-[#3d3c3e] my-10 rounded-2xl' />
            <h1 className='text-eight text-2xl flex items-center justify-center font-[500]'>Vikas Pawar</h1>
            <p className='bg-forth text-sixth text-sm my-5 mx-auto px-4 py-1 rounded-md w-fit'>Frontend Engineer</p>
            <div className='h-[1px] w-full bg-forth my-6'></div>
            {
                info?.map((d, i) => (
                    <div className='flex items-center mb-4 last:mb-0 gap-3 w-full ' key={i}>
                        <div className='p-2 bg-[#202022] border-[1px] border-secondary rounded-lg special-shadow'>
                            <d.icon size={20} strokeWidth={2} className='text-eight rounded-lg' />
                        </div>
                        <div className='text-start w-full overflow-hidden'>
                            <p className='text-[12px] text-fifth'>{d?.label}</p>
                            <h2 className='text-[14px] text-seventh whitespace-nowrap truncate' title={d?.value}>{d?.value}</h2>
                        </div>
                    </div>
                ))
            }
            <div className='mx-auto grid grid-cols-3 gap-2 w-[40%] mt-10'>
                <Linkedin title='LinkedIn' onClick={() => window.open('https://www.linkedin.com/in/vikas-hk-frontend/', "_blank")} size={20} strokeWidth={2} className='flex items-center justify-center text-sixth cursor-pointer hover:text-eight' />
                <Github title='GitHub' onClick={() => window.open('https://github.com/Vikas1798/', "_blank")} size={20} strokeWidth={2} className='flex items-center justify-center text-sixth cursor-pointer hover:text-eight' />
                <MessageCircleMore title='whatsapp' onClick={() => window.open('https://web.whatsapp.com/', "_blank")} size={20} strokeWidth={2} className='flex items-center justify-center text-sixth cursor-pointer hover:text-eight' />
            </div>
        </div>
    )
}

export default LeftContainer