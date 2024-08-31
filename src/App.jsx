import AppWrapper from "./Components/AppWrapper";
import LeftContainer from "./Components/LeftContainer";
import RightContainer from "./Components/RightContainer";

const App = () => {
    return (
        <section className="bg-primary h-full xl:py-10">
            <AppWrapper>
                <div className="grid grid-cols-1 xl:grid-cols-8 gap-6">
                    <div className="xl:col-span-2 border-[1px] border-secondary bg-tertiary rounded-2xl special-box-shadow">
                        <LeftContainer />
                    </div>
                    <div className="xl:col-span-6  border-[1px] border-secondary bg-tertiary rounded-2xl special-box-shadow">
                        <RightContainer />
                    </div>
                </div>
            </AppWrapper>
        </section>
    )
}

export default App;
