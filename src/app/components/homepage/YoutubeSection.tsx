import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const YoutubeSection = () => {
    const t = useTranslations('homepage.youtube');

    return (
        <section className={`w-full flex flex-col-reverse xl:grid xl:grid-cols-5 gap-x-14 2xl:gap-x-20 place-items-center px-6 md:px-36 lg:px-44 xl:px-52 2xl:px-96 duration-100 relative overflow-x-hidden py-12 md:py-32 selection:bg-red-400`}>
            <div className={`w-full h-[20rem] lg:h-[25rem] p-14 col-span-3 bg-white flex flex-col justify-end z-10 rounded-xl lg:rounded-3xl relative font-oswald group hover:shadow-2xl shadow-gray-800 cursor-pointer duration-300 overflow-hidden mt-7 xl:mt-0`}>
                <div className="absolute top-6 right-5 md:right-10 text-right">
                    <h2 className={`font-medium md:text-lg text-neutral-600`}>
                        Repository
                    </h2>
                    <h1 className={`text-2xl md:text-3xl font-bold text-neutral-900`}>
                        {t("cardTitle")}
                    </h1>
                </div>

                {/* left */}
                <div className="w-[55%] h-[45%] group-hover:h-[55%] absolute bottom-0 -left-5 bg-slate-500 rounded-t-lg flex flex-col overflow-hidden duration-300 z-[2]">
                    <div className={`w-full h-14 bg-slate-600 flex flex-col justify-between`}>
                        <div className={`w-full px-3 py-3 flex justify-between items-center`}>
                            <div className={`w-fit flex items-center space-x-1`}>
                                <div className={`w-3 h-3 bg-slate-500 rounded-xs`}></div>
                                <div className={`w-10 h-3 bg-slate-500 rounded-xs`}></div>
                            </div>
                            <div className={`w-fit flex items-center space-x-1`}>
                                <div className={`w-16 h-3 bg-slate-500 rounded-xs`}></div>
                                <div className={`w-3 h-3 bg-slate-500 rounded-xs`}></div>
                                <div className={`w-5 h-3 bg-slate-500 rounded-xs`}></div>
                                <div className={`w-3 h-3 bg-slate-500 rounded-xs`}></div>
                                <div className={`w-3 h-3 bg-slate-500 rounded-xs`}></div>
                                <div className={`w-3 h-3 bg-slate-500 rounded-full`}></div>
                            </div>
                        </div>
                        <div className={`mb-2 px-3 w-fit flex items-center space-x-1`}>
                            <div className={`w-16 h-1 bg-slate-500 rounded-xs`}></div>
                            <div className={`w-10 h-1 bg-slate-500 rounded-xs`}></div>
                            <div className={`w-10 h-1 bg-slate-500 rounded-xs`}></div>
                            <div className={`w-10 h-1 bg-slate-500 rounded-xs`}></div>
                        </div>
                    </div>
                    <div className={`w-full py-4 px-10 grid grid-cols-7 gap-3`}>
                        <div className={`col-span-2`}>
                            <div className={`w-full mt-1 h-20 rounded-xs bg-slate-400`}></div>
                            <div className={`w-full mt-1 h-1 rounded-xs bg-slate-400`}></div>
                        </div>
                        <div className={`col-span-5`}>
                            <div className={`w-full flex items-center space-x-1`}>
                                <div className={`w-[70%] mt-1 h-[7px] rounded-xs bg-slate-400`}></div>
                                <div className={`w-[10%] mt-1 h-[7px] rounded-xs bg-slate-400`}></div>
                                <div className={`w-[10%] mt-1 h-[7px] rounded-xs bg-slate-400`}></div>
                                <div className={`w-[10%] mt-1 h-[7px] rounded-xs bg-slate-400`}></div>
                            </div>

                            <div className={`w-full mt-2`}>
                                <div className={`w-[10%] mt-1 h-[2px] rounded-xs bg-slate-400`}></div>
                                <div className={`w-[20%] mt-1 h-[2px] rounded-xs bg-slate-400`}></div>
                                <div className={`w-[14%] mt-1 h-[2px] rounded-xs bg-slate-400`}></div>
                                <div className={`w-[10%] mt-1 h-[2px] rounded-xs bg-slate-400`}></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* center */}
                <div className="w-[55%] h-[60%] group-hover:h-[65%] absolute bottom-0 left-0 right-0 mx-auto bg-gray-600 rounded-t-lg flex flex-col overflow-hidden duration-300 z-[3]">
                    <div className={`w-full h-14 bg-gray-700 flex flex-col justify-between`}>
                        <div className={`w-full px-3 py-3 flex justify-between items-center`}>
                            <div className={`w-fit flex items-center space-x-1`}>
                                <div className={`w-3 h-3 bg-gray-600 rounded-xs`}></div>
                                <div className={`w-10 h-3 bg-gray-600 rounded-xs`}></div>
                            </div>
                            <div className={`w-fit flex items-center space-x-1`}>
                                <div className={`w-16 h-3 bg-gray-600 rounded-xs`}></div>
                                <div className={`w-3 h-3 bg-gray-600 rounded-xs`}></div>
                                <div className={`w-5 h-3 bg-gray-600 rounded-xs`}></div>
                                <div className={`w-3 h-3 bg-gray-600 rounded-xs`}></div>
                                <div className={`w-3 h-3 bg-gray-600 rounded-xs`}></div>
                                <div className={`w-3 h-3 bg-gray-600 rounded-full`}></div>
                            </div>
                        </div>
                        <div className={`mb-2 px-3 w-fit flex items-center space-x-1`}>
                            <div className={`w-16 h-1 bg-gray-600 rounded-xs`}></div>
                            <div className={`w-10 h-1 bg-gray-600 rounded-xs`}></div>
                            <div className={`w-10 h-1 bg-gray-600 rounded-xs`}></div>
                            <div className={`w-10 h-1 bg-gray-600 rounded-xs`}></div>
                        </div>
                    </div>
                    <div className={`w-full py-4 px-16 grid grid-cols-7 gap-3`}>
                        <div className={`col-span-2`}>
                            <div className={`w-full aspect-square rounded-full bg-gray-500`}></div>
                            <div className={`w-[50%] mt-1 h-[2px] rounded-xs bg-gray-500`}></div>
                            <div className={`w-[60%] mt-[2px] h-[2px] rounded-xs bg-gray-500`}></div>
                            <div className={`w-full mt-1 h-[7px] rounded-xs bg-gray-500`}></div>
                            <div className={`w-[70%] mt-1 h-[2px] rounded-xs bg-gray-500`}></div>
                        </div>
                        <div className={`col-span-5`}>
                            <div className={`w-full flex items-center space-x-1`}>
                                <div className={`w-[70%] mt-1 h-[7px] rounded-xs bg-gray-500`}></div>
                                <div className={`w-[10%] mt-1 h-[7px] rounded-xs bg-gray-500`}></div>
                                <div className={`w-[10%] mt-1 h-[7px] rounded-xs bg-gray-500`}></div>
                                <div className={`w-[10%] mt-1 h-[7px] rounded-xs bg-gray-500`}></div>
                            </div>

                            <div className={`w-full mt-2`}>
                                <div className={`w-full py-2 border-t-[1px] border-gray-500`}>
                                    <div className={`w-full flex justify-between`}>
                                        <div>
                                            <div className={`flex space-x-1 items-center`}>
                                                <div className={`w-12 h-[2px] rounded-xs bg-slate-500`}></div>
                                                <div className={`w-4 h-[2px] rounded-xs bg-gray-500`}></div>
                                            </div>
                                            <div className={`flex space-x-[3px] items-center mt-[6px]`}>
                                                <div className={`flex space-x-[1px] items-center`}>
                                                    <div className={`w-[2px] h-[1px] rounded-xs bg-yellow-600`}></div>
                                                    <div className={`w-4 h-[1px] rounded-xs bg-gray-500`}></div>
                                                </div>
                                                <div className={`flex space-x-[1px] items-center`}>
                                                    <div className={`w-[3px] h-[1px] rounded-xs bg-gray-500`}></div>
                                                    <div className={`w-4 h-[1px] rounded-xs bg-gray-500`}></div>
                                                </div>
                                                <div className={`w-6 h-[1px] rounded-xs bg-gray-500`}></div>
                                            </div>
                                        </div>
                                        <div className={`flex flex-col items-end`}>
                                            <div className={`w-6 h-[4px] bg-gray-500`}></div>
                                            <div className={`w-7 h-[1px] rounded-xs bg-green-700 mt-1`}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`w-full py-2 border-t-[1px] border-gray-500`}>
                                    <div className={`w-full flex justify-between`}>
                                        <div>
                                            <div className={`flex space-x-1 items-center`}>
                                                <div className={`w-16 h-[2px] rounded-xs bg-slate-500`}></div>
                                                <div className={`w-4 h-[2px] rounded-xs bg-gray-500`}></div>
                                            </div>
                                            <div className={`flex space-x-[3px] items-center mt-[6px]`}>
                                                <div className={`flex space-x-[1px] items-center`}>
                                                    <div className={`w-[2px] h-[1px] rounded-xs bg-red-600`}></div>
                                                    <div className={`w-4 h-[1px] rounded-xs bg-gray-500`}></div>
                                                </div>
                                                <div className={`flex space-x-[1px] items-center`}>
                                                    <div className={`w-[3px] h-[1px] rounded-xs bg-gray-500`}></div>
                                                    <div className={`w-4 h-[1px] rounded-xs bg-gray-500`}></div>
                                                </div>
                                                <div className={`w-6 h-[1px] rounded-xs bg-gray-500`}></div>
                                            </div>
                                        </div>
                                        <div className={`flex flex-col items-end`}>
                                            <div className={`w-6 h-[4px] bg-gray-500`}></div>
                                            <div className={`w-7 h-[1px] rounded-xs bg-green-700 mt-1`}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`w-full py-2 border-t-[1px] border-gray-500`}>
                                    <div className={`w-full flex justify-between`}>
                                        <div>
                                            <div className={`flex space-x-1 items-center`}>
                                                <div className={`w-10 h-[2px] rounded-xs bg-slate-500`}></div>
                                                <div className={`w-4 h-[2px] rounded-xs bg-gray-500`}></div>
                                            </div>
                                            <div className={`flex space-x-[3px] items-center mt-[6px]`}>
                                                <div className={`flex space-x-[1px] items-center`}>
                                                    <div className={`w-[2px] h-[1px] rounded-xs bg-purple-400`}></div>
                                                    <div className={`w-4 h-[1px] rounded-xs bg-gray-500`}></div>
                                                </div>
                                                <div className={`flex space-x-[1px] items-center`}>
                                                    <div className={`w-[3px] h-[1px] rounded-xs bg-gray-500`}></div>
                                                    <div className={`w-4 h-[1px] rounded-xs bg-gray-500`}></div>
                                                </div>
                                                <div className={`w-6 h-[1px] rounded-xs bg-gray-500`}></div>
                                            </div>
                                        </div>
                                        <div className={`flex flex-col items-end`}>
                                            <div className={`w-6 h-[4px] bg-gray-500`}></div>
                                            <div className={`w-7 h-[1px] rounded-xs bg-green-700 mt-1`}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`w-full py-2 border-t-[1px] border-gray-500`}>
                                    <div className={`w-full flex justify-between`}>
                                        <div>
                                            <div className={`flex space-x-1 items-center`}>
                                                <div className={`w-14 h-[2px] rounded-xs bg-slate-500`}></div>
                                                <div className={`w-4 h-[2px] rounded-xs bg-gray-500`}></div>
                                            </div>
                                            <div className={`flex space-x-[3px] items-center mt-[6px]`}>
                                                <div className={`flex space-x-[1px] items-center`}>
                                                    <div className={`w-[2px] h-[1px] rounded-xs bg-orange-600`}></div>
                                                    <div className={`w-4 h-[1px] rounded-xs bg-gray-500`}></div>
                                                </div>
                                                <div className={`flex space-x-[1px] items-center`}>
                                                    <div className={`w-[3px] h-[1px] rounded-xs bg-gray-500`}></div>
                                                    <div className={`w-4 h-[1px] rounded-xs bg-gray-500`}></div>
                                                </div>
                                                <div className={`w-6 h-[1px] rounded-xs bg-gray-500`}></div>
                                            </div>
                                        </div>
                                        <div className={`flex flex-col items-end`}>
                                            <div className={`w-6 h-[4px] bg-gray-500`}></div>
                                            <div className={`w-7 h-[1px] rounded-xs bg-green-700 mt-1`}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`w-full py-2 border-t-[1px] border-gray-500`}>
                                    <div className={`w-full flex justify-between`}>
                                        <div>
                                            <div className={`flex space-x-1 items-center`}>
                                                <div className={`w-9 h-[2px] rounded-xs bg-slate-500`}></div>
                                                <div className={`w-4 h-[2px] rounded-xs bg-gray-500`}></div>
                                            </div>
                                            <div className={`flex space-x-[3px] items-center mt-[6px]`}>
                                                <div className={`flex space-x-[1px] items-center`}>
                                                    <div className={`w-[2px] h-[1px] rounded-xs bg-purple-500`}></div>
                                                    <div className={`w-4 h-[1px] rounded-xs bg-gray-500`}></div>
                                                </div>
                                                <div className={`flex space-x-[1px] items-center`}>
                                                    <div className={`w-[3px] h-[1px] rounded-xs bg-gray-500`}></div>
                                                    <div className={`w-4 h-[1px] rounded-xs bg-gray-500`}></div>
                                                </div>
                                                <div className={`w-6 h-[1px] rounded-xs bg-gray-500`}></div>
                                            </div>
                                        </div>
                                        <div className={`flex flex-col items-end`}>
                                            <div className={`w-6 h-[4px] bg-gray-500`}></div>
                                            <div className={`w-7 h-[1px] rounded-xs bg-green-700 mt-1`}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* right */}
                <div className="w-[55%] h-[45%] group-hover:h-[55%] absolute bottom-0 -right-5 bg-gray-500 rounded-t-lg flex flex-col overflow-hidden duration-300 z-[2]">
                    <div className={`w-full h-14 bg-gray-600 flex flex-col justify-between`}>
                        <div className={`w-full px-3 py-3 flex justify-between items-center`}>
                            <div className={`w-fit flex items-center space-x-1`}>
                                <div className={`w-3 h-3 bg-gray-500 rounded-xs`}></div>
                                <div className={`w-10 h-3 bg-gray-500 rounded-xs`}></div>
                            </div>
                            <div className={`w-fit flex items-center space-x-1`}>
                                <div className={`w-16 h-3 bg-gray-500 rounded-xs`}></div>
                                <div className={`w-3 h-3 bg-gray-500 rounded-xs`}></div>
                                <div className={`w-5 h-3 bg-gray-500 rounded-xs`}></div>
                                <div className={`w-3 h-3 bg-gray-500 rounded-xs`}></div>
                                <div className={`w-3 h-3 bg-gray-500 rounded-xs`}></div>
                                <div className={`w-3 h-3 bg-gray-500 rounded-full`}></div>
                            </div>
                        </div>
                        <div className={`mb-2 px-3 w-fit flex items-center space-x-1`}>
                            <div className={`w-16 h-1 bg-gray-500 rounded-xs`}></div>
                            <div className={`w-10 h-1 bg-gray-500 rounded-xs`}></div>
                            <div className={`w-10 h-1 bg-gray-500 rounded-xs`}></div>
                            <div className={`w-10 h-1 bg-gray-500 rounded-xs`}></div>
                        </div>
                    </div>
                    <div className={`w-full py-4 px-16 grid grid-cols-7 gap-3`}>
                        <div className={`col-span-2`}>
                        </div>
                        <div className={`col-span-5`}>
                            <div className={`w-full flex items-center space-x-1`}>
                                <div className={`w-[70%] mt-1 h-[7px] rounded-xs bg-gray-400`}></div>
                                <div className={`w-[10%] mt-1 h-[7px] rounded-xs bg-gray-400`}></div>
                                <div className={`w-[10%] mt-1 h-[7px] rounded-xs bg-gray-400`}></div>
                                <div className={`w-[10%] mt-1 h-[7px] rounded-xs bg-gray-400`}></div>
                            </div>

                            <div className={`w-full mt-2`}>
                                <div className={`w-full mt-1 h-[7px] rounded-xs bg-gray-400`}></div>
                                <div className={`w-full mt-1 h-[7px] rounded-xs bg-gray-400`}></div>
                                <div className={`w-full mt-1 h-[7px] rounded-xs bg-gray-400`}></div>
                                <div className={`w-full mt-1 h-[7px] rounded-xs bg-gray-400`}></div>
                                <div className={`w-full mt-1 h-[7px] rounded-xs bg-gray-400`}></div>
                                <div className={`w-full mt-1 h-[7px] rounded-xs bg-gray-400`}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-2 z-10">
                <div className="flex items-center space-x-2">
                    <p className={`text-neutral-200 font-medium`}>
                        Youtube Channel
                    </p>
                    <Image src="/assets/youtube.png" alt="Youtube Channel" width={20} height={20} className="rounded-full"/>
                </div>
                <h1 className={`text-4xl font-semibold text-neutral-100`}>
                    {t('sectionTitle')}
                </h1>
                <p className={`mt-5 text-xl text-justify md:text-left text-neutral-200`}>
                   {t('sectionDescription')}
                </p>
                <Link href="https://www.youtube.com/@codewithgi" target="_blank" className={`mt-8 text-xl flex items-center group text-neutral-100 hover:text-red-500`}>
                    <span>
                        {t('sectionButton')}
                    </span>
                    <div className="w-5 group-hover:w-10 duration-100"></div>
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </Link>
            </div>
        </section>
    )
}

export default YoutubeSection;