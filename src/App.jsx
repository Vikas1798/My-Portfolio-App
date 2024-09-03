import AppWrapper from "./Components/Common/AppWrapper";
import LeftContainer from "./Components/LeftContainer";
import RightContainer from "./Components/RightContainer";

const App = () => {
    return (
        <section className="bg-primary h-full xl:py-10">
            <AppWrapper>
                <div className="grid grid-cols-1 xl:grid-cols-8 gap-6">
                    <div className="xl:col-span-2 border-[1px] border-secondary bg-tertiary rounded-2xl h-fit">
                        <LeftContainer />
                    </div>
                    <div className="xl:col-span-6  border-[1px] border-secondary bg-tertiary rounded-2xl h-fit">
                        <RightContainer />
                    </div>
                </div>
            </AppWrapper>
            <p className="text-md text-fifth mt-10 flex items-center justify-center">© {new Date().getFullYear()}. Vikas H K All rights reserved.</p>
            <p className="text-sm text-fifth my-2 pb-10 flex items-center justify-center">About this website : built with , Vite, Tailwind CSS, Framer Motion and Vercel hosting.</p>
        </section>
    )
}

export default App;
