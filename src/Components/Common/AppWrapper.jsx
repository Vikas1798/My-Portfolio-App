
const AppWrapper = ({ children }) => {
    return (
        <section className="w-full">
            <section className={`w-full xl:w-[75%] px-[10px] xl:px-5 py-5 xl:py-8 mx-auto`}>
                {children}
            </section>
        </section>
    );
};

export default AppWrapper;
