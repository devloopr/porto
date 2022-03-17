import React from "react";

const Footer = () => {
    return (
        <div className="mt-12 lg:mt-18 sm:pb-36 sm:py-12 py-6">
            <div className="mt-36 max-w-4xl px-4 mx-auto text-zinc-700 dark:fourth">
                <div className=" pb-8 mb-2 border-t-2 border-orange-300 dark:orange-300"></div>
                <div className="flex flex-col justify-between lg:flex-row items-center text-zinc-700">
                    <p>Developed with NextJS and Tailwind </p>
                    <div className="flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0">

                    <a
                            href="mailto:tencktech@gmail.com"
                            className={"transition-colors hover:text-fourth"}
                            target="_blank"
                            rel="noreferrer"
                        >
                           Mail
                        </a>
                
                 
                        <a
                            href="https://github.com/devloopr"
                            className={"transition-colors hover:text-fourth"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
            
                        <a
                            href="https://www.instagram.com/st.iian/"
                            className={"transition-colors hover:text-fourth"}
                            target="_blank"
                            rel="noreferrer"
                        >
                           Instagram
                        </a>
                   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;