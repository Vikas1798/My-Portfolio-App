import React from 'react'
import SegmentHeading from '../Common/SegmentHeading';
import { education } from '../../Database/db';


const Education = () => {
    return (
        <>
            <SegmentHeading heading='Education' subhead="My education has been a transformative journey, fueling my personal growth and shaping my skills." />
            <div className="mt-4">
                {education.map((item, index) => (
                    <div key={index} className="mt-4 grid grid-cols-8 gap-5 items-center ">
                        <img src={item?.icon} alt="" className=' object-contain col-span-1 w-full h-fit rounded-md' />
                        <div className='col-span-7 bg-forth p-3 rounded-md '>
                            <h6 className="text-lg font-semibold text-seventh">{item.name}</h6>
                            <p className="text-sm text-eight">{item.duration}</p>
                            <p className="text-sm text-fifth leading-6">{item.about}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Education;

// import React from 'react';

// const Education = () => {
//     const educationData = [
//         {
//             title: "University School Of The Arts",
//             period: "2007 — 2008",
//             description:
//                 "Nemo enim ipsam voluptatem, blanditiis praesentium voluptatum delenit atque corrupti, quos dolores et quas molestias exceptur.",
//         },
//         {
//             title: "New York Academy Of Art",
//             period: "2006 — 2007",
//             description:
//                 "Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis.",
//         },
//         {
//             title: "High School Of Art And Design",
//             period: "2002 — 2004",
//             description:
//                 "Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos.",
//         },
//     ];

//     return (
//         <div className="max-w-2xl mx-auto mt-12 p-6 bg-gray-900 text-gray-300 rounded-lg shadow-md">
//             <h2 className="text-3xl font-bold text-white mb-8">Education</h2>
//             <ul className="relative border-l border-gray-700 pl-6">
//                 {educationData.map((item, index) => (
//                     <li key={index} className="mb-12 ml-6">
//                         {/* Timeline Dot */}
//                         <div className="absolute -left-[10px] w-4 h-4 bg-yellow-500 rounded-full border-2 border-gray-900"></div>
//                         {/* Education Content */}
//                         <div className="text-lg font-semibold text-white">{item.title}</div>
//                         <div className="text-sm text-yellow-400 mt-1">{item.period}</div>
//                         <p className="text-sm text-gray-400 mt-2">{item.description}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Education;


// src/EducationTimeline.js
// import React from 'react';

// const Education = () => {
//     const educationData = [
//         {
//             title: "University School Of The Arts",
//             period: "2007 — 2008",
//             description:
//                 "Nemo enim ipsam voluptatem, blanditiis praesentium voluptatum delenit atque corrupti, quos dolores et quas molestias exceptur.",
//         },
//         {
//             title: "New York Academy Of Art",
//             period: "2006 — 2007",
//             description:
//                 "Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis.",
//         },
//         {
//             title: "High School Of Art And Design",
//             period: "2002 — 2004",
//             description:
//                 "Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos.",
//         },
//     ];

//     return (
//         <div className="max-w-2xl mx-auto mt-12 p-6 bg-gray-900 text-gray-300 rounded-lg shadow-md relative">
//             <div className="absolute -left-12 top-0 flex items-center justify-center bg-gray-800 p-2 rounded-full">
//                 deded {/* Education Icon */}
//             </div>
//             <h2 className="text-3xl font-bold text-white mb-8">Education</h2>
//             <ul className="relative border-l border-gray-700 pl-6">
//                 {educationData.map((item, index) => (
//                     <li key={index} className="mb-12 ml-6">
//                         {/* Timeline Dot */}
//                         <div className="absolute -left-[10px] w-4 h-4 bg-yellow-500 rounded-full border-2 border-gray-900"></div>
//                         {/* Education Content */}
//                         <div className="text-lg font-semibold text-white">{item.title}</div>
//                         <div className="text-sm text-yellow-400 mt-1">{item.period}</div>
//                         <p className="text-sm text-gray-400 mt-2">{item.description}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Education;
