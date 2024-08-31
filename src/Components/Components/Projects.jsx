import React from 'react';
import { Eye } from 'lucide-react';
import SegmentHeading from '../Common/SegmentHeading'
import userApp from '../../Assets/Image/user-app.png';
import uposMall from '../../Assets/Image/upos-digital-mall.png';
import webinar from '../../Assets/Image/webinar.png';
import cashaqua from '../../Assets/Image/cashaqua.png';
import jagdai from '../../Assets/Image/jagdai.png';
import jagods from '../../Assets/Image/jagods.png';


const Projects = () => {
    let allProjects = [
        {
            name: "User Web App",
            date: "07/2021 - Present",
            dec: "Global Garner User Web App.",
            image: userApp,
            liveLink: "https://globalgarner.com/"
        },
        {
            name: "UPOS - The Digital Mall Web App",
            date: "07/2021 - Present",
            dec: "Global garner UPOS - The Digital Mall web application.",
            image: uposMall,
            liveLink: "https://globalgarner.com/upos"
        },
        {
            name: "Webinar Website",
            date: "06/2024 - 07/2024",
            dec: "Global garner webinar website.",
            image: webinar,
            liveLink: "https://webinar-staging.web.app/"
        },
        {
            name: "Cashaqua Web App",
            date: "07/2023 - 10/2023",
            dec: "Global garner water franchise website.",
            image: cashaqua,
            liveLink: "https://globalgarner.com/cashaqua"
        },
        {
            name: "Jagdai Food Website",
            dec: "Food franchise website.",
            date: "02/2023 - 05/2023",
            image: jagdai,
            liveLink: "https://jagdaifoods.com/"
        },
        {
            name: "Jagods Web App",
            dec: "Food ordering platform",
            date: "09/2023 - Present",
            image: jagods,
            liveLink: "https://jagods.com/"
        }
    ]

    return (
        <div>
            <SegmentHeading heading='Projects' />
            <div className='mt-5 grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {
                    allProjects?.map((d, i) => (
                        <div key={i} className="group" onClick={() => window.open(d?.liveLink, "_blank")}>
                            <figure className='w-full overflow-hidden rounded-2xl relative cursor-pointer'>
                                <img src={d?.image} loading="lazy" alt="" className='w-full  transition-all duration-500 group-hover:opacity-70 group-hover:scale-110' />
                                <div className=" absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <Eye size={16} strokeWidth={2} className="text-eight bg-secondary w-[50px] h-[50px] rounded-xl  p-3 transform scale-75 group-hover:scale-100 transition-transform duration-500" />
                                </div>
                            </figure>
                            <h6 className='text-sm text-seventh mt-3'>{d?.name}</h6>
                            <p className='text-sm text-fifth mt-1'>{d?.dec}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects