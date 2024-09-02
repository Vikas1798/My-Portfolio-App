import React, { useState } from 'react';
import SegmentHeading from '../Common/SegmentHeading';
import { Send } from 'lucide-react';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        message: '',
        to_name: 'Vikas'
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
                alert('Message sent successfully!');
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
                <div className="grid grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="from_name"
                        value={formData.from_name}
                        onChange={handleChange}
                        placeholder="Full name"
                        className="font-semibold py-[15px] px-[20px] bg-tertiary text-seventh text-sm rounded-xl border border-secondary focus:outline-none focus:border-eight"
                    />
                    <input
                        type="email"
                        name="from_email"
                        value={formData.from_email}
                        onChange={handleChange}
                        placeholder="Email address"
                        className="font-semibold py-[15px] px-[20px] bg-tertiary text-seventh text-sm rounded-xl border border-secondary focus:outline-none focus:border-eight"
                    />


                </div>
                <textarea
                    type="text"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    className="w-full mt-5 font-semibold py-[15px] px-[20px] bg-tertiary text-seventh text-sm rounded-xl border border-secondary focus:outline-none focus:border-eight"
                />
                <button className={`${open ? ' cursor-pointer ' : ' cursor-not-allowed'} py-[15px] px-[20px] border-[1px] border-secondary rounded-xl special-shadow flex items-center justify-end mt-5 ms-auto`}
                    onClick={() => load ? null : sendEmail}
                >
                    <Send size={16} strokeWidth={2} className="text-eight" />
                    <span className="text-eight text-sm ms-3">
                        {load ? "load" : "Send Message"}
                    </span>
                </button>
            </div>
        </>
    );
};

export default Contact;
