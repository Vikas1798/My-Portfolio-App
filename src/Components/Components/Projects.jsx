import React, { useState } from 'react';
import { ChevronRight, Dot, Eye, Link } from 'lucide-react';
import SegmentHeading from '../Common/SegmentHeading'
import userApp from '../../Assets/Image/user-app.png';
import uposMall from '../../Assets/Image/upos-digital-mall.png';
import webinar from '../../Assets/Image/webinar.png';
import cashaqua from '../../Assets/Image/cashaqua.png';
import jagdai from '../../Assets/Image/jagdai.png';
import jagods from '../../Assets/Image/jagods.png';
import expo from '../../Assets/Image/expo.png';
import userDashboard from '../../Assets/Image/userDashboard.png';

import buyerApp from '../../Assets/Image/franchise_buyer_app.png';
import brandOwner from '../../Assets/Image/brand_owner.png';
import brandPromoter from '../../Assets/Image/brand_promoter.png';
import ecommerceApp from '../../Assets/Image/franchise_ecommerce_app.png';

import DialogComponent from '../Common/DialogComponent';


const Projects = () => {
    const [state, setState] = useState({
        isProjectDetail: {
            open: false,
            data: {}
        }
    })

    let allProjects = [
        {
            name: "Franchise360 Buyer App",
            dec: "This is basically the section from where a user can get to know about the services & purchase the plan for his franchise.",
            date: "June, 2024 - Present",
            image: buyerApp,
            liveLink: "https://franchisebuilder360.com/",
            skills: [
                'React,', "Tailwind", 'JavaScript (ES6)', 'React + Vite', 'Redux-Toolkit', 'Git', 'PayU'
            ],
            details: [
                "All-in-one mobile and web app built to manage franchise operations easily.",
                "Separate modules for brand owners, promoters, and customers to handle tasks like operations, promotions, and purchases."
            ]
        },
        {
            name: "Franchise360 Brand Owner App",
            dec: 'Empowers businesses to build and manage their franchise network with tools for tracking performance, handling franchise requests, and driving expansion.',
            date: "August, 2024 - Present",
            image: brandOwner,
            liveLink: "https://nirvana-dashboard.globalgarner.org/dashboard/brand-owner",
            skills: [
                'React,', "Tailwind", 'JavaScript (ES6)', 'React + Vite', 'Redux-Toolkit', 'Git', 'PayU', 'Apexcharts'
            ],
            details: [
                "Helps businesses create and manage their franchise network.",
                'Includes tools to monitor performance and track franchise growth.',
                'Easily handles franchise requests and approvals in one place.'
            ]
        },
        {
            name: "Franchise360 Brand Promoter App",
            date: "August, 2024 - Present",
            dec: "Enables promoters to earn through leads, referrals, and sales commissions, with real-time tracking and performance reporting.",
            image: brandPromoter,
            liveLink: "https://nirvana-dashboard.globalgarner.org/dashboard/brand-promoter",
            skills: [
                'React,', "Tailwind", 'JavaScript (ES6)', 'React + Vite', 'Redux-Toolkit', 'Git', 'PayU', 'Apexcharts'
            ],
            details: [
                "Promoters can earn via leads, referrals, and sales commissions.",
                "Real-time tracking of earnings and performance.",
                "Easy access to detailed reports for transparency and insights."
            ]
        },
        {
            name: "E-Commerce Customer App",
            date: "August, 2024 - Present",
            dec: "After buying the franchise the user can opt for his own E-Commerce store to show the products added from his dashboard to his customers with features like product browsing, filtering, and search, buying, order summary,etc.",
            image: ecommerceApp,
            liveLink: "https://nirvana-ecommerce.globalgarner.org/",
            skills: [
                'React,', "Tailwind", 'JavaScript (ES6)', 'React + Vite', 'Redux-Toolkit', 'Git', 'PayU'
            ],
            details: [
                'Customer-friendly e-commerce app to browse brands, shop products, and access deals.',
                'Enhances the buying experience with an easy-to-use interface and exclusive offers.'
            ]
        },

        //Franchise apps ends
        {
            name: "User Dashboard",
            date: "September, 2024 - September, 2024",
            dec: "A website for a company webinar event to provide attendees with event details and registration options.",
            image: userDashboard,
            liveLink: "https://user-dashboard-zeta-one.vercel.app",
            skills: [
                'HTML/CSS', "Tailwind", 'Material Tailwind', 'JavaScript (ES6)', 'React + Vite', 'Redux-Toolkit', 'React Router Dom', 'React apexcharts'
            ],
            details: [
                "Developed a responsive, component-based User Dashboard using React.js and Tailwind CSS.",
                "focusing on interactive elements like Dark mode functionality, Local storage, Redux toolkit, Responsive Bar charts and Pie Chart charts - (react-apexcharts)",
                "Ensured mobile-first design and optimized site performance, with deployment on Vercel for fast and reliable hosting with continuous integration from Git."
            ]
        },
        {
            name: "Webinar Website",
            date: "August, 2024 - September, 2024",
            dec: "A website for a company webinar event to provide attendees with event details and registration options.",
            image: expo,
            liveLink: "https://webinar.globalgarner.com/",
            skills: [
                'HTML', "CSS", 'Tailwind', 'React', 'Javascript', 'Material UI', 'Bitbucket', 'Git', 'Razorpay Payment Gateway'
            ],
            details: [
                "Developed a responsive, component-based website using React.js and Tailwind CSS.",
                "focusing on interactive elements like speaker profiles and registration forms.",
                "Integrated Razorpay for secure payment processing during registration.",
                "Ensured mobile-first design and optimized site performance, with deployment on bitbucket for fast and reliable hosting with continuous integration from Git."
            ]
        },
        {
            name: "Jagods Web App",
            dec: "Food ordering platform",
            date: "September, 2023 - December, 2024",
            image: jagods,
            liveLink: "https://jagods.com/",
            skills: [
                'HTML', "CSS", 'Material-Tailwind', 'React', 'Javascript', 'Lucid Icons', 'Git', 'GitHub', 'Google APIs', 'Razorpay Payment Gateway'
            ],
            details: [
                "Developed and maintained the <b>Jagods web application </b>, a robust <b>food ordering</b> platform that allows users to browse menus, customize orders, and make payments seamlessly.",
                "Collaborated with backend teams to integrate <b>RESTful APIs,</b> ensuring efficient data retrieval and a smooth user experience.",
                "Implemented <b>skeleton loading (shimmer effects)</b> and <b>infinite scrolling </b> to enhance user experience when handling large data sets.",
                "<b>Worked in an Agile environment,</b> contributing to sprint planning sessions, and performing code reviews.",
                "Built a responsive UI using <strong> React, Material-Tailwind, and integrated Google APIs <strong> for live location/address.",
                "Utilized <b>Redux for state management</b> and <b> React Router </b> for navigation, optimizing performance through <b>lazy loading</b> techniques."
            ]
        },
        {
            name: "Jagdai Food Web App",
            dec: "Food franchise website.",
            date: "February, 2023 - May, 2023",
            image: jagdai,
            liveLink: "https://jagdaifoods.com/",
            skills: [
                'HTML', "CSS", 'Tailwind', 'React', 'Javascript', 'Material UI', 'Git', 'GitHub'
            ],
            details: [
                "Designed and developed the website using <b>React.js</b> with a focus on clean, <b> reusable components </b> and <b>a user-friendly interface.</b>",
                "Styled the website with <b> Tailwind CSS </b>, creating a visually appealing and responsive design for optimal viewing across devices.",
                "Created sections highlighting the franchise’s <b> menu </b>, <b> locations </b>, and information on how to become a <b> franchisee, </b><b> enhancing brand engagement.</b>",
                "Implemented <b> SEO </b> best practices to increase online visibility and attract potential franchise partners."
            ]
        },
        {
            name: "Cashaqua Website",
            date: "July, 2023 - October, 2023",
            dec: "“Pani Pe Petrol Ka Cashback”. Global garner water franchise website.",
            image: cashaqua,
            liveLink: "https://globalgarner.com/cashaqua",
            skills: [
                'HTML', "CSS", 'Tailwind', 'React', 'Javascript', 'Material UI', 'Bitbucket', 'Git', 'Google APIs'
            ],
            details: [
                "Developed a business opportunity for a business person named <b>“CashAqua”.</b> It is a packaged drinking water bottle brand Just like Kinlay, Bisleri, or Aquafina. The word CashAqua consists of two words <b>“Cash”</b> used for Cashback and <b>“Aqua”</b> used for Water this means cashback on water. It has launched with the tagline <b>“Pani Pe Petrol Ka Cashback”.</b>",
                "Built a responsive UI using <strong> React, Tailwind, and integrated Google APIs <strong> for location.",
                "Implemented <b>skeleton loading (shimmer effects)</b> and <b>infinite scrolling </b> to enhance user experience when handling large data sets.",
                "Utilized <b> React Router </b> for navigation, optimizing performance through <b>lazy loading</b> techniques."
            ]
        },
        {
            name: "Webinar Website",
            date: "June, 2024 - July, 2024",
            dec: "A website for a company webinar event to provide attendees with event details and registration options.",
            image: webinar,
            liveLink: "https://webinar-staging.web.app/",
            skills: [
                'HTML', "CSS", 'Tailwind', 'React', 'Javascript', 'Material UI', 'Bitbucket', 'Git', 'Razorpay Payment Gateway'
            ],
            details: [
                "Developed a responsive, component-based website using React.js and Tailwind CSS.",
                "focusing on interactive elements like speaker profiles and registration forms.",
                "Integrated Razorpay for secure payment processing during registration.",
                "Ensured mobile-first design and optimized site performance, with deployment on bitbucket for fast and reliable hosting with continuous integration from Git."
            ]
        },
        {
            name: "UPOS - The Digital Mall Web App",
            date: "July, 2021 - June, 2024",
            dec: "“Ab sabka Business hai Apna Business”. UPOS - The Digital Mall web application.",
            image: uposMall,
            liveLink: "https://globalgarner.com/upos",
            skills: [
                'HTML', "CSS", 'Tailwind', 'React', 'Javascript', 'Material UI', 'Bitbucket', 'Razorpay Payment Gateways'
            ],
            details: [
                "Developed a unified online platform that combines <b>shopping, travel bookings, and access to local stores </b>, creating a seamless and rewarding digital mall experience. It offers users access to <b> multiple brands, integrated services, and unique cashback options, <b> all within a user-friendly and <b> SEO-optimized </b>environment.",
                "Utilized <b> React Router </b> for navigation, optimizing performance through <b>Lazy loading and Memoization </b> techniques.",
                "<b> Razorpay Payment gateway </b> implementation.",
                "Software development version control using <b> Bitbucket.</b>"
            ]
        },
        {
            name: "User Web App",
            date: "July, 2021 - June, 2024",
            dec: "Multi purpose e-commerce platform",
            image: userApp,
            liveLink: "https://globalgarner.com/",
            skills: [
                'HTML', "CSS", 'Tailwind', 'React', 'Javascript', 'Socket.IO', 'Material UI', 'Bitbucket', 'Git', 'Google APIs', 'Payment Gateways ( Razorpay, UPI, Payu )'
            ],
            details: [
                "Developed a <b>Multi purpose E-commerce platform </b> enabling sellers to offer products from popular <Travel> Gift Cards, Travel bookings (flight & bus), OfferZone ,Lab Tests, CashAqua, Bill Pay & Recharge, Best Shopping Websites </b> and connect with over 300+ Brands, 600k+ Users, 36k+ Vendors, 20k+ Upos Holder, 2Cr+ Products,  10+ Franchise.",
                "Optimized the platform for <b> SEO </b>, implementing best practices like meta tags, fast-loading pages, leading to improved search engine rankings and increased organic traffic.",
                "Implemented <b>skeleton loading (shimmer effects)</b> and <b>infinite scrolling </b> to enhance user experience when handling large data sets.",
                "Implemented a <b> Cart system </b> allowing users to add and manage items across diﬀerent services seamlessly. Developed a common utility to manage <b> multiple payment gateways, wallet systems, </b> and <b> coin redemption <b>, on checkout along with dynamic routing & and also handle <b>private routes/Unauthorized routes.</b>",
                "<b> PayU Payment gateway </b> implementation.",
                "Utilized <b> React Router </b> for navigation, optimizing performance through <b>Lazy loading and Memoization </b> techniques.",
                "Software development version control using <b> Bitbucket.</b>"
            ]
        },
    ]


    const getProjectDetails = (key, d) => {
        setState((prev) => {
            return {
                ...prev,
                isProjectDetail: {
                    ...prev.isProjectDetail,
                    open: key,
                    data: d
                }
            }
        })
    }

    return (
        <>
            <SegmentHeading heading='Projects' subhead="Explore my latest projects that showcase my expertise and dedication to crafting exceptional designs." />
            <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'>
                {
                    allProjects?.map((d, i) => (
                        <div key={i} className="group" onClick={() => getProjectDetails(true, d)}>
                            <figure className='w-full overflow-hidden rounded-2xl relative cursor-pointer'>
                                <img src={d?.image} loading="lazy" alt="" className='w-full h-[170px] transition-all duration-500 group-hover:opacity-70 group-hover:scale-110' />
                                <div className=" absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <Eye size={16} strokeWidth={2} className="text-eight bg-secondary w-[50px] h-[50px] rounded-xl  p-3 transform scale-75 group-hover:scale-100 transition-transform duration-500" />
                                </div>
                            </figure>
                            <h6 className='text-sm text-seventh mt-3'>{d?.name}</h6>
                            <p className='text-sm text-fifth mt-1 line-clamp-2'>{d?.dec}</p>
                            <p className='text-sm text-eight mt-1'>{d?.date}</p>
                        </div>
                    ))
                }
            </div>

            <DialogComponent
                isOpen={state?.isProjectDetail?.open}
                onClose={() => getProjectDetails(false, state?.isProjectDetail?.data)}
                size="sm"
                header=""
            >
                <>
                    <img src={state?.isProjectDetail?.data?.image} alt="" className='w-full rounded-xl mx-auto h-[250px]' loading="lazy" />
                    <h5 className='mt-2 text-primary text-md md:text-lg font-semibold'>{state?.isProjectDetail?.data?.name}</h5>
                    <h5 className=' text-eight text-xs'>{state?.isProjectDetail?.data?.date}</h5>
                    <div className='flex flex-wrap gap-2 my-3'>
                        {
                            state?.isProjectDetail?.data?.skills?.map((d, i) => (
                                <p key={i} className='text-xs text-primary px-3 py-1 rounded-full border hover:shadow-sm bg-[#f1f5f9]'>{d}</p>
                            )
                            )
                        }
                    </div>
                    <div className='h-full max-h-[200px] overflow-y-scroll pr-[4px]'>
                        {
                            state?.isProjectDetail?.data?.details?.map((d, i) => (
                                <div className='flex items-start mb-2 last:mb-0 gap-1 w-full ' key={i}>
                                    <ChevronRight size={16} strokeWidth={2} className='text-forth rounded-lg' />
                                    <div className='text-start w-full overflow-hidden'>
                                        <h2 className='text-sm text-forth' dangerouslySetInnerHTML={{ __html: d }}></h2>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='w-full mt-3'>
                        <button onClick={() => window.open(state?.isProjectDetail?.data?.liveLink, "_blank")}
                            className='flex items-center  rounded-lg border-[1px] border-eight justify-center gap-2 bg-seventh px-4 py-1 mx-auto w-[30%] hover:bg-eight group' >
                            <p className='text-sm whitespace-nowrap text-eight group-hover:text-seventh'>Live Link</p>
                            <Link size={16} strokeWidth={2} className='text-eight rounded-lg group-hover:text-seventh' />
                        </button>
                    </div>
                </>
            </DialogComponent>
        </>
    )
}

export default Projects