import { useEffect, useState } from "react";
import AppWrapper from "./Components/Common/AppWrapper";
import LeftContainer from "./Components/LeftContainer";
import RightContainer from "./Components/RightContainer";
import HelmetComponent from "./Components/Components/HelmetComponent";

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
                <p className="text-md text-fifth py-10 flex items-center justify-center">© 2021 - {new Date().getFullYear()}. Vikas H K All rights reserved.</p>
                {/* <p className="text-sm text-fifth mt-2 pb-16 xl:pb-10 flex items-center justify-center text-center">About this website : built with , Vite, Tailwind CSS, Framer Motion and Vercel hosting.</p> */}

                <div className="flex xl:hidden h-[50px] fixed bottom-2   w-full z-50 p-2">
                    <div className="w-[90%] sm:w-[70%] grid grid-cols-4 gap-2 items-center mx-auto bg-[#2b2b2cbf] rounded-2xl bg-opacity-60 backdrop-blur-sm">
                        {
                            allSegment?.map((d, i) => (
                                <p onClick={() => updateTab(d?.slug)} className={`text-xs sm:text-sm flex items-center justify-center  ${state.segment === d.slug ? ' text-basicGreen' : ' text-seventh'}`} key={i}>{d?.name}</p>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default App;
