import React from "react"

const About = () => {
    return (
       
        <div className="container px-4 mx-auto mt-24  ">
            <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                <div className="lg:px-4 lg:mt-12 ">
                    <h1 className="text-2xl font-bold text-zinc-700 lg:text-5xl dark:text-fourth">
                        Hei
                    </h1>
                    <div className="mt-6 text-zinc-700 dark:text-fourth">
                        <p className="mb-4">
                            Mitt navn er Stian Fredrik Evensen, Jeg ble ferdig med Front-End Utvikling på Noroff høsten 2021. For tiden studerer jeg maskinlæring på Høyskolen Kristiania. Min portefølje er en samling av prosjekter jeg lagde under min tid på Noroff.
                            Denne siden er en enkel portefolio som er lagd i Next.js og Tailwind CSS, målet mitt er å skaffe meg jobb så fort som mulig.
                        </p>
                    </div>
                </div>
                <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
                <img alt="Thumbnail erik" className="object-cover mx-auto rounded-3xl"
                            src="/static/jenteneogfoss.JPG" height="400" width="400" alt="bilde av meg selv" priority="{true}"/>
                </div>
            </div>
        </div>
        
        
    )
}

export default About;