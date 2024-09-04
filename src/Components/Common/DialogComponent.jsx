import React from "react";
import { X } from 'lucide-react';


const DialogComponent = ({ isOpen, onClose, size, children }) => {
    let customeSize;
    if (size === "xs") {
        customeSize = "xl:!w-[25%] md:!w-1/2 !w-11/12";
    }
    if (size === "sm") {
        customeSize = "xl:!w-[30%] md:!w-1/2 !w-11/12";
    } else if (size === "md") {
        customeSize = "lg:!w-1/2 !w-11/12";
    } else if (size === "lg") {
        customeSize = "lg:!w-9/12 !w-11/12";
    } else {
        customeSize = "lg:!w-1/4 !w-11/12";
    }

    return (
        <section className={` ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300`}>
            <div className={`relative p-[10px] sm:p-3 ${customeSize} bg-seventh rounded-3xl overflow-hidden ${isOpen ? 'modal-animate-slide-up' : ''}`}>
                <div className="p-3 border-[1px] border-primaryGray rounded-2xl bg-gradient-to-t from-seventh via-seventh to-eight">
                    <div onClick={() => onClose(false)} className='rounded-full p-[4px] cursor-pointer bg-white border-[1px] border-seventh absolute right-[6px] top-[6px]'>
                        <X size={18} strokeWidth={1.5} />
                    </div>
                    {children}
                </div>
            </div>
        </section>
    );
};
export default DialogComponent;
