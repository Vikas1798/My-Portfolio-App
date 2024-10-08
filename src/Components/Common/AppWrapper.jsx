
const AppWrapper = ({ children, className }) => {
    return (
        <section className="w-full">
            <section className={`w-full xl:w-[80%] px-[10px] xl:px-5 py-5 xl:py-8 mx-auto ${className}`}>
                {children}
            </section>
        </section>
    );
};

export default AppWrapper;
