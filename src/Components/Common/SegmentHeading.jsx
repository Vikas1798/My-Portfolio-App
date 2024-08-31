import React from 'react'

const SegmentHeading = ({ heading }) => {
    return (
        <>
            <h1 className='text-seventh text-3xl flex items-center  font-semibold'>{heading}</h1>
            <div className='w-[60px] bg-eight mt-3 h-[5px] rounded-xl'></div>
        </>
    )
}

export default SegmentHeading