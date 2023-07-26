import Home from '@/src/components/homes/Homes'
import Navbar from '@/src/components/navbar/Navbar'
import '@/styles/globals.css'
// import 'bootstrap/dist/js/bootstrap.min.js';


export default function App({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      
      

    </div>

  )
}
