const MySkillsSection = ({colorThemeData}) => {
    return (
        <section className={`w-full gap-x-20 place-items-center px-10 md:px-36 xl:px-52 2xl:px-96 duration-100 relative overflow-x-hidden py-12 md:py-32 z-[2]`}>
            <h1 className={`text-3xl md:text-6xl text-center font-semibold z-10 ${colorThemeData.headingTextColor}`}>
            My Skills
            </h1>
            <div className={`w-full grid lg:grid-cols-3 gap-5 mt-16`}>
                <div className={`w-full h-full p-5 py-7 border rounded-md ${colorThemeData.backgroundColor} ${colorThemeData.codeSectionBackgroundColor} ${colorThemeData.codeSectionborderColor} z-10 selection:bg-sky-600 z-[2]`}>
                    <div className="w-fit p-2 bg-neutral-900 border-b border-neutral-950">
                    <h1 className={`text-sm w-full text-orange-200 ${colorThemeData.headingTextColor}`}>
                        languages.json
                    </h1>
                    </div>

                    <ul className="flex flex-col gap-1">
                    <li>
                        <div className="cursor-text w-full p-2 pr-4 bg-neutral-900 text-white flex justify-between items-start group">
                        <div className="text-left font-mono">
                            <span className="text-red-400">"html"</span>: <span className="text-green-300">"latest"</span>,<br />
                            <span className="text-red-400">"css"</span>: <span className="text-green-300">"latest"</span>,<br />
                            <span className="text-red-400">"javascript"</span>: <span className="text-green-300">"latest"</span>,<br />
                            <span className="text-red-400">"php"</span>: <span className="text-green-300">"latest"</span>,<br />
                        </div>
                        </div>
                    </li>
                    </ul>
                </div>
                <div className={`w-full h-full p-5 py-7 border rounded-md ${colorThemeData.backgroundColor} ${colorThemeData.codeSectionBackgroundColor} ${colorThemeData.codeSectionborderColor} z-10 selection:bg-sky-600`}>
                    <div className="w-fit p-2 bg-neutral-900 border-b border-neutral-950">
                    <h1 className={`text-sm w-full text-orange-200 ${colorThemeData.headingTextColor}`}>
                        databases.json
                    </h1>
                    </div>

                    <ul className="flex flex-col gap-1">
                    <li>
                        <div className="cursor-text w-full p-2 pr-4 bg-neutral-900 text-white flex justify-between items-start group">
                        <div className="text-left font-mono">
                            <span className="text-red-400">"my-sql"</span>: <span className="text-green-300">"latest"</span>,<br />
                            <span className="text-red-400">"firestore"</span>: <span className="text-green-300">"latest"</span>,<br />
                        </div>
                        </div>
                    </li>
                    </ul>
                </div>
                <div className={`w-full h-full p-5 py-7 border rounded-md ${colorThemeData.backgroundColor} ${colorThemeData.codeSectionBackgroundColor} ${colorThemeData.codeSectionborderColor} z-10 selection:bg-sky-600`}>
                    <div className="w-fit p-2 bg-neutral-900 border-b border-neutral-950">
                    <h1 className={`text-sm w-full text-orange-200 ${colorThemeData.headingTextColor}`}>
                        technologies.json
                    </h1>
                    </div>

                    <ul className="flex flex-col gap-1">
                    <li>
                        <div className="cursor-text w-full p-2 pr-4 bg-neutral-900 text-white flex justify-between items-start group">
                        <div className="text-left font-mono">
                            <span className="text-red-400">"git"</span>: <span className="text-green-300">"latest"</span>,<br />
                            <span className="text-red-400">"tailwind-css"</span>: <span className="text-green-300">"latest"</span>,<br />
                            <span className="text-red-400">"react-js"</span>: <span className="text-green-300">"latest"</span>,<br />
                            <span className="text-red-400">"next-js"</span>: <span className="text-green-300">"latest"</span>,<br />
                            <span className="text-red-400">"laravel"</span>: <span className="text-green-300">"latest"</span>,
                        </div>
                        </div>
                    </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default MySkillsSection;