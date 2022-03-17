import React from 'react'
import Head from 'next/head'

function about() {
    return (
       <>
        <Head>
        <title>Om meg</title>
       
                 <meta name="description" content="Front end utvikler stian fredrik evensen" />
                 <meta property="og:title" content="Portefolio" />
                 <meta property="og:description" content="Front End Utvikler , Programmering , jobbsøker" />
                 
                 <meta property="og:type" content="website webside" />
        <link rel="icon" href="/hang10.png" />
        </Head>
        <div className="container px-4 mx-auto mt-24  ">
               <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                <div className="lg:px-4 lg:mt-12 ">
                <div class="flex justify-center ">
                   <h1 className="text-2xl font-bold text-zinc-700 lg:text-5xl dark:text-fourth">
                        Om meg
                    </h1>
             </div>
                    <div className="mt-12 text-zinc-700 dark:text-fourth ">
                        <p className="mb-4">
                            Jeg er 38 år, bor i Rygge sammen med min samboer. Jeg har to jenter på 6 og 9 år.
                            Vi er en aktiv familie som liker å være ute i naturen. Vi fisker, klatrer og går mye på turer sammen. 
                            
                        </p>
                        <p className="mb-4">
                            Jeg har vært innom mange forskjellige bransjer i livet. Jeg har vært med på å skape ett kult fluefiskemerke fra starten av, jeg fikk ett års tid som skipsmegler. Både på Aker brygge og i Singapore. Jeg har vært miljøarbeider og jobbet med mennesker. Jeg har også hatt litt uflaks og fikk påvist PTSD etter en forferdelig opplevelse. Det gjorde at jeg rett og slett kollapset og har de siste 4 årene bygd meg selv opp igjen og er sterkere enn jeg noensinne har vært.

                       
                        </p>
                        <p className="mb-4">
                        Jeg fikk omskoleringstiltak igjennom NAV, og har fullført Front-End utvikling på Noroff. Mens jeg har vært student tok jeg over driften på Todalshytta. Her har jeg holdt på hver sommer og har skapt en suksessfull resturant. Har alltid vært glad i å lage mat og har servert mange tusen mennesker de to siste sommerne. Nå tar jeg ett enkeltemne i maskinlæring på høyskolen Kristiania, mest for å ha noe drive med om dagen, og fordi jeg var veldig nysgjerrig på faget.
                        </p>
                         </div>
                         <div className="mt-6 text-zinc-700 dark:text-fourth">
                        <p className="mb-4">
                            Data og IT har vært en interesse fra barndommen av og jeg har alltid vært glad i gaming, ikke så mye tid til det lenger, men det var en gang da jeg var en veldig habil counter-strike spiller. Da reiste vi rundt og spilte div LAN's, som Dreamhack i københavn. Laget vårt ble sponset av ett telefoniselskap som den gang het ip24. 
                        </p>
                        <p className="mb-4">
                            Jeg har brukt ADOBE programmene mye og kjenner de godt. Også Figma. Jeg har ett godt øye for design, og er en utadvendt person som liker meg like godt foran pc-skjermen som i kundemøter. Jeg har også jobbet litt med three.js og animasjoner, også brukt Blender for 3d-modellering.
                            Jeg er fremoverlent og tilegner kunnskap enkelt.
                        </p>
                        <p className="mb-4">
                            Jeg er for tiden arbeidsledig og på utkikk etter jobb. 
                        </p>
                    </div>
                   
                         </div>
                          </div>
                        <section class="overflow-hidden text-gray-700 mt-16 ">
                        <div class="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                            <div class="flex flex-wrap -m-1 md:-m-2">
                            <div class="flex flex-wrap w-1/3">
                                <div class="w-full p-1 md:p-2">
                                <img alt="Image of me cooking at todalshytta" class="block object-cover object-center w-full h-full rounded-lg"
                                    src="/images/matlaging.jpg"/>
                                </div>
                            </div>
                            <div class="flex flex-wrap w-1/3">
                                <div class="w-full p-1 md:p-2">
                                <img alt="me and my girls" class="block object-cover object-center w-full h-full rounded-lg"
                                    src="/images/megogjentene.jpg"/>
                                </div>
                            </div>
                            <div class="flex flex-wrap w-1/3">
                                <div class="w-full p-1 md:p-2">
                                <img alt="me and my gf fly-fishing" class="block object-cover object-center w-full h-full rounded-lg"
                                    src="/images/Fiske.jpg"/>
                                </div>
                            </div>
                            <div class="flex flex-wrap w-1/3">
                                <div class="w-full p-1 md:p-2">
                                <img alt="a trip to the woods with my daughter" class="block object-cover object-center w-full h-full rounded-lg"
                                    src="/images/megogebba.JPG"/>
                                </div>
                            </div>
                            <div class="flex flex-wrap w-1/3">
                                <div class="w-full p-1 md:p-2">
                                <img alt="bouldering" class="block object-cover object-center w-full h-full rounded-lg"
                                    src="/images/buldrer2.jpg"/>
                                </div>
                            </div>
                            <div class="flex flex-wrap w-1/3">
                                <div class="w-full p-1 md:p-2">
                                <img alt="iver playing hockey" class="block object-cover object-center w-full h-full rounded-lg"
                                    src="/images/klatrer.jpg"/>
                                </div>
                            </div>
                            </div>
                        </div>
                        </section>            
                    
        </div>
        </>
    )
}

export default about
