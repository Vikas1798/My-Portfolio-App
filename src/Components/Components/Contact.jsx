import React, { useState } from 'react';
import SegmentHeading from '../Common/SegmentHeading';
import { Send } from 'lucide-react';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        message: '',
        to_name: 'Vikas H K'
    });

    const [state, setState] = useState({
        viewMessage: false
    });



    const [load, setLoad] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const sendEmail = (e) => {
        e.preventDefault();

        // Prepare the payload for EmailJS
        const data = {
            service_id: 'service_e6ztuhe', // Your service ID
            template_id: 'template_4xzqhxr', // Your template ID
            user_id: 'pqzUqNCHoRAQdO875', // Replace with your public key
            template_params: {
                from_name: formData.from_name,
                from_email: formData.from_email,
                message: formData.message,
                to_name: 'Vikas'
            },
        };

        setLoad(true)

        // Send the email using Axios
        axios.post('https://api.emailjs.com/api/v1.0/email/send', data, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(() => {
                setLoad(false);
                setState((prev) => {
                    return {
                        ...prev,
                        viewMessage: true
                    }
                })

                setInterval(() => {
                    setState((prev) => {
                        return {
                            ...prev,
                            viewMessage: false
                        }
                    })
                }, 3000);

                setFormData({ from_name: '', from_email: '', message: '' });
            })
            .catch((error) => {
                setLoad(false);
                console.error('Failed to send the message:', error);
            });
    };

    let open = (formData?.from_name && formData?.from_email && formData?.message)
    return (
        <>
            <SegmentHeading heading="Contact" subhead="Your questions and opportunities are just a message away." />
            <div className="mt-5">
                <div className="grid sm:grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="from_name"
                        value={formData.from_name}
                        onChange={handleChange}
                        placeholder="Full name"
                        className="font-semibold py-[15px] px-[20px] text-seventh text-sm rounded-xl bg-forth w-full"
                    />
                    <input
                        type="email"
                        name="from_email"
                        value={formData.from_email}
                        onChange={handleChange}
                        placeholder="Email address"
                        className="font-semibold py-[15px] px-[20px]  text-seventh text-sm rounded-xl bg-forth w-full"
                    />
                </div>
                <textarea
                    type="text"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    className="w-full mt-5 font-semibold py-[15px] px-[20px] bg-forth text-seventh text-sm rounded-xl "
                />
                {
                    load ?
                        <button className={`py-[15px] px-[20px] bg-forth rounded-xl flex items-center justify-center lg:justify-end mt-5 ms-auto w-full lg:w-fit`}>
                            <svg width="20" height="20" fill="#4edb53" className="animate-spin" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z">
                                </path>
                            </svg>
                        </button>
                        :
                        <div className='relative flex items-center justify-center lg:justify-end w-fit mt-5 ms-auto'>
                            {
                                state?.viewMessage ? <div className='absolute bg-forth text-basicGreen -top-[25px] text-xs px-2 py-[2px] flex items-center justify-center w-full rounded-md modal-animate-slide-up'>Message sent successfully!</div> : null
                            }
                            <button onClick={open ? sendEmail : null}
                                className={`${open ? ' cursor-pointer ' : ' cursor-not-allowed'} py-[15px] px-[25px] bg-forth rounded-xl flex items-center justify-center lg:justify-end  ms-auto w-full lg:w-fit`}
                            >
                                <Send size={16} strokeWidth={2} className="text-eight" />
                                <span className="text-eight text-sm ms-3">
                                    Send Message
                                </span>
                            </button>
                        </div>
                }
            </div>
        </>
    );
};

export default Contact;
