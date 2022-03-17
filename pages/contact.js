
import Head from 'next/head'
import{ init } from '@emailjs/browser';
init("user_0vYviJ8lSsYGSZa3jcmkf");

import { ContactMe } from '../components/layout/Contactme';

import React from 'react'

export default function contact() {
    return (
        <>
        <Head>
        <title>Kontakt meg</title>
        
                 <meta name="description" content="Front end utvikler stian fredrik evensen" />
                 <meta property="og:title" content="Portefolio" />
                 <meta property="og:description" content="Front End Utvikler , Programmering , jobbsøker" />
                 
                 <meta property="og:type" content="website webside" />
        <link rel="icon" href="/hang10.png" />
        </Head>
        <ContactMe />
        </>
    )
}

