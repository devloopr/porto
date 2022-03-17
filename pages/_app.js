import 'tailwindcss/tailwind.css'
import Navigation from "../components/layout/Navigation";
import Footer from '../components/layout/Footer';
import { ThemeProvider } from 'next-themes'
import NextNprogress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  return <>
  
        <NextNprogress
          color="#a3666b"
          startPosition={0.3}
          stopDelayMs={200}
          height={5}
          showOnShallow={true}
/>
    <ThemeProvider attribute="class" enableSystem={false}>
    <Navigation/>
    <Component {...pageProps} />
    </ThemeProvider>
    <Footer />
    
    </>
}

export default MyApp