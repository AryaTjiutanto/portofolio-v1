import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight, faMinus, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const AboutMe = () => {
    const codeString = `export const signIn = async (email: string, password: string, ip: string): Promise<AuthToken> => {
    // get, check and increase signin attempt
    const signinAttemptsCacheKey = AUTH_CACHE_KEYS.SIGNIN_ATTEMPT(ip);
    let signinAttempts = Number(await getCache(signinAttemptsCacheKey)) | 0;

    if (signinAttempts >= MAX_SIGNIN_ATTEMPT) {
        return tooManyAttemptHandler({ cacheKey: signinAttemptsCacheKey, message: "Too many sign-in requests detected." });
    }

    signinAttempts++;
    await setCache(signinAttemptsCacheKey, signinAttempts, { PX: 6 * 60 * 60 * 1000 });

    // get and check email signin attempt 
    const emailSigninAttemptsCacheKey = AUTH_CACHE_KEYS.EMAIL_SIGNIN_ATTEMPT(email, ip);
    let attempt = Number(await getCache(emailSigninAttemptsCacheKey) || 0);

    if (attempt >= MAX_EMAIL_SIGNIN_ATTEMPT) {
        return tooManyAttemptHandler({ cacheKey: emailSigninAttemptsCacheKey, message: "Too many sign-in attempts for this account." });
    }
    `;

    return (
        <section className={`w-full flex flex-col-reverse xl:grid xl:grid-cols-5 gap-x-14 2xl:gap-x-20 place-items-center px-6 md:px-36 lg:px-44 xl:px-52 2xl:px-96 duration-100 relative overflow-x-hidden py-12 md:py-32`}>
            <div className={`w-full h-[30rem] p-16 md:col-span-3 bg-white flex flex-col justify-end z-10 rounded-lg md:rounded-xl lg:rounded-3xl relative font-oswald overflow-hidden group hover:shadow-2xl shadow-gray-800 cursor-pointer mt-8 xl:mt-0`}>
                <div className="absolute top-6 right-5 md:right-10 text-right">
                    <h2 className={`font-medium md:text-lg text-neutral-600`}>
                        Coding
                    </h2>
                    <h1 className={`text-2xl md:text-3xl font-bold text-neutral-900`}>
                        More Than Just Hello World
                    </h1>
                </div>

                {/* screen 1 */}
                <div className="flex flex-col absolute left-20 group-hover:left-56 bottom-0 w-[85%] h-[45%] group-hover:h-[50%] bg-stone-600 rounded-tr-lg overflow-hidden duration-300 z-[2]">
                    <div className="h-[12%] flex justify-between items-center py-3 pr-5 bg-stone-700">
                        <div className="w-40 h-3 rounded-xs bg-stone-500"></div>
                        <div className="flex space-x-2 items-center text-stone-500">
                            <FontAwesomeIcon icon={faMinus} />
                            <FontAwesomeIcon icon={faWindowMaximize} className="w-3" />
                            <FontAwesomeIcon icon={faX} className="w-2" />
                        </div>
                    </div>
                    <div className="h-[88%] w-full flex">
                        <div className="w-[10%]">
                            <div className="flex items-center space-x-2 py-1 pb-3 bg-stone-700 pr-6">
                                <div className="w-16 h-2 rounded-xs bg-stone-500"></div>
                            </div>
                            <div className="w-full h-5 bg-stone-600 border-b border-stone-700">

                            </div>
                        </div>
                        <div className="w-[90%] border-l border-stone-700">
                            <div className="flex items-center space-x-2 pl-3 py-1 pb-3 bg-stone-700">
                                <div className="w-16 h-2 rounded-xs bg-stone-500"></div>
                                <div className="w-16 h-2 rounded-xs bg-stone-500"></div>
                                <div className="w-16 h-2 rounded-xs bg-stone-500"></div>
                                <div className="w-16 h-2 rounded-xs bg-stone-500"></div>
                                <div className="w-16 h-2 rounded-xs bg-stone-500"></div>


                                <div className="w-2 h-2 rounded-xs bg-stone-500 ml-auto mr-1"></div>
                                <div className="w-2 h-2 rounded-xs bg-stone-500 mr-5"></div>
                            </div>
                            <div className="w-full h-5 flex items-center px-2 bg-stone-600 border-b border-stone-700">
                                <div className="w-[50%] h-1 rounded-xs bg-stone-700"></div>
                            </div>
                            <div className="text-[10px] pt-2 pl-2 cursor-text">
                            </div>
                        </div>
                    </div>
                </div>
                {/* screen 2 */}
                <div className="flex flex-col absolute left-5 group-hover:left-20 bottom-0 w-[85%] h-[57%] group-hover:h-[62%] bg-gray-600 rounded-tr-lg overflow-hidden duration-300 z-[2]">
                    <div className="h-[12%] flex justify-between items-center py-3 pr-5 bg-gray-700">
                        <div className="w-40 h-3 rounded-xs bg-gray-500"></div>
                        <div className="flex space-x-2 items-center text-gray-500">
                            <FontAwesomeIcon icon={faMinus} />
                            <FontAwesomeIcon icon={faWindowMaximize} className="w-3" />
                            <FontAwesomeIcon icon={faX} className="w-2" />
                        </div>
                    </div>
                    <div className="h-[88%] w-full flex">
                        <div className="w-[10%]">
                            <div className="flex items-center space-x-2 py-1 pb-3 bg-gray-700 pr-6">
                                <div className="w-16 h-2 rounded-xs bg-gray-500"></div>
                            </div>
                            <div className="w-full h-5 bg-gray-600 border-b border-gray-700">

                            </div>
                        </div>
                        <div className="w-[90%] border-l border-gray-700">
                            <div className="flex items-center space-x-2 pl-3 py-1 pb-3 bg-gray-700">
                                <div className="w-16 h-2 rounded-xs bg-gray-500"></div>
                                <div className="w-16 h-2 rounded-xs bg-gray-500"></div>
                                <div className="w-16 h-2 rounded-xs bg-gray-500"></div>
                                <div className="w-16 h-2 rounded-xs bg-gray-500"></div>
                                <div className="w-16 h-2 rounded-xs bg-gray-500"></div>


                                <div className="w-2 h-2 rounded-xs bg-gray-500 ml-auto mr-1"></div>
                                <div className="w-2 h-2 rounded-xs bg-gray-500 mr-5"></div>
                            </div>
                            <div className="w-full h-5 flex items-center px-2 bg-gray-600 border-b border-gray-700">
                                <div className="w-[50%] h-1 rounded-xs bg-gray-700"></div>
                            </div>
                            <div className="text-[10px] pt-2 pl-2 cursor-text">
                            </div>
                        </div>
                    </div>
                </div>
                {/* screen 3 */}
                <div className="flex flex-col absolute -left-10 group-hover:left-0 bottom-0 w-[85%] h-[65%] group-hover:h-[70%] bg-neutral-700 rounded-tr-lg overflow-hidden duration-300 z-[3]">
                    <div className="h-[12%] flex justify-between items-center py-3 pr-5 bg-neutral-700">
                        <div className="w-40 h-3 rounded-xs bg-neutral-600"></div>
                        <div className="flex space-x-2 items-center text-neutral-500">
                            <FontAwesomeIcon icon={faMinus} />
                            <FontAwesomeIcon icon={faWindowMaximize} className="w-3" />
                            <FontAwesomeIcon icon={faX} className="w-2" />
                        </div>
                    </div>
                    <div className="h-[88%] w-full flex">
                        <div className="w-[10%]">
                            <div className="flex items-center space-x-2 py-1 pb-3 bg-neutral-700 pr-6">
                                <div className="w-16 h-2 rounded-xs bg-gray-500"></div>
                            </div>
                            <div className="w-full h-5 bg-neutral-600 border-b border-neutral-700">

                            </div>
                        </div>
                        <div className="w-[90%] border-l border-neutral-700">
                            <div className="flex items-center space-x-2 pl-3 py-1 pb-3 bg-neutral-700">
                                <div className="w-16 h-2 rounded-xs bg-gray-500"></div>
                                <div className="w-16 h-2 rounded-xs bg-gray-500"></div>
                                <div className="w-16 h-2 rounded-xs bg-neutral-500"></div>
                                <div className="w-16 h-2 rounded-xs bg-gray-500"></div>
                                <div className="w-16 h-2 rounded-xs bg-gray-500"></div>


                                <div className="w-2 h-2 rounded-xs bg-neutral-500 ml-auto mr-1"></div>
                                <div className="w-2 h-2 rounded-xs bg-neutral-500 mr-5"></div>
                            </div>
                            <div className="w-full h-5 flex items-center px-2 bg-neutral-600 border-b border-neutral-700">
                                <div className="w-[50%] h-1 rounded-xs bg-neutral-700"></div>
                            </div>
                            <div className="text-[10px] pt-2 pl-2 cursor-text">
                                <SyntaxHighlighter
                                    language="php"
                                    style={oneDark}
                                    customStyle={{
                                        background: 'transparent',
                                        padding: 0,
                                        margin: 0,
                                        color: '#e5e5e5'
                                    }}
                                    codeTagProps={{
                                        style: { background: 'transparent' }
                                    }}
                                    wrapLines={true}
                                    showLineNumbers={true}
                                    startingLineNumber={140}
                                >
                                    {codeString}
                                </SyntaxHighlighter>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:col-span-2 z-10">
                <p className={`text-neutral-200 font-medium`}>Hello There, </p>
                <h1 className={`text-4xl md:text-5xl lg:text-6xl font-semibold text-neutral-100`}>
                    I'm Arya Tjiutanto
                </h1>
                <p className={`mt-5 text-lg md:text-2xl xl:text-lg 2xl:text-2xl text-neutral-200 text-justify xl:text-left`}>
                    I'm a web developer who started learning frontend development in 2020 and expanded into full-stack development in 2024. Most of my learning has come through building projects, experimenting with different technologies, and solving problems along the way.
                </p>

                <button className="mt-5 px-7 h-12 bg-neutral-100 hover:bg-violet-500 hover:text-white duration-100 flex items-center space-x-3 group cursor-pointer">
                    <span>
                        See my projects
                    </span>
                    <FontAwesomeIcon icon={faArrowRight} className="group-hover:rotate-90 duration-100"/>
                </button>
            </div>
        </section>
    )
}

export default AboutMe;