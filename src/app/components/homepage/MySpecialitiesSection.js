const MySpecialitiesSection = ({colorThemeData}) => {
    return (
        <section className={`w-full flex flex-col
         xl:grid xl:grid-cols-9 2xl:grid-cols-5 gap-x-14 2xl:gap-x-20 place-items-center px-10 md:px-36 lg:px-44 xl:px-52 2xl:px-96 duration-100 relative overflow-x-hidden py-12 md:py-32`}>
            <div className="col-span-5 2xl:col-span-3 z-10">
                <p className={`${colorThemeData.descriptionTextColor} font-medium`}>See more,</p>
                <h1 className={`text-4xl md:text-6xl font-semibold ${colorThemeData.headingTextColor}`}>
                    My Specialties
                </h1>
                <p className={`mt-5 md:text-xl ${colorThemeData.descriptionTextColor} text-justify 2xl:text-left`}>
                    I'm familiar with various types of website projects, including portfolios, business profiles, marketplaces, and customized web applications.  
                    I regularly build features like CRUD operations, payment gateway integration, user authentication (via email/password, phone number, or Google), OTP verification, and much more.
                    <br/><br/>
                    I also offer design-to-code services, primarily from Figma (which I absolutely love), but I’m flexible with other formats like JPG, PDF, etc.
                    <br/><br/>
                    Don’t worry about your project — I’m a professional Google searcher. If I ever get stuck, you can bet I’ll find the answer (probably on Stack Overflow at 3 AM 😄).
                </p>
            </div>
            <div className={`w-full h-[25rem] xl:h-[30rem] hover:shadow-2xl shadow-gray-800 p-14 col-span-4 2xl:col-span-2 ${colorThemeData.display1BackgroundColor} flex flex-col justify-end z-10 rounded-lg lg:rounded-3xl relative overflow-hidden font-oswald duration-300 cursor-pointer group mt-7 xl:mt-0`}>
                <div className="absolute top-6 right-5 md:right-10 text-right">
                    <h2 className={`font-medium md:text-lg ${colorThemeData.display1DescriptionColor}`}>
                        Fullstack
                    </h2>
                    <h1 className={`text-xl md:text-3xl font-bold ${colorThemeData.display1HeadingColor}`}>
                        Web Development
                    </h1>
                </div>

                {/* 3 */}
                <div className={`w-[80%] h-[50%] group-hover:h-[52%] rounded-tl-lg bg-gray-400 absolute z-[3] right-12 bottom-0 flex flex-col overflow-hidden duration-300`}>
                </div>

                {/* 2 */}
                <div className={`w-[80%] h-[60%] group-hover:h-[63%] rounded-tl-lg bg-gray-500 absolute z-[3] right-6 bottom-0 flex flex-col overflow-hidden duration-300`}>

                </div>
                {/* 1 */}
                <div className={`w-[80%] h-[70%] group-hover:h-[75%] rounded-tl-lg bg-gray-100 absolute z-[4] right-0 bottom-0 flex flex-col overflow-hidden duration-300`}>
                    <div>
                        <div className={`w-full h-10 bg-gray-400 flex items-center space-x-5 px-3`}>
                            <div className="flex items-center space-x-1">
                                <div className={`w-3 h-3 rounded-md bg-pink-300`}></div>
                                <div className={`w-3 h-3 rounded-md bg-indigo-300`}></div>
                                <div className={`w-3 h-3 rounded-md bg-emerald-300`}></div>
                            </div>
                            <div className={`w-16 h-3 rounded-md bg-gray-300`}></div>
                            <div className={`w-16 h-3 rounded-md bg-gray-500`}></div>
                            <div className={`w-16 h-3 rounded-md bg-gray-500`}></div>
                        </div>
                        <div className={`w-full h-12 bg-gray-300 flex items-center pl-5`}>
                            <div className="w-full h-5 bg-gray-200 rounded-l-full flex items-center px-1 space-x-2">
                                <div className="h-3 w-3 rounded-full bg-gray-300 flex items-center justify-center">
                                </div>
                                <p className="text-[10px] text-gray-400">
                                    aryatjiutanto.my.id
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="w-full px-10 py-4 flex items-center space-x-3">
                            <div className="w-10 h-3 bg-gray-200 rounded-md"></div>
                            <div className="w-10 h-3 bg-gray-200 rounded-md"></div>
                            <div className="w-10 h-3 bg-gray-200 rounded-md"></div>
                        </div>
                        <div className="w-full py-14 px-20">
                            <div className="w-72 h-10 bg-gray-200 rounded-md"></div>
                            <div className="w-40 h-10 bg-gray-200 mt-5 rounded-md"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MySpecialitiesSection;