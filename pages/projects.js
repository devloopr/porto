import React from 'react'
import Head from 'next/head'


function projects() {

   
    return (
        <div>
                <div class="flex justify-center mt-24">
                   <h1 className="text-2xl font-bold text-zinc-700 lg:text-5xl dark:text-fourth">
                        Mine Prosjekter
                    </h1>
                </div>
             <Head>
                 <title>Prosjekter</title>
                 
                 <meta name="description" content="Front end utvikler stian fredrik evensen" />
                 <meta property="og:title" content="Portefolio" />
                 <meta property="og:description" content="Front End Utvikler , Programmering , jobbsøker" />
                 
                 <meta property="og:type" content="website webside" />
                <link rel="icon" href="/hang10.png" />
              </Head>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24  mx-auto">
                    <div class="flex flex-wrap -m-4">
                    <div class="lg:w-1/3 sm:w-1/2 p-4">
                        <div class="flex relative">
                        <img alt="Thumbnail Sciencehub" class="absolute inset-0 w-full h-full object-cover object-center"
                            src="./static/redPlanet.png"/>
                        <div class="px-8 py-10 relative z-10 w-full border-4 border-primary bg-white dark:bg-secondary opacity-0 hover:opacity-100">
                            <h2 class="tracking-widest text-sm title-font font-medium text-primary mb-1">Red Planet</h2>
                            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Skoleprosjekt</h1>
                            <p class="leading-relaxed">Dette var en html, css og javascript oppgave i det første året. Skulle bruke Nasa sin API til å skape noe.</p>
                            <a class="mt-3 text-primary inline-flex items-center" href="https://gallant-wiles-91c7ab.netlify.app/index.html">Klikk for å se</a>
                        </div>
                        </div>
                    </div>
                    <div class="lg:w-1/3 sm:w-1/2 p-4">
                        <div class="flex relative ">
                        <img alt="Thumbnail weekendwarriors" class="absolute inset-0 w-full h-full object-cover object-center"
                            src="./static/sciencemuseum.png"/>
                        <div class="px-8 py-10 relative z-10 w-full border-4 border-primary bg-white dark:bg-secondary opacity-0 hover:opacity-100">
                            <h2 class="tracking-widest text-sm title-font font-medium text-primary mb-1">Oslo Sciencs Musuem</h2>
                            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Mitt første skoleprosjekt</h1>
                            <p class="leading-relaxed">HTML og CSS oppgave. Skulle lage en musuemsside hvor målgruppen var unge mennesker. 8-16 år. </p>
                            <a class="mt-3 text-primary inline-flex items-center" href="https://boring-beaver-86cd75.netlify.app/index.html"s>Klikk for å se</a>
                        </div>
                        </div>
                    </div>
                    <div class="lg:w-1/3 sm:w-1/2 p-4">
                        <div class="flex relative">
                        <img alt="Logo For Todalshytta" class="absolute inset-0 w-full h-full object-cover object-center"
                            src="./static/holidaze.png"/>
                        <div class="px-8 py-10 relative z-10 w-full border-4 border-primary bg-white dark:bg-secondary opacity-0 hover:opacity-100">
                            <h2 class="tracking-widest text-sm title-font font-medium text-primary mb-1">HOLIDAZE</h2>
                            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Avsluttende eksamen</h1>
                            <p class="leading-relaxed">Next.js, Strapi og Tailwind CSS. Nettside for å finne hoteller. Mye av de samme funksjonene som airBNB har. Også egen admin side hvor man kan adde hoteller, lese melding etc.</p>
                            <a class="mt-3 text-primary inline-flex items-center" href="https://project-exam-2-ndlzdux94-devloopr.vercel.app/">Klikk for å se</a>
                        </div>
                        </div>
                    </div>
                    <div class="lg:w-1/3 sm:w-1/2 p-4">
                        <div class="flex relative">
                        <img alt="thumbnail Letha" class="absolute inset-0 w-full h-full object-cover object-center"
                            src="./static/todalshytta.png"/>
                        <div class="px-8 py-10 relative z-10 w-full border-4 border-primary bg-white dark:bg-secondary opacity-0 hover:opacity-100">
                            <h2 class="tracking-widest text-sm title-font font-medium text-primary mb-1">Todalshytta</h2>
                            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Enkel wordpress side </h1>
                            <p class="leading-relaxed">Webside for Todalshytta, som jeg drev i 2 år. Min far har tatt over driften her nå. Men jeg var dalig leder og kokk her de to siste sommerne</p>
                            <a class="mt-3 text-primary inline-flex items-center" href="https://todalshytta.no/">Klikk for å se</a>
                        </div>
                        </div>
                    </div>
                    <div class="lg:w-1/3 sm:w-1/2 p-4">
                        <div class="flex relative">
                        <img alt="Thumbnail launchtower" class="absolute inset-0 w-full h-full object-cover object-center"
                            src="./static/mira.png"/>
                        <div class="px-8 py-10 relative z-10 w-full border-4 border-primary bg-white dark:bg-secondary opacity-0 hover:opacity-100">
                            <h2 class="tracking-widest text-sm title-font font-medium text-primary mb-1">NOWHERE</h2>
                            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Landingsside</h1>
                            <p class="leading-relaxed"> Lagde en enkel landingside til en kjent twitch-streamer. Hun ønsket en animasjon av ordet NOWHERE. no where og now here. Løste det med jS. </p>
                            <a class="mt-3 text-primary inline-flex items-center" href="https://hungry-archimedes-ab0d3a.netlify.app/">Klikk for å se</a>
                        </div>
                        </div>
                    </div>
                    <div class="lg:w-1/3 sm:w-1/2 p-4">
                        <div class="flex relative">
                        <img alt="Github logo" class="absolute inset-0 w-full h-full object-cover object-center"
                            src="./static/git.jpg"/>
                        <div class="px-8 py-10 relative z-10 w-full border-4 border-primary bg-white dark:bg-secondary opacity-0 hover:opacity-100">
                            <h2 class="tracking-widest text-sm title-font font-medium text-primary mb-1">Github</h2>
                            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Link til min github</h1>
                            <p class="leading-relaxed">Her ligger det endel skoleoppgaver med variert vanskelighetsgrad. </p>
                            <a class="mt-3 text-primary inline-flex items-center" href="https://github.com/devloopr">Klikk for å se</a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <div class="flex justify-center mt-24">
                   <h2 className="text-2xl font-bold text-zinc-700 lg:text-5xl dark:text-fourth">
                        CV
                    </h2>
                </div>
                <div class="container px-5 py-24  mx-auto">
                <div class="flex justify-center flex-wrap -m-4">
                <div class="lg:w-1/3 sm:w-1/2 p-4">
                        <div class="flex relative">
                        <img alt="Thumbnail CV" class="absolute inset-0 w-full h-full object-cover object-center"
                            src="./static/cv.png"/>
                        <div class="px-8 py-10 relative z-10 w-full border-4 border-primary bg-white dark:bg-secondary opacity-0 hover:opacity-100">
                            <h2 class="tracking-widest text-sm title-font font-medium text-primary mb-1">CV</h2>
                            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Curriculum Vitae</h1>
                            <p class="leading-relaxed text-gray-900">Her kan du se litt av mine tidligere jobberfaringer og min skolegang.</p>
                            <a class="mt-3 text-primary inline-flex items-center" href="./static/oppdatert-cv.pdf" download>Klikk for å laste ned</a>
                        </div>
                        </div>
                    </div>
          
                    </div>
                    </div>

        </div>
    )
}

export default projects
