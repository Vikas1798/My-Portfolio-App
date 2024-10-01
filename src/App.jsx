import { useEffect, useState } from "react";
import AppWrapper from "./Components/Common/AppWrapper";
import LeftContainer from "./Components/LeftContainer";
import RightContainer from "./Components/RightContainer";
import HelmetComponent from "./Components/Components/HelmetComponent";
import { Mail } from "lucide-react";

const App = () => {
    const [state, setState] = useState({
        segment: 'about'
    })

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [state?.segment]);

    let allSegment = [
        {
            name: 'About',
            slug: 'about'
        },
        {
            name: 'Resume',
            slug: 'resume'
        },
        {
            name: 'Projects',
            slug: 'projects'
        },
        {
            name: 'Contact',
            slug: 'contact'
        }
    ]

    const updateTab = (d) => {
        setState((prev) => {
            return {
                ...prev,
                segment: d
            }
        })
    }

    return (
        <>
            <HelmetComponent />
            <section className="bg-primary  xl:py-10 relative min-h-screen">
                <AppWrapper>
                    <div className="grid grid-cols-1 xl:grid-cols-8 gap-3 md:gap-6">
                        <div className="xl:col-span-2 border-[1px] border-secondary bg-tertiary rounded-2xl h-fit">
                            <LeftContainer />
                        </div>
                        <div className="xl:col-span-6  border-[1px] border-secondary bg-tertiary rounded-2xl h-fit">
                            <RightContainer allSegment={allSegment} segment={state?.segment} updateTab={updateTab} />
                        </div>
                    </div>
                </AppWrapper>
                <AppWrapper className='!pb-16 md:!pb-0'>
                    <div className="md:flex justify-between  bg-forth p-2 rounded-md items-center">
                        <p className="text-md text-fifth  flex items-center justify-center mb-2 md:mb-0">© 2021 - {new Date().getFullYear()} All rights reserved.</p>
                        <p className="text-md text-fifth  flex items-center justify-center mb-2 md:mb-0">Made with ❤️ by <strong className="ms-2 cursor-pointer hover:underline" onClick={() => window.open('https://www.linkedin.com/in/vikas-hk-frontend/', "_blank")}> vikashk </strong></p>
                        <p className="text-md text-fifth  flex items-center justify-center cursor-pointer mb-2 md:mb-0 hover:underline"><Mail size={18} strokeWidth={1.5} className="mr-2" />vikas17.hk@gmail.com</p>
                    </div>
                </AppWrapper>
                <div className="flex xl:hidden h-[60px] fixed bottom-2   w-full z-50 p-2">
                    <div className="w-[90%] sm:w-[70%] grid grid-cols-4 gap-2 items-center mx-auto bg-[#2b2b2cbf] rounded-full bg-opacity-60 backdrop-blur-sm">
                        {
                            allSegment?.map((d, i) => (
                                <p onClick={() => updateTab(d?.slug)} className={` text-xs sm:text-sm flex items-center justify-center  ${state.segment === d.slug ? ' text-eight' : ' text-seventh'}`} key={i}>{d?.name}</p>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default App;
//