import Image from "next/image";

const MyProject = () => {
    return (
        <section className={`w-full px-10 md:px-36 lg:px-44 xl:px-52 2xl:px-96 duration-100 relative overflow-x-hidden py-12 md:py-32 text-neutral-300 flex flex-col items-center z-10`}>
            <div className="space-y-4 text-center">
                <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold text-white">
                    My Projects
                </h1>
                <p className="text-center text-lg">
                    I don't have many projects, as I tend to spend more time diving deep into specific topics. Here are some of the projects I've built along the way. 😅
                </p>
            </div>
            <div className="w-full mt-10">
                <div className="w-full h-[550px] relative">
                    <Image src="/assets/project/odiano.webp" alt="Odiano" fill className="object-cover object-center z-10" />
                </div>
            </div>
        </section>
    )
}

export default MyProject;