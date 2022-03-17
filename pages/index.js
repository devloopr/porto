import Head from 'next/head'
import About from '../components/layout/About'

export default function Home() {
  return (
    
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Front-end utvikler Stian F Evensen</title>
                 <meta name="description" content="Front end utvikler stian fredrik evensen" />
                 <meta property="og:title" content="Portefolio" />
                 <meta property="og:description" content="Front End Utvikler , Programmering , jobbsøker" />
                 
                 <meta property="og:type" content="website webside" />
        <link rel="icon" href="/images/hang10.png" />
      </Head>
    
      <main className="max-w-4xl mx-auto mt-16 antialiased ">
         <About/>
      </main>
      </div>
    
   
  )
}