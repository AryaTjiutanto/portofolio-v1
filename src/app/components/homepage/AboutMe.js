import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons";
import { faMinus, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const AboutMe = ({colorThemeData}) => {
    const codeString = `public function handleWebhook(Request $request)
{
    $payload = $request->getContent();
    $sigHeader = $request->header('Stripe-Signature');

    $secrets = [
        config('services.stripe.webhook_secret_platform'),
        config('services.stripe.webhook_secret_connected'),
    ];

    $event = null;
    $validSecretUsed = null;

    foreach ($secrets as $secret) {
        try {
            $event = Webhook::constructEvent($payload, $sigHeader, $secret);
            $validSecretUsed = $secret;

            break;
        } catch (\Stripe\Exception\SignatureVerificationException $e) {
            continue;
        }
    }
    
    ...
}
    `;

    return (
        <section className={`w-full flex flex-col-reverse xl:grid xl:grid-cols-5 gap-x-14 2xl:gap-x-20 place-items-center px-10 md:px-36 lg:px-44 xl:px-52 2xl:px-96 duration-100 relative overflow-x-hidden py-12 md:py-32`}>
            <div className={`w-full h-[25rem] 2xl:h-[30rem] p-16 md:col-span-3 ${colorThemeData.display1BackgroundColor} flex flex-col justify-end z-10 rounded-lg md:rounded-xl lg:rounded-3xl relative font-oswald overflow-hidden group hover:shadow-2xl shadow-gray-800 cursor-pointer mt-8 xl:mt-0`}>
                <div className="absolute top-6 right-5 md:right-10 text-right">
                    <h2 className={`font-medium md:text-lg ${colorThemeData.display1DescriptionColor}`}>
                        Coding
                    </h2>
                    <h1 className={`text-2xl md:text-3xl font-bold ${colorThemeData.display1HeadingColor}`}>
                        More Than Just Hello World
                    </h1>
                </div>

                {/* screen 1 */}
                <div className="flex flex-col absolute left-20 group-hover:left-56 bottom-0 w-[85%] h-[45%] group-hover:h-[50%] bg-stone-600 rounded-tr-lg overflow-hidden duration-300 z-[2]">
                    <div className="h-[12%] flex justify-between items-center py-3 pr-5 bg-stone-700">
                        <div className="w-40 h-3 rounded-xs bg-stone-500"></div>
                        <div className="flex space-x-2 items-center text-stone-500">
                            <FontAwesomeIcon icon={faMinus}/>
                            <FontAwesomeIcon icon={faWindowMaximize} className="w-3"/>
                            <FontAwesomeIcon icon={faX} className="w-2"/>
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
                            <FontAwesomeIcon icon={faMinus}/>
                            <FontAwesomeIcon icon={faWindowMaximize} className="w-3"/>
                            <FontAwesomeIcon icon={faX} className="w-2"/>
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
                <div className="flex flex-col absolute -left-10 group-hover:left-0 bottom-0 w-[85%] h-[65%] group-hover:h-[70%] bg-neutral-600 rounded-tr-lg overflow-hidden duration-300 z-[3]">
                    <div className="h-[12%] flex justify-between items-center py-3 pr-5 bg-neutral-700">
                        <div className="w-40 h-3 rounded-xs bg-neutral-500"></div>
                        <div className="flex space-x-2 items-center text-neutral-500">
                            <FontAwesomeIcon icon={faMinus}/>
                            <FontAwesomeIcon icon={faWindowMaximize} className="w-3"/>
                            <FontAwesomeIcon icon={faX} className="w-2"/>
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
                <p className={`${colorThemeData.descriptionTextColor} font-medium`}>Hello There, </p>
                <h1 className={`text-4xl md:text-5xl lg:text-6xl font-semibold ${colorThemeData.headingTextColor}`}>
                    I'm Arya Tjiutanto
                </h1>
                <p className={`mt-5 text-lg md:text-2xl xl:text-lg 2xl:text-2xl ${colorThemeData.descriptionTextColor} text-justify xl:text-left`}>
                    I have nearly 3 years of experience in web development. I'm also a freelancer working with international clients.  
                    I understand how a high-quality website can boost user satisfaction and engagement.  
                    If you're looking to build a website, feel free to contact me — especially if it's with Laravel or React. I'm practically married to both of them!
                </p>
            </div>
        </section>
    )
}

export default AboutMe;